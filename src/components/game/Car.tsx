"use client";

import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { useCarControls } from "@/hooks/useCarControls";
import { useGameStore } from "@/store/gameStore";

export function Car() {
    const bodyRef = useRef<any>(null);

    const controls = useCarControls();

    const setSpeed = useGameStore(
        (state) => state.setSpeed
    );

    useFrame((_, delta) => {
        if (!bodyRef.current) return;

        const body = bodyRef.current;

        const position = body.translation();

        const speed = controls.forward
            ? 12
            : controls.backward
                ? -6
                : 0;

        setSpeed(Math.abs(speed));

        const nextZ =
            position.z + speed * delta;

        body.setNextKinematicTranslation({
            x: position.x,
            y: position.y,
            z: nextZ,
        });

        if (controls.left) {
            body.setNextKinematicRotation(
                new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(0, 0.3, 0)
                )
            );
        }

        if (controls.right) {
            body.setNextKinematicRotation(
                new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(0, -0.3, 0)
                )
            );
        }
    });

    return (
        <RigidBody
            ref={bodyRef}
            type="kinematicPosition"
            position={[0, 1, 0]}
            colliders="cuboid"
        >
            <mesh castShadow>
                <boxGeometry args={[2, 1, 4]} />

                <meshStandardMaterial color="#1e293b" />
            </mesh>
        </RigidBody>
    );
}