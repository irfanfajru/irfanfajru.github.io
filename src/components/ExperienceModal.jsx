import { Dialog, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'

export default function ExperienceModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Dialog open={isOpen} onClose={closeModal}>
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
                    <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-xl shadow-sm dark:bg-gray-700">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Experience
                                </h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            {/* Modal Body with overflow */}
                            <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
                                <ol className="relative border-s border-white">
                                    {/* List items with experiences */}
                                    <li className="mb-10 ms-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <h3 className="text-lg font-semibold text-white">
                                            PT. Bosnet Distribution Indonesia
                                        </h3>
                                        <p className="text-sm font-semibold text-white">
                                            Software Developer
                                        </p>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                            Nov 2023 - Jun 2025
                                        </time>
                                    </li>

                                    <li className="mb-10 ms-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Evermos
                                        </h3>
                                        <p className="text-sm font-semibold text-white">
                                            Project-Based Virtual Intern : Backend Developer Evermos x Rakamin Academy
                                        </p>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                            July 2023 - Aug 2023
                                        </time>
                                    </li>

                                    <li className="mb-10 ms-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <h3 className="text-lg font-semibold text-white">
                                            PT. Investree Radhika Jaya
                                        </h3>
                                        <p className="text-sm font-semibold text-white">
                                            Project-Based Intern : Backend Developer Virtual Internship Experience
                                        </p>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                            May 2023 - June 2023
                                        </time>
                                    </li>

                                    <li className="mb-10 ms-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <h3 className="text-lg font-semibold text-white">
                                            The House of Representatives, Republic of Indonesia (DPR RI)
                                        </h3>
                                        <p className="text-sm font-semibold text-white">
                                            Back-End Programmer Intern
                                        </p>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                            Aug 2022 - Dec 2022
                                        </time>
                                    </li>

                                    <li className="ms-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Ahmad Dahlan University Informatics Computer Lab
                                        </h3>
                                        <p className="text-sm font-semibold text-white">
                                            Lab Assistant
                                        </p>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                            Sept 2020 - Jan 2021
                                        </time>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
