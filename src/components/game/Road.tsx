"use client";

import { CuboidCollider } from "@react-three/rapier";

export function Road() {
    const roadLength = 320;

    return (
        <group>
            {/* Road */}
            <mesh
                position={[0, -0.5, -150]}
                receiveShadow
            >
                <boxGeometry args={[8, 0.5, roadLength]} />

                <meshStandardMaterial color="#6b665c" />
            </mesh>

            {/* Ground */}
            <mesh
                position={[0, -1, -150]}
                receiveShadow
            >
                <boxGeometry args={[80, 1, roadLength]} />

                <meshStandardMaterial color="#78906b" />
            </mesh>

            {/* Road physics */}
            <CuboidCollider
                args={[4, 0.25, roadLength / 2]}
                position={[0, -0.25, -150]}
            />
        </group>
    );
}