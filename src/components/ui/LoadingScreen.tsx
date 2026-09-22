"use client"

import { useProgress } from "@react-three/drei"
import { Lottie } from "lottie-react"
import animationData from "../../../public/lottie/preparing-car.json";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

type LoadingState = {
    min: number;
    max: number;
    text: string;
}

export default function LoadingScreen() {
    const loadingStates: LoadingState[] = [
        {
            min: 0,
            max: 50,
            text: "Preparing the car..."
        },
        {
            min: 50,
            max: 100,
            text: "Starting the engine..."
        }
    ]

    const { active, progress, errors } = useProgress();

    if (!active) return null;

    return (
        <div className="absolute top-0 left-0 bg-gray-50 h-screen w-full flex flex-col gap-2 p-4 justify-center items-center text-black z-10">
            <div className="h-64 w-64">
                <Lottie
                    src={animationData}
                    loop
                    autoplay />
            </div>

            {!errors.length && progress < 100 && (
                <>
                    <div className="w-64 bg-gray-200 rounded-full">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                            style={{ width: `${Math.round(progress)}%` }}
                        > {Math.round(progress)}%
                        </div>
                    </div>
                    <p className="text-sm md:text-base">{(loadingStates.find((val) => progress >= val.min && progress <= val.max))?.text}</p>
                </>
            )}

            {errors.length > 0 && (
                <div className="flex flex-col justify-center items-center">
                    <ExclamationCircleIcon className="w-8 h-8 text-red-800" />
                    <p className="text-sm md:text-base">Something went wrong under the hood.</p>
                    <p className="text-sm md:text-base">Give it another shot by <a href="/dev" className="text-blue-600 hover:underline">refreshing the page</a>.</p>
                </div>
            )}

        </div >
    )
}