"use client";

import type { Collider, Vector } from '@dimforge/rapier3d-compat';
import { KeyboardControls, OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CuboidCollider, Physics, type RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier';
import { type RefObject, useRef, useState } from 'react';
import * as THREE from 'three';
import { type WheelInfo, useVehicleControls } from '@/hooks/useVehicleControls';
import type { KeyControls } from '@/data/keyboardMap';
import { GLTF } from 'three-stdlib'
import { useGameStore } from '@/store/gameStore';

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
    frictionSlip: 2,
    radius: 0.35,
};

const wheels: WheelInfo[] = [
    // front
    { position: new THREE.Vector3(-1.534, 0.332, 0.858), ...wheelInfo },
    { position: new THREE.Vector3(-1.534, 0.332, -0.858), ...wheelInfo },
    // rear
    { position: new THREE.Vector3(1.25, 0.353, 0.857), ...wheelInfo },
    { position: new THREE.Vector3(1.25, 0.353, -0.857), ...wheelInfo },
];

const _airControlAngVel = new THREE.Vector3();

const CAMERA_OFFSET = new THREE.Vector3(
    12,
    18,
    12
);

type GLTFResult = GLTF & {
    nodes: {
        fl_rim: THREE.Mesh
        fl_rim_black: THREE.Mesh
        fl_wheel: THREE.Mesh
        fr_rim: THREE.Mesh
        fr_rim_black: THREE.Mesh
        fr_wheel: THREE.Mesh
        rl_rim: THREE.Mesh
        rl_rim_black: THREE.Mesh
        rl_wheel: THREE.Mesh
        rr_rim: THREE.Mesh
        rr_rim_black: THREE.Mesh
        rr_wheel: THREE.Mesh
        Plane001_Material014_0: THREE.Mesh
        Plane_black_0: THREE.Mesh
        Plane_car002_0: THREE.Mesh
        Plane_car_0: THREE.Mesh
        Plane_glas_fara_0: THREE.Mesh
        Plane_glass_0: THREE.Mesh
        Plane_Material003_0: THREE.Mesh
        Plane_Material011_0: THREE.Mesh
        Plane_Material012_0: THREE.Mesh
        Plane_Material013_0: THREE.Mesh
        Plane_Material_0: THREE.Mesh
        Plane_metall_0: THREE.Mesh
    }
    materials: {
        ['Material.002']: THREE.MeshStandardMaterial
        black: THREE.MeshPhysicalMaterial
        ['Material.004']: THREE.MeshPhysicalMaterial
        ['Material.014']: THREE.MeshStandardMaterial
        ['car.002']: THREE.MeshStandardMaterial
        material: THREE.MeshStandardMaterial
        glas_fara: THREE.MeshStandardMaterial
        glass: THREE.MeshStandardMaterial
        ['Material.003']: THREE.MeshStandardMaterial
        ['Material.011']: THREE.MeshStandardMaterial
        ['Material.012']: THREE.MeshStandardMaterial
        ['Material.013']: THREE.MeshStandardMaterial
        ['Material.001']: THREE.MeshPhysicalMaterial
        metall: THREE.MeshStandardMaterial
    }
}

export default function Car() {
    const { nodes, materials } = useGLTF('/models/car.glb') as unknown as GLTFResult;

    const { world, rapier } = useRapier();
    const threeControls = useThree((s) => s.controls);
    const [, getKeyboardControls] = useKeyboardControls<keyof KeyControls>();

    const chasisMeshRef = useRef<THREE.Mesh>(null!);
    const chasisBodyRef = useRef<RapierRigidBody>(null!);
    const wheelsRef: RefObject<(THREE.Object3D | null)[]> = useRef([]);

    const { vehicleController } = useVehicleControls(chasisBodyRef, wheelsRef as RefObject<THREE.Object3D[]>, wheels);

    const { accelerateForce, reverserForce, brakeForce, steerAngle } = {
        accelerateForce: { value: 20, normal: 20, drift: 1000 },
        reverserForce: { value: 15, normal: 15, drift: 15 },
        brakeForce: { value: 20, normal: 20, drift: 1000 },
        steerAngle: { value: 40 * (Math.PI / 180), normal: 40 * (Math.PI / 180), drift: 60 * (Math.PI / 180) },
    };

    const ground = useRef<Collider | null>(null);

    const cameraTarget = useRef(
        new THREE.Vector3()
    );

    const cameraPosition = useRef(
        new THREE.Vector3()
    );

    const isDriftMode = useGameStore(
        (state) => state.isDriftMode
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

        // drift mode
        if (isDriftMode) {
            const driftFriction = 0.5;

            controller.setWheelFrictionSlip(2, driftFriction);
            controller.setWheelFrictionSlip(3, driftFriction);

            accelerateForce.value = accelerateForce.drift;
            brakeForce.value = brakeForce.drift;
            steerAngle.value = steerAngle.drift

        } else {
            controller.setWheelFrictionSlip(2, wheelInfo.frictionSlip)
            controller.setWheelFrictionSlip(3, wheelInfo.frictionSlip)

            accelerateForce.value = accelerateForce.normal;
            brakeForce.value = brakeForce.normal;
            steerAngle.value = steerAngle.normal
        }

        // engine force and back force
        const engineForce = Number(controls.forward) * accelerateForce.value - Number(controls.back) * reverserForce.value;
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

        // respawn
        if (controls.reset || outOfBounds) {
            const chassis = controller.chassis();
            chassis.setTranslation(new rapier.Vector3(...spawn.position), true);
            const spawnRot = new THREE.Euler(...spawn.rotation);
            const spawnQuat = new THREE.Quaternion().setFromEuler(spawnRot);
            chassis.setRotation(spawnQuat, true);
            chassis.setLinvel(new rapier.Vector3(0, 0, 0), true);
            chassis.setAngvel(new rapier.Vector3(0, 0, 0), true);
        }

        // camera
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
            1
        );

        state.camera.lookAt(
            cameraTarget.current
        );
    });

    return (
        <>
            <RigidBody
                position={spawn.position}
                rotation={spawn.rotation}
                canSleep={false}
                ref={chasisBodyRef}
                colliders={"trimesh"}
                type="dynamic"
            >

                <group ref={(ref) => {
                    wheelsRef.current[0] = ref;
                }}
                    position={[-1.534, 0.332, 0.858]} >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_rim.geometry}
                        material={materials['Material.002']}
                        position={[0, 0.002, 0.049]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_rim_black.geometry}
                        material={materials.black}
                        position={[0, 0.002, -0.045]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_wheel.geometry}
                        material={materials['Material.004']}
                        position={[0, -0.004, -0.004]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                </group>
                <group ref={(ref) => {
                    wheelsRef.current[1] = ref;
                }} position={[-1.534, 0.332, -0.858]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_rim.geometry}
                        material={materials['Material.002']}
                        position={[0, 0.002, -0.049]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_rim_black.geometry}
                        material={materials.black}
                        position={[0, 0.002, 0.045]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_wheel.geometry}
                        material={materials['Material.004']}
                        position={[0, -0.004, 0.004]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.336}
                    />
                </group>
                <group
                    ref={(ref) => {
                        wheelsRef.current[2] = ref;
                    }}
                    position={[1.25, 0.353, 0.857]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_rim.geometry}
                        material={materials['Material.002']}
                        position={[0, 0.003, 0.07]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_rim_black.geometry}
                        material={materials.black}
                        position={[0, 0.003, -0.03]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_wheel.geometry}
                        material={materials['Material.004']}
                        position={[0, -0.006, -0.04]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                </group>
                <group
                    ref={(ref) => {
                        wheelsRef.current[3] = ref;
                    }}
                    position={[1.25, 0.353, -0.857]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_rim.geometry}
                        material={materials['Material.002']}
                        position={[0, 0.003, -0.07]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_rim_black.geometry}
                        material={materials.black}
                        position={[0, 0.003, 0.03]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_wheel.geometry}
                        material={materials['Material.004']}
                        position={[0, -0.006, 0.04]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={[0.361, 0.361, 0.337]}
                    />
                </group>

                <group ref={chasisMeshRef} position={[-0.469, 0.649, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_Material014_0.geometry}
                        material={materials['Material.014']}
                        position={[2.565, 0.065, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_black_0.geometry}
                        material={materials.black}
                        position={[0.65, -0.259, -0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_car002_0.geometry}
                        material={materials['car.002']}
                        position={[1.276, 0.564, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_car_0.geometry}
                        material={materials.material}
                        position={[-1.763, -0.032, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_glas_fara_0.geometry}
                        material={materials.glas_fara}
                        position={[2.573, 0.065, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_glass_0.geometry}
                        material={materials.glass}
                        position={[0.656, 0.348, -0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material003_0.geometry}
                        material={materials['Material.003']}
                        position={[-1.606, -0.107, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material011_0.geometry}
                        material={materials['Material.011']}
                        position={[-1.548, -0.11, 0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material012_0.geometry}
                        material={materials['Material.012']}
                        position={[-1.43, -0.102, 0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material013_0.geometry}
                        material={materials['Material.013']}
                        position={[-1.585, -0.112, 0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material_0.geometry}
                        material={materials['Material.001']}
                        position={[0.463, -0.101, 0.001]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_metall_0.geometry}
                        material={materials.metall}
                        position={[-0.25, -0.219, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
            </RigidBody>
        </>
    );
};

useGLTF.preload('/models/car.glb');