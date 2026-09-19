"use client";

import {
    CuboidCollider,
    RigidBody,
} from "@react-three/rapier";

export function Road() {
    return (
        <group>
            {/* ================================
                Ground
            ================================= */}

            <mesh
                position={[0, -1, -150]}
                receiveShadow
            >
                <boxGeometry
                    args={[80, 1, 320]}
                />

                <meshStandardMaterial
                    color="#78906b"
                />
            </mesh>

            {/* ================================
                Physics
            ================================= */}

            <RigidBody type="fixed">
                {/* Ground collider */}
                <CuboidCollider
                    args={[
                        40,
                        0.5,
                        320 / 2,
                    ]}
                    position={[
                        0,
                        -1,
                        -150,
                    ]}
                />
            </RigidBody>
        </group>
    );
}