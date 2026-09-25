"use client"

import { useGameStore } from '@/store/gameStore'
import { Switch } from '@headlessui/react'

export default function DriftMode() {
    const { isDriftMode, setDriftMode } = useGameStore();

    return (
        <div className='flex gap-2 bg-white shadow-sm rounded-full px-2.5 py-1.5'>
            <Switch
                checked={isDriftMode}
                onChange={(setDriftMode)}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600 cursor-pointer"
            >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
            </Switch>
            <p className='text-gray-900'>Drift Mode</p>
        </div>
    )
}