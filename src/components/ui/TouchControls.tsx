"use client"

import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/outline"
import HandbrakeIcon from "./HandbrakeIcon";
import SteeringWheelIcon from "./SteeringWheelIcon";
import { useRef, useState } from "react";
import { useTouchControlsStore } from "@/store/touchControlsStore";

export default function TouchControls() {

    const touchControlsState = useTouchControlsStore();

    const [rotation, setRotation] = useState(0);

    const isHolding = useRef(false);
    const lastX = useRef(0);

    const handlePointerDown = (
        e: React.PointerEvent<HTMLButtonElement>
    ) => {
        isHolding.current = true;
        lastX.current = e.clientX;

        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (
        e: React.PointerEvent<HTMLButtonElement>
    ) => {
        if (!isHolding.current) return;

        const deltaX = e.clientX - lastX.current;

        lastX.current = e.clientX;

        setRotation((prev) => {
            const next = prev + deltaX * 1.5;

            if (next > 0) {
                touchControlsState.right = true;
                touchControlsState.left = false;
            }
            else {
                touchControlsState.left = true;
                touchControlsState.right = false;
            }

            return Math.max(-90, Math.min(90, next));
        });
    };

    const handlePointerUp = () => {
        isHolding.current = false;
        setRotation(() => {
            touchControlsState.right = false;
            touchControlsState.left = false;
            return 0;
        });
    };

    return (
        <>
            <div className="absolute bottom-3 right-3 flex flex-col gap-2">
                <button
                    type="button"
                    onPointerDown={() => touchControlsState.setForward(true)}
                    onPointerUp={() => touchControlsState.setForward(false)}
                    onContextMenu={(e) => e.preventDefault()}
                    className="flex justify-center rounded-lg bg-white/30 backdrop-blur-sm border border border-gray-200/30 shadow-sm h-32 w-16 p-2 active:bg-white/50">
                    <ChevronDoubleUpIcon className="text-white w-8 h-8" />
                </button>

                <button
                    type="button"
                    onPointerDown={() => touchControlsState.setBack(true)}
                    onPointerUp={() => touchControlsState.setBack(false)}
                    onContextMenu={(e) => e.preventDefault()}
                    className="flex justify-center items-end rounded-lg bg-white/30 backdrop-blur-sm border border border-gray-200/30 shadow-sm h-24 w-16 p-2 active:bg-white/50">
                    <ChevronDoubleDownIcon className="text-white w-8 h-8" />
                </button>
            </div>

            <div className="absolute bottom-3 right-21">
                <button
                    type="button"
                    onPointerDown={() => touchControlsState.setBrake(true)}
                    onPointerUp={() => touchControlsState.setBrake(false)}
                    onContextMenu={(e) => e.preventDefault()}
                    className="flex justify-center items-center rounded-full bg-white/30 backdrop-blur-sm border border border-gray-200/30 shadow-sm h-19 w-19 active:bg-white/50">
                    <HandbrakeIcon className="w-13 h-13 text-white" fill="#FFFFFF" strokeWidth={.1} />
                </button>
            </div>

            <div className="absolute bottom-28 left-3">
                <button
                    type="button"
                    onContextMenu={(e) => e.preventDefault()}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="
                    flex items-center justify-center
                    h-36 w-36
                    rounded-full
                    bg-white/30
                    backdrop-blur-sm
                    border border-gray-200/30
                    shadow-sm
                    touch-none
                    select-none
                "
                >
                    <SteeringWheelIcon
                        className="h-36 w-36"
                        fill="#FFFFFF"
                        style={{
                            transform: `rotate(${rotation}deg)`,
                        }}
                    />
                </button>
            </div>
        </>
    )
}