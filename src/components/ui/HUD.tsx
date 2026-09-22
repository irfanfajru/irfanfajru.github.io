"use client";

import { useGameStore } from "@/store/gameStore";

export function HUD() {
    const speed = useGameStore(
        (state) => state.speed
    );

    const activeSection = useGameStore(
        (state) => state.activeSection
    );

    return (
        <>
            {/* Top left */}
            <div className="pointer-events-none absolute left-6 top-6 text-black">
                <h1 className="text-2xl font-bold">
                    Muhammad Irfan Fajru Ramadhan
                </h1>

                <p className="text-sm opacity-70">
                    Software Developer
                </p>
            </div>

            {/* Current section */}
            {activeSection && (
                <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-white/90 px-6 py-3 shadow-lg">
                    <span className="font-semibold">
                        {activeSection}
                    </span>
                </div>
            )}

            {/* Controls */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-black/50 px-5 py-3 text-sm text-white backdrop-blur">
                <div><kbd>W</kbd> <kbd>↑</kbd> Drive</div>
                <div><kbd>S</kbd> <kbd>↓</kbd> Reverse</div>
                <div><kbd>A</kbd> <kbd>←</kbd> Left</div>
                <div><kbd>D</kbd> <kbd>→</kbd> Right</div>
                <div><kbd>Space</kbd> Handbrake</div>
                <div><kbd>R</kbd> Respawn</div>
            </div>
        </>
    );
}