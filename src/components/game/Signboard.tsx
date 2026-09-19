"use client";

import { Text } from "@react-three/drei";

type Props = {
    position: [number, number, number];
    text: string;
};

export function Signboard({
    position,
    text,
}: Props) {
    return (
        <group position={position}>
            {/* Pole */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 2]} />

                <meshStandardMaterial />
            </mesh>

            {/* Board */}
            <mesh>
                <boxGeometry args={[3, 1, 0.15]} />

                <meshStandardMaterial />
            </mesh>

            {/* Text */}
            <Text
                position={[0, 0, 0.1]}
                fontSize={0.35}
                anchorX="center"
                anchorY="middle"
                color="white"
            >
                {text}
            </Text>
        </group>
    );
}