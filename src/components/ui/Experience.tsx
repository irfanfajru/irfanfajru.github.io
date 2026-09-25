"use client"
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'

export default function Experience() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-2 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm">
            <p className="text-sm font-normal text-center">
                The places, roles and experiences that helped me grow.
            </p>

            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer">
                View Experience
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    {/* modal content */}
                    <DialogPanel className="bg-white flex w-full max-w-2xl max-h-[90vh] flex-col rounded-lg shadow-sm">
                        {/* header */}
                        <div className="flex shrink-0 items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Experience
                            </h3>
                            <button type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer" >
                                <XMarkIcon className="w-6 h-6" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* body */}
                        <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-5 space-y-4">

                            <ol className="relative border-s border-gray-200">
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-blue-300 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Jun 2025 - Present</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">Independent / Various Clients</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 ">Freelance Software Developer</p>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Nov 2023 - Jun 2025</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">PT. Bosnet Distribution Indonesia</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 ">Software Developer</p>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">July 2023 - Aug 2023</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">Evermos</h3>
                                    <p className="text-base font-normal text-gray-500 ">Project-Based Virtual Intern : Backend Developer Evermos x Rakamin Academy</p>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">May 2023 - June 2023</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">PT. Investree Radhika Jaya</h3>
                                    <p className="text-base font-normal text-gray-500 ">Project-Based Intern : Backend Developer Virtual Internship Experience</p>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2022 - Dec 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">The House of Representatives, Republic of Indonesia (DPR RI)</h3>
                                    <p className="text-base font-normal text-gray-500 ">Back-End Programmer Intern</p>
                                </li>
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Sept 2020 - Jan 2021</time>
                                    <h3 className="text-lg font-semibold text-gray-900 ">Ahmad Dahlan University Informatics Computer Lab</h3>
                                    <p className="text-base font-normal text-gray-500 ">Lab Assistant</p>
                                </li>
                            </ol>

                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}