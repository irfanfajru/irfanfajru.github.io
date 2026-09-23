
"use client"

import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Transition } from '@headlessui/react'
import { useRef, useState } from "react";

export default function MusicPlayer() {
    const [open, setOpen] = useState(false)
    const audioRef = useRef<AudioPlayer>(null);

    return (
        <div className="relative flex gap-2">
            <Image
                onClick={() => setOpen((open) => !open)}
                className="rounded-full w-8 h-8 animate-[spin_3s_linear_infinite] cursor-pointer" width={128} height={128} alt="song image" src={"/images/vinyl-records.webp"} />

            <Transition
                show={open}
                unmount={false}
                enter="transition-all duration-300 ease-out"
                enterFrom="w-0 opacity-0"
                enterTo="w-sm opacity-100"
                leave="transition-all duration-300 ease-in"
                leaveFrom="w-sm opacity-100"
                leaveTo="w-0 opacity-0"
            >
                <div className="w-sm flex flex-col gap-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-4">
                    <div>
                        <p className="text-sm font-bold text-white">
                            Sink or Swim(feat. DJ Quads)
                        </p>
                        <p className="text-sm text-gray-400">
                            Blue Wednesday
                        </p>
                    </div>
                    <AudioPlayer
                        ref={audioRef}
                        className="!bg-transparent !border-none !shadow-none !p-0"
                        autoPlay
                        src={"/music/Blue Wednesday-Sink or Swim(feat. DJ Quads).mp3"}
                        showJumpControls={false}
                        loop
                        volume={0.5}
                    />
                </div>
            </Transition>
        </div>
    )
}