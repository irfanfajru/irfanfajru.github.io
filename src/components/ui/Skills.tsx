"use client"
import { Dialog, DialogBackdrop, DialogPanel, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'
import { skillsSections, SkillsSection } from '@/data/skills';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useGameStore } from '@/store/gameStore';

export default function Skills({ show = true }: { show?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const { setPaused } = useGameStore();

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
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-2 items-center w-full max-w-xs p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm font-normal text-center text-gray-900">
                    Technologies and tools I work with.
                </p>

                <button
                    onClick={() => {
                        setPaused(true)
                        setIsOpen(true)
                    }}
                    className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer">
                    Explore skills
                </button>

                <Dialog open={isOpen} onClose={() => {
                    setIsOpen(false)
                    requestAnimationFrame(() => setPaused(false))
                }} className="relative z-50">
                    <DialogBackdrop className="fixed inset-0 bg-black/30" />

                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        {/* modal content */}
                        <DialogPanel
                            transition
                            className="bg-white flex w-full max-w-2xl max-h-[90vh] flex-col rounded-lg shadow-sm transition duration-300 data-closed:transform-[scale(90%)] data-closed:opacity-0">
                            {/* header */}
                            <div className="flex shrink-0 items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Skills
                                </h3>
                                <button type="button"
                                    onClick={() => {
                                        setIsOpen(false)
                                        requestAnimationFrame(() => setPaused(false))
                                    }}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer" >
                                    <XMarkIcon className="w-6 h-6" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* body */}
                            <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{
                                        0: 1,      // mobile
                                        425: 2,    // md
                                    }} >
                                    <Masonry gutter="1rem" >
                                        {skillsSections.map((val) =>
                                            <SkillsCard key={`skillscard-${val.title}`} data={val} />
                                        )}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </Transition>
    )
}

function SkillsCard({ data }: { data: SkillsSection }) {
    const Icon = data.icon;
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Icon className='w-7 h-7 text-gray-500 mb-3' />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{data.title}</h5>
            <div className='flex gap-2 flex-wrap'>
                {data.skills.map((val) =>
                    <div key={val} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-sm">{val}</div>
                )}
            </div>
        </div>
    )
}