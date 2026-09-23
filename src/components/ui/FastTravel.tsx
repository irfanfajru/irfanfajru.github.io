"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function FastTravel() {
    return (
        <Menu>
            <MenuButton className="text-gray-900 inline-flex cursor-pointer focus:outline-none">
                <MapPinIcon className='w-6 h-6 me-1' />
                Fast Travel
            </MenuButton>

            <MenuItems anchor={{ to: "bottom end", gap: "8px" }} className="bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 py-2 text-sm text-gray-700 border border-gray-200 focus:outline-none">
                <MenuItem>
                    <button className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        About Me
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Education
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Skills
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Projects
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                        Contact
                    </button>
                </MenuItem>
            </MenuItems>

        </Menu >
    )
}