"use client";

import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { useCarControls } from "@/hooks/useCarControls";
import { useGameStore } from "@/store/gameStore";

export function Car() {
    const bodyRef = useRef<any>(null);
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

    useFrame((_, delta) => {
        if (!bodyRef.current) return;

        const body = bodyRef.current;

        const position = body.translation();

        // ========================================
        // SPEED
        // ========================================

        let speed = 0;

        if (controls.forward) {
            speed = MAX_SPEED;
        } else if (controls.backward) {
            speed = -REVERSE_SPEED;
        }

        const isMoving = speed !== 0;

        // ========================================
        // STEERING
        // ONLY WHEN MOVING
        // ========================================

        if (isMoving) {
            if (controls.left) {
                yaw.current +=
                    STEERING_SPEED * delta;
            }

            if (controls.right) {
                yaw.current -=
                    STEERING_SPEED * delta;
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
        // MOVEMENT
        // ========================================

        const nextPosition = {
            x:
                position.x +
                forward.current.x *
                speed *
                delta,

            y: position.y,

            z:
                position.z +
                forward.current.z *
                speed *
                delta,
        };

        body.setNextKinematicTranslation(
            nextPosition
        );

        // ========================================
        // ROTATION
        // ========================================

        const rotation =
            new THREE.Quaternion().setFromAxisAngle(
                UP,
                yaw.current
            );

        body.setNextKinematicRotation(
            rotation
        );

        // ========================================
        // SPEED
        // ========================================

        setSpeed(Math.abs(speed));

        // ========================================
        // CAMERA
        // ========================================

        cameraTarget.current.set(
            nextPosition.x,
            nextPosition.y,
            nextPosition.z
        );

        cameraPosition.current
            .copy(cameraTarget.current)
            .add(CAMERA_OFFSET);

        camera.position.lerp(
            cameraPosition.current,
            0.08
        );

        camera.lookAt(
            cameraTarget.current
        );
    });

    return (
        <RigidBody
            ref={bodyRef}
            type="kinematicPosition"
            position={[0, 1, 0]}
            colliders="cuboid"
        >
            <mesh castShadow>
                <boxGeometry
                    args={[2, 1, 4]}
                />

                <meshStandardMaterial
                    color="#1e293b"
                />
            </mesh>
        </RigidBody>
    );
}