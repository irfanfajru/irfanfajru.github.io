import { Dialog, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'
import FloatIslandImg from "../assets/images/float-island.png"
import UncoveredIslandImg from "../assets/images/uncovered-island.png"
import "../index.css"

export default function ExperienceModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Dialog open={isOpen} onClose={closeModal}>
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
                    <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                    <div className="relative p-4 w-full max-w-lg max-h-full">
                        <div className="relative rounded-xl shadow-sm bg-gray-700">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-white">
                                    Experience
                                </h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
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
                            <div className="px-8 space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
                                <div className='relative'>
                                    {/* List items with experiences */}
                                    <div className="border-l-3 border-b-3 border-dashed border-gray-800 py-8 pl-6 flex justify-start items-center">
                                        <img src={UncoveredIslandImg} className="absolute -start-5 w-10 h-14" alt="island" />
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5">
                                            <h3 className="text-lg font-semibold text-white">Paths Yet to Be Discovered</h3>
                                            <p className="mb-1 mt-1 text-sm font-normal text-gray-500">
                                                Each step opens a new trail in the sky — I’m ready to explore unseen paths and embrace what lies ahead.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-r-3 border-b-3 border-dashed border-gray-800 py-8 pr-6 flex justify-end items-center">
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5 text-right">
                                            <h3 className="text-lg font-semibold text-white">PT. Bosnet Distribution Indonesia</h3>
                                            <p className="text-sm font-semibold text-white">Software Developer</p>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                Nov 2023 - Jun 2025
                                            </time>
                                        </div>
                                        <img src={FloatIslandImg} className="absolute -end-5 w-10 h-14" alt="island" />
                                    </div>

                                    <div className="border-l-3 border-b-3 border-dashed border-gray-800 py-8 pl-6 flex justify-end items-center">
                                        <img src={FloatIslandImg} className="absolute -start-5 w-10 h-14" alt="island" />
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5 text-left">
                                            <h3 className="text-lg font-semibold text-white">
                                                Evermos
                                            </h3>
                                            <p className="text-sm font-semibold text-white">
                                                Project-Based Virtual Intern : Backend Developer Evermos x Rakamin Academy
                                            </p>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                July 2023 - Aug 2023
                                            </time>
                                        </div>
                                    </div>

                                    <div className="border-r-3 border-b-3 border-dashed border-gray-800 py-8 pr-6 flex justify-end items-center">
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5 text-left">
                                            <h3 className="text-lg font-semibold text-white">
                                                PT. Investree Radhika Jaya
                                            </h3>
                                            <p className="text-sm font-semibold text-white">
                                                Project-Based Intern : Backend Developer Virtual Internship Experience
                                            </p>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                May 2023 - June 2023
                                            </time>
                                        </div>
                                        <img src={FloatIslandImg} className="absolute -end-5 w-10 h-14" alt="island" />
                                    </div>

                                    <div className="border-l-3 border-b-3 border-dashed border-gray-800 py-8 pl-6 flex justify-end items-center">
                                        <img src={FloatIslandImg} className="absolute -start-5 w-10 h-14" alt="island" />
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5 text-left">
                                            <h3 className="text-lg font-semibold text-white">
                                                The House of Representatives, Republic of Indonesia (DPR RI)
                                            </h3>
                                            <p className="text-sm font-semibold text-white">
                                                Back-End Programmer Intern
                                            </p>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                Aug 2022 - Dec 2022
                                            </time>
                                        </div>
                                    </div>

                                    <div className="border-r-3 border-dashed border-gray-800 py-8 pr-6 flex justify-end items-center">
                                        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 p-2.5 text-left">
                                            <h3 className="text-lg font-semibold text-white">
                                                Ahmad Dahlan University Informatics Computer Lab
                                            </h3>
                                            <p className="text-sm font-semibold text-white">
                                                Lab Assistant
                                            </p>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                Sept 2020 - Jan 2021
                                            </time>
                                        </div>
                                        <img src={FloatIslandImg} className="absolute -end-5 w-10 h-14" alt="island" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
        </>
    )
}
