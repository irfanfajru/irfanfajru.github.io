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
                    position={[0, -3, -16]}
                    receiveShadow
                >
                    <boxGeometry
                        args={[150, 5, 150]}
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