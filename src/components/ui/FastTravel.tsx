"use client"
import { useGameStore } from '@/store/gameStore'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function FastTravel() {
    const { setFastTravel } = useGameStore();
    return (
        <Menu>
            <MenuButton
                className="text-gray-900 inline-flex cursor-pointer hover:bg-gray-100 bg-white shadow-sm rounded-full px-2.5 py-1.5">
                <MapPinIcon className='w-6 h-6 me-1' />
                Fast Travel
            </MenuButton>

            <MenuItems anchor={{ to: "bottom end", gap: "8px" }} className="bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 py-2 text-sm text-gray-700 border border-gray-200 focus:outline-none">
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        About Me
                    </button>
                </MenuItem>
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true, position: [-31, 2, -3], rotation: [0, -90 * (Math.PI / 180), 0] })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Education
                    </button>
                </MenuItem>
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true, position: [-18, 2, -32], rotation: [0, -180 * (Math.PI / 180), 0] })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Experience
                    </button>
                </MenuItem>
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true, position: [21, 2, -13], rotation: [0, -90 * (Math.PI / 180), 0] })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Skills
                    </button>
                </MenuItem>
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true, position: [0, 2, -25], rotation: [0, -90 * (Math.PI / 180), 0] })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Projects
                    </button>
                </MenuItem>
                <MenuItem>
                    <button
                        onClick={() => setFastTravel({ isFastTravel: true, position: [28, 2, -27], rotation: [0, 130 * (Math.PI / 180), 0] })}
                        className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Contact
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu >
    )
}