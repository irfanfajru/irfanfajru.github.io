import { Transition } from '@headlessui/react'

export default function Education({ show = true }: { show?: boolean }) {
    return (
        <Transition
            show={show}
            enter="transition-all duration-300 ease-out"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
        >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-normal text-gray-900">
                    I studied Informatics at Ahmad Dahlan University (2019–2023), where I explored AI through my thesis on detecting smoking while driving with YOLOv7. 🚗💨
                </p>
            </div>
        </Transition>
    )
}