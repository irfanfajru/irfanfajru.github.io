"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import { World } from "./World";
import { HUD } from "../ui/HUD";

export default function Game() {
    return (
        <div className="relative h-screen w-full">
            <Canvas
                shadows
                camera={{
                    position: [0, 5, 10],
                    fov: 60,
                }}
            >
                <Suspense fallback={null}>
                    <Physics gravity={[0, -9.81, 0]}>
                        <World />
                    </Physics>
                </Suspense>
            </Canvas>

            <HUD />
        </div>
    );
}