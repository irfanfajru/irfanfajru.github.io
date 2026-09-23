"use client";

import { useGameStore } from "@/store/gameStore";
import FastTravel from "./FastTravel";
import DriftMode from "./DriftMode";

export function HUD() {
    const activeSection = useGameStore(
        (state) => state.activeSection
    );

    return (
        <>
            {/* Top left */}
            <div className="absolute left-6 top-6 text-black">
                <h1 className="text-2xl font-bold text-gray-900">
                    Muhammad Irfan Fajru Ramadhan
                </h1>

                <p className="text-sm opacity-70 text-gray-700">
                    Software Developer
                </p>
            </div>

            {/* top right */}
            <div className="absolute right-6 top-6 flex gap-6">
                <DriftMode />
                <FastTravel />
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
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">W</kbd>
                    <p>or</p>
                    <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
                        </svg>
                        <span className="sr-only">Arrow key up</span>
                    </kbd>
                    <p>Drive</p>
                </div>

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">S</kbd>
                    <p>or</p>
                    <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                        <span className="sr-only">Arrow key down</span>
                    </kbd>
                    <p>Reverse</p>
                </div>

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">A</kbd>
                    <p>or</p>
                    <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                        </svg>
                        <span className="sr-only">Arrow key left</span>
                    </kbd>
                    <p>Left</p>
                </div>

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">D</kbd>
                    <p>or</p>
                    <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                        </svg>
                        <span className="sr-only">Arrow key right</span>
                    </kbd>
                    <p>Right</p>
                </div>

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Space</kbd>
                    <p>Handbrake</p>
                </div>

                <div className="text-gray-900 flex gap-2 items-center">
                    <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">R</kbd>
                    <p>Respawn</p>
                </div>

            </div>
        </>
    );
}