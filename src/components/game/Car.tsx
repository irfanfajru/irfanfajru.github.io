"use client";

import type { Collider } from '@dimforge/rapier3d-compat';
import { KeyboardControls, OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CuboidCollider, Physics, type RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier';
import { type RefObject, useRef, useState } from 'react';
import * as THREE from 'three';
import { type WheelInfo, useVehicleControls } from '@/hooks/useVehicleControls';
import type { KeyControls } from '@/data/keyboardMap';

const spawn = {
    position: [0, 2, 0] as THREE.Vector3Tuple,
    rotation: [0, 0, 0] as THREE.Vector3Tuple,
};

const wheelInfo: Omit<WheelInfo, 'position'> = {
    axleCs: new THREE.Vector3(0, 0, -1),
    suspensionRestLength: 0.125,
    suspensionStiffness: 24,
    maxSuspensionTravel: 1,
    sideFrictionStiffness: 3,
    frictionSlip: 1.5,
    radius: 0.15,
};

const wheels: WheelInfo[] = [
    // front
    { position: new THREE.Vector3(-0.65, -0.15, -0.45), ...wheelInfo },
    { position: new THREE.Vector3(-0.65, -0.15, 0.45), ...wheelInfo },
    // rear
    { position: new THREE.Vector3(0.65, -0.15, -0.45), ...wheelInfo },
    { position: new THREE.Vector3(0.65, -0.15, 0.45), ...wheelInfo },
];

const _airControlAngVel = new THREE.Vector3();

type CarProps = {
    position: THREE.Vector3Tuple;
    rotation: THREE.Vector3Tuple;
};

const CAMERA_OFFSET = new THREE.Vector3(
    12,
    18,
    12
);

export default function Car({ position, rotation }: CarProps) {
    const { world, rapier } = useRapier();
    const threeControls = useThree((s) => s.controls);
    const [, getKeyboardControls] = useKeyboardControls<keyof KeyControls>();

    const chasisMeshRef = useRef<THREE.Mesh>(null!);
    const chasisBodyRef = useRef<RapierRigidBody>(null!);
    const wheelsRef: RefObject<(THREE.Object3D | null)[]> = useRef([]);

    const { vehicleController } = useVehicleControls(chasisBodyRef, wheelsRef as RefObject<THREE.Object3D[]>, wheels);

    const { accelerateForce, brakeForce, steerAngle } = {
        accelerateForce: { value: 2, min: 0, max: 10 },
        brakeForce: { value: 0.05, min: 0, max: 0.5, step: 0.01 },
        steerAngle: { value: 40 * (Math.PI / 180), min: 0, max: Math.PI / 12 },
    };

    const ground = useRef<Collider | null>(null);

    const cameraTarget = useRef(
        new THREE.Vector3()
    );

    const cameraPosition = useRef(
        new THREE.Vector3()
    );

    useFrame((state, delta) => {
        if (!chasisMeshRef.current || !vehicleController.current || !!threeControls) return;

        const t = 1.0 - 0.01 ** delta;

        /* controls */

        const controller = vehicleController.current;

        const chassisRigidBody = controller.chassis();

        const controls = getKeyboardControls();

        // rough ground check
        let outOfBounds = false;

        const ray = new rapier.Ray(chassisRigidBody.translation(), { x: 0, y: -1, z: 0 });

        const raycastResult = world.castRay(ray, 1, false, undefined, undefined, undefined, chassisRigidBody);

        ground.current = null;

        if (raycastResult) {
            const collider = raycastResult.collider;
            const userData = collider.parent()?.userData as any;
            outOfBounds = userData?.outOfBounds;

            ground.current = collider;
        }

        // engine force and back force
        const engineForce = Number(controls.forward) * accelerateForce.value - Number(controls.back);
        controller.setWheelEngineForce(2, engineForce);
        controller.setWheelEngineForce(3, engineForce);

        // brake force
        const wheelBrake = Number(controls.brake) * brakeForce.value;
        controller.setWheelBrake(2, wheelBrake);
        controller.setWheelBrake(3, wheelBrake);

        // steering
        const currentSteering = controller.wheelSteering(0) || 0;
        const steerDirection = Number(controls.left) - Number(controls.right);

        const steering = THREE.MathUtils.lerp(currentSteering, steerAngle.value * steerDirection, 0.5);

        controller.setWheelSteering(0, steering);
        controller.setWheelSteering(1, steering);

        // air control
        if (!ground.current) {
            const forwardAngVel = Number(controls.forward) - Number(controls.back);
            const sideAngVel = Number(controls.left) - Number(controls.right);

            const angvel = _airControlAngVel.set(0, sideAngVel * t, forwardAngVel * t);
            angvel.applyQuaternion(chassisRigidBody.rotation());
            angvel.add(chassisRigidBody.angvel());

            chassisRigidBody.setAngvel(new rapier.Vector3(angvel.x, angvel.y, angvel.z), true);
        }

        if (controls.reset || outOfBounds) {
            const chassis = controller.chassis();
            chassis.setTranslation(new rapier.Vector3(...spawn.position), true);
            const spawnRot = new THREE.Euler(...spawn.rotation);
            const spawnQuat = new THREE.Quaternion().setFromEuler(spawnRot);
            chassis.setRotation(spawnQuat, true);
            chassis.setLinvel(new rapier.Vector3(0, 0, 0), true);
            chassis.setAngvel(new rapier.Vector3(0, 0, 0), true);
        }

        /* camera */
        const position = vehicleController.current?.chassis().translation();

        cameraTarget.current.set(
            position.x,
            position.y,
            position.z
        );

        cameraPosition.current
            .copy(cameraTarget.current)
            .add(CAMERA_OFFSET);

        state.camera.position.lerp(
            cameraPosition.current,
            0.05
        );

        state.camera.lookAt(
            cameraTarget.current
        );
    });

    return (
        <>
            <RigidBody
                position={position}
                rotation={rotation}
                canSleep={false}
                ref={chasisBodyRef}
                colliders={false}
                type="dynamic"
            >
                <CuboidCollider args={[0.8, 0.2, 0.4]} />

                {/* chassis */}
                <mesh ref={chasisMeshRef}>
                    <boxGeometry args={[1.6, 0.4, 0.8]} />
                </mesh>

                {/* wheels */}
                {wheels.map((wheel, index) => (
                    <group
                        key={String(index)}
                        ref={(ref) => {
                            wheelsRef.current[index] = ref;
                        }}
                        position={wheel.position}
                    >
                        <group rotation-x={-Math.PI / 2}>
                            <mesh>
                                <cylinderGeometry args={[0.15, 0.15, 0.25, 16]} />
                                <meshStandardMaterial color="#222" />
                            </mesh>
                            <mesh scale={1.01}>
                                <cylinderGeometry args={[0.15, 0.15, 0.25, 6]} />
                                <meshStandardMaterial color="#fff" wireframe />
                            </mesh>
                        </group>
                    </group>
                ))}
            </RigidBody>
        </>
    );
};