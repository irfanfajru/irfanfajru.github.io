"use client";

import {
    CuboidCollider,
    RigidBody,
} from "@react-three/rapier";

export function Road() {
    return (
        <group>
            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    position={[0, -1, 0]}
                    receiveShadow
                >
                    <boxGeometry
                        args={[80, 1, 320]}
                    />

                    <meshStandardMaterial
                        color="#78906b"
                    />
                </mesh>
            </RigidBody>
        </group>
    );
}