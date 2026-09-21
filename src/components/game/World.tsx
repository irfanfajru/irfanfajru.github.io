"use client";

import { Environment } from "@react-three/drei";

import Car from "./Car";
import { Ground } from "./Ground";
import { Track } from "./Track";

export function World() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={1} />

            <directionalLight
                position={[10, 20, 10]}
                intensity={3}
                castShadow
            />

            {/* Environment */}
            <Environment preset="forest" />

            {/* Ground / road */}
            <Ground />

            <Track />

            {/* Player */}
            <Car position={[0, 2, 0]} rotation={[0, 0, 0]} />
        </>
    );
}