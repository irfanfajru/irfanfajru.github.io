"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import { World } from "./World";
import { HUD } from "../ui/HUD";
import { KeyboardControls, Stats, useProgress } from "@react-three/drei";
import { keyboardMap } from "@/data/keyboardMap";
import LoadingScreen from "../ui/LoadingScreen";
import { usePageVisible } from "@/hooks/usePageVisible";
import { useGameStore } from "@/store/gameStore";

export default function Game() {
    const isVisible = usePageVisible();
    const { active: isLoading } = useProgress();
    const { isPaused } = useGameStore();

    return (
        <div className="relative h-screen w-full">
            <KeyboardControls map={keyboardMap}>
                <Canvas
                    shadows
                    orthographic
                    camera={{
                        position: [12, 18, 12],
                        zoom: 30,
                    }}
                    frameloop="demand"
                    performance={{
                        current: 1,
                        min: 0.1,
                        max: 1,
                        debounce: 200,
                    }
                    }
                    dpr={.9}
                >
                    <axesHelper args={[10]} />
                    <Stats />
                    <Suspense fallback={null}>
                        <Physics debug={false} gravity={[0, -9.81, 0]} timeStep="vary" paused={!isVisible || isLoading || isPaused}>
                            <World />
                        </Physics>
                    </Suspense>
                </Canvas>
            </KeyboardControls>

            <LoadingScreen />
            <HUD />
        </div>
    );
}