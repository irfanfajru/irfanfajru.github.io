"use client";

import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { useRef } from "react";
import * as THREE from "three";

import { useCarControls } from "@/hooks/useCarControls";
import { useGameStore } from "@/store/gameStore";

export function Car() {
    const { nodes, materials } = useGLTF('/models/car.glb') as any;

    const bodyRef = useRef<any>(null);
    const flWheelRef = useRef<THREE.Group>(null);
    const frWheelRef = useRef<THREE.Group>(null);
    const rlWheelRef = useRef<THREE.Group>(null);
    const rrWheelRef = useRef<THREE.Group>(null);
    const wheelRotation = useRef(0);

    const { camera } = useThree();

    const controls = useCarControls();

    const setSpeed = useGameStore(
        (state) => state.setSpeed
    );

    // ----------------------------------------
    // Car settings
    // ----------------------------------------

    const MAX_SPEED = 12;
    const REVERSE_SPEED = 6;

    const ACCELERATION = 25;
    const REVERSE_ACCELERATION = 15;

    const STEERING_SPEED = 2.5;

    // ----------------------------------------
    // Persistent rotation
    // ----------------------------------------

    const yaw = useRef(0);

    // ----------------------------------------
    // Reusable vectors
    // ----------------------------------------

    const forward = useRef(
        new THREE.Vector3()
    );

    const cameraTarget = useRef(
        new THREE.Vector3()
    );

    const cameraPosition = useRef(
        new THREE.Vector3()
    );

    const UP = new THREE.Vector3(0, 1, 0);

    const CAMERA_OFFSET = new THREE.Vector3(
        12,
        18,
        12
    );

    // ----------------------------------------
    // Frame
    // ----------------------------------------

    useFrame((_, delta) => {
        if (!bodyRef.current) return;

        const body = bodyRef.current;

        // ========================================
        // CURRENT PHYSICS VELOCITY
        // ========================================

        const velocity = body.linvel();

        // ========================================
        // INPUT
        // ========================================

        let targetSpeed = 0;

        if (controls.forward) {
            targetSpeed = MAX_SPEED;
        } else if (controls.backward) {
            targetSpeed = -REVERSE_SPEED;
        }

        const isMoving = targetSpeed !== 0;

        // ========================================
        // STEERING
        // ONLY WHEN MOVING
        // ========================================

        if (isMoving) {
            /*
             * Forward:
             * A = left
             * D = right
             *
             * Reverse:
             * A = right
             * D = left
             */

            const steeringDirection =
                targetSpeed > 0 ? 1 : -1;

            if (controls.left) {
                yaw.current +=
                    STEERING_SPEED *
                    delta *
                    steeringDirection;
            }

            if (controls.right) {
                yaw.current -=
                    STEERING_SPEED *
                    delta *
                    steeringDirection;
            }
        }

        // ========================================
        // FORWARD DIRECTION
        // ========================================

        forward.current.set(
            0,
            0,
            -1
        );

        forward.current.applyAxisAngle(
            UP,
            yaw.current
        );

        // ========================================
        // TARGET VELOCITY
        // ========================================

        let currentForwardSpeed =
            velocity.x * forward.current.x +
            velocity.z * forward.current.z;

        // ========================================
        // ACCELERATION
        // ========================================

        if (targetSpeed > 0) {
            currentForwardSpeed = THREE.MathUtils.damp(
                currentForwardSpeed,
                targetSpeed,
                ACCELERATION,
                delta
            );
        } else if (targetSpeed < 0) {
            currentForwardSpeed = THREE.MathUtils.damp(
                currentForwardSpeed,
                targetSpeed,
                REVERSE_ACCELERATION,
                delta
            );
        } else {
            // Brake / friction
            currentForwardSpeed = THREE.MathUtils.damp(
                currentForwardSpeed,
                0,
                8,
                delta
            );
        }

        // ========================================
        // APPLY PHYSICS VELOCITY
        // ========================================

        body.setLinvel(
            {
                x:
                    forward.current.x *
                    currentForwardSpeed,

                y: velocity.y,

                z:
                    forward.current.z *
                    currentForwardSpeed,
            },
            true
        );

        // ========================================
        // ROTATION
        // ========================================

        const rotation =
            new THREE.Quaternion().setFromAxisAngle(
                UP,
                yaw.current
            );

        body.setRotation(
            rotation,
            true
        );

        // ========================================
        // SPEED
        // ========================================

        setSpeed(
            Math.abs(currentForwardSpeed)
        );

        // STEERING WHEEL PIVOT
        if (controls.left) {
            if (frWheelRef.current) frWheelRef.current.rotation.y = Math.PI / 6;
            if (flWheelRef.current) flWheelRef.current.rotation.y = Math.PI / 6;
        }
        else if (controls.right) {
            if (frWheelRef.current) frWheelRef.current.rotation.y = -Math.PI / 6;
            if (flWheelRef.current) flWheelRef.current.rotation.y = -Math.PI / 6;
        } else {
            if (frWheelRef.current) frWheelRef.current.rotation.y = 0;
            if (flWheelRef.current) flWheelRef.current.rotation.y = 0;
        }

        // SPIN TIRES
        const WHEEL_RADIUS = 0.5;

        wheelRotation.current -=
            (currentForwardSpeed / WHEEL_RADIUS) * delta;

        if (frWheelRef.current) frWheelRef.current.rotation.z = wheelRotation.current;
        if (flWheelRef.current) flWheelRef.current.rotation.z = wheelRotation.current;
        if (rrWheelRef.current) rrWheelRef.current.rotation.z = wheelRotation.current;
        if (rlWheelRef.current) rlWheelRef.current.rotation.z = wheelRotation.current;

        // ========================================
        // CAMERA
        // ========================================

        const position = body.translation();

        cameraTarget.current.set(
            position.x,
            position.y,
            position.z
        );

        cameraPosition.current
            .copy(cameraTarget.current)
            .add(CAMERA_OFFSET);

        camera.position.lerp(
            cameraPosition.current,
            0.05
        );

        camera.lookAt(
            cameraTarget.current
        );
    });

    return (
        <RigidBody
            ref={bodyRef}
            type="dynamic"
            position={[0, 2, 0]}
            colliders="hull"
            mass={1000}
            linearDamping={2}
            angularDamping={10}
            enabledRotations={[false, true, false]}
            canSleep={false}
        >
            <group rotation={[0, Math.PI / 2, 0]} scale={2} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_rack.geometry}
                    material={materials.black}
                    position={[-0.803, 1.146, 0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_rack001.geometry}
                    material={materials.black}
                    position={[-0.812, 1.178, 0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_rack003.geometry}
                    material={materials.black}
                    position={[-1.563, 1.135, 0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_rack002.geometry}
                    material={materials.black}
                    position={[-0.033, 1.128, 0.004]}
                />
                <group position={[-1.119, 0.972, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002.geometry}
                        material={materials.black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_1.geometry}
                        material={materials.gray}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_r.geometry}
                    material={materials.black}
                    position={[-1.096, 0.872, 0.469]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_r.geometry}
                    material={materials.gray}
                    position={[-1.102, 0.954, 0.435]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_l.geometry}
                    material={materials.gray}
                    position={[-1.102, 0.953, -0.434]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_l.geometry}
                    material={materials.black}
                    position={[-1.096, 0.872, -0.467]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_b.geometry}
                    material={materials.gray}
                    position={[-1.618, 0.946, -0.002]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_b.geometry}
                    material={materials.black}
                    position={[-1.626, 0.854, -0.01]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.awning.geometry}
                    material={materials.black}
                    position={[-0.819, 1.219, -0.413]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bracket.geometry}
                    material={materials.black}
                    position={[-0.835, 1.156, -0.347]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tent.geometry}
                    material={materials.black}
                    position={[-0.819, 1.266, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_body_0.geometry}
                    material={materials.body}
                    position={[0.226, 0.676, 0.005]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_brake_lights_0.geometry}
                    material={materials.brake_lights}
                    position={[-0.567, 1.081, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_dark_0.geometry}
                    material={materials.dark}
                    position={[0.421, 0.633, -0.009]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_front_lights_0.geometry}
                    material={materials.front_lights}
                    position={[1.394, 0.658, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_glass_0.geometry}
                    material={materials.glass}
                    position={[0.043, 0.975, 0.02]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_headlights_0.geometry}
                    material={materials.headlights}
                    position={[1.374, 0.656, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_headlights_glass_0.geometry}
                    material={materials.headlights_glass}
                    position={[1.404, 0.662, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_mirrors_0.geometry}
                    material={materials.mirrors}
                    position={[0.533, 0.845, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_plastic_0.geometry}
                    material={materials.plastic}
                    position={[0.509, 0.578, -0.005]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_rear_lights_0.geometry}
                    material={materials.rear_lights}
                    position={[-1.627, 0.704, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_reverse_lights_0.geometry}
                    material={materials.reverse_lights}
                    position={[-1.63, 0.539, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_turnsignal_lights_0.geometry}
                    material={materials.turnsignal_lights}
                    position={[-0.169, 0.649, 0]}
                />

                <group ref={flWheelRef} position={[1.044, 0.248, -0.58]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_rim_rim_color_0.geometry}
                        material={materials.rim_color}
                        position={[0, 0, 0]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_rim_rim_main_0.geometry}
                        material={materials.rim_main}
                        position={[0, 0, 0.038]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fl_tire_Tires_0.geometry}
                        material={materials.Tires}
                        position={[-0.001, -0.001, 0.065]}
                    />
                </group>

                <group ref={frWheelRef} position={[1.044, 0.248, 0.58]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_rim_rim_color_0.geometry}
                        material={materials.rim_color}
                        position={[0, 0, 0]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_rim_rim_main_0.geometry}
                        material={materials.rim_main}
                        position={[0, 0, -0.039]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fr_tire_Tires_0.geometry}
                        material={materials.Tires}
                        position={[0, -0.001, -0.066]}
                    />
                </group>

                <group ref={rlWheelRef} position={[-0.95, 0.248, -0.58]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_rim_rim_color_0.geometry}
                        material={materials.rim_color}
                        position={[0, 0, 0]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_rim_rim_main_0.geometry}
                        material={materials.rim_main}
                        position={[0, 0, 0.038]}
                    />

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rl_tire_Tires_0.geometry}
                        material={materials.Tires}
                        position={[-0.001, -0.001, 0.065]}
                    />
                </group>

                <group ref={rrWheelRef} position={[-0.95, 0.248, 0.58]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_rim_rim_color_0.geometry}
                        material={materials.rim_color}
                        position={[0, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_rim_rim_main_0.geometry}
                        material={materials.rim_main}
                        position={[0, 0, -0.039]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.rr_tire_Tires_0.geometry}
                        material={materials.Tires}
                        position={[0, -0.001, -0.066]}
                    />
                </group>

            </group>
        </RigidBody>
    );
}


useGLTF.preload('/models/car.glb')