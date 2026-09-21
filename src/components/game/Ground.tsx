"use client";

import {
    CuboidCollider,
    RigidBody,
} from "@react-three/rapier";

export function Ground() {
    return (
        <group>
            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    position={[0, -1, -16]}
                    receiveShadow
                >
                    <boxGeometry
                        args={[150, 1, 150]}
                    />

                    <meshStandardMaterial
                        color="#78906b"
                        transparent
                        opacity={0}
                    />
                </mesh>
            </RigidBody>
        </group>
    );
}