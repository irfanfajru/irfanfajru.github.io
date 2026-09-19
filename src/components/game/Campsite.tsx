"use client";

import { useGameStore } from "@/store/gameStore";

type Props = {
    position: [number, number, number];
    title: string;
};

export function Campsite({
    position,
    title,
}: Props) {
    const setActiveSection =
        useGameStore(
            (state) => state.setActiveSection
        );

    return (
        <group position={position}>
            {/* Camp area */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                onClick={() =>
                    setActiveSection(title)
                }
            >
                <circleGeometry args={[8, 32]} />

                <meshStandardMaterial color="#a78b65" />
            </mesh>

            {/* Tent */}
            <mesh position={[4, 1, 0]}>
                <coneGeometry args={[2, 3, 4]} />

                <meshStandardMaterial />
            </mesh>

            {/* Camp fire */}
            <mesh position={[-3, 0.5, 2]}>
                <sphereGeometry args={[0.6, 16, 16]} />

                <meshStandardMaterial emissive="#ff8a00" />
            </mesh>
        </group>
    );
}