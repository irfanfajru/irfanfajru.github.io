"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import { World } from "./World";
import { HUD } from "../ui/HUD";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { keyboardMap } from "@/data/keyboardMap";

export default function Game() {
    return (
        <div className="relative h-screen w-full">
            <KeyboardControls map={keyboardMap}>
                <Canvas
                    shadows
                    orthographic
                    camera={{
                        position: [12, 18, 12],
                        zoom: 40,
                    }}
                >
                    {/* Visualizes X, Y, and Z axes. Arguments: [length] */}
                    <axesHelper args={[10]} />

                    <OrbitControls enableDamping />

                    <Suspense fallback={null}>
                        <Physics debug={true} gravity={[0, -9.81, 0]} timeStep="vary">
                            <World />
                        </Physics>
                    </Suspense>
                </Canvas>
            </KeyboardControls>
            <HUD />
        </div>
    );
}