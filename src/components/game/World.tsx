"use client";

import { Environment } from "@react-three/drei";

import Car from "./Car";
import { Ground } from "./Ground";
import { Track } from "./Track";

export function World() {
    return (
        <>
            <ambientLight intensity={1} />

            <directionalLight
                position={[10, 20, 10]}
                intensity={1}
                castShadow
            />

            <Environment preset="forest" />

            <Ground />

            <Track />

            <Car />
        </>
    );
}