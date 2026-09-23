"use client"

import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function DriftMode() {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className='flex gap-2'>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600 cursor-pointer"
            >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
            </Switch>
            <p className='text-gray-900'>Drift Mode</p>
        </div>
    )
}