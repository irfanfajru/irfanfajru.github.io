"use client"
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react'
import { Project, projects } from "@/data/projects"
import ProjectDetail from './ProjectDetail';
import { useGameStore } from '@/store/gameStore';

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const { setPaused } = useGameStore();

    return (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-2 items-center w-full max-w-xs p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm font-normal text-center text-gray-900">
                A collection of things I've built.
            </p>

            <button
                onClick={() => {
                    setPaused(true)
                    setIsOpen(true)
                }}
                className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer">
                View projects
            </button>

            <Dialog open={isOpen} onClose={() => {
                setPaused(false)
                setIsOpen(false)
            }} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    {/* modal content */}
                    <DialogPanel className="bg-white flex w-full max-w-6xl max-h-[90vh] flex-col rounded-lg shadow-sm">
                        {/* header */}
                        <div className="flex shrink-0 items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Projects
                            </h3>
                            <button type="button"
                                onClick={() => {
                                    setPaused(false)
                                    setIsOpen(false)
                                }}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer" >
                                <XMarkIcon className="w-6 h-6" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* body */}
                        <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {projects.map((project) => <ProjectCard key={`project-${project.title}`} data={project} />)}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

function ProjectCard({ data }: { data: Project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="group bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className={`w-full aspect-[4/3] rounded-t-lg overflow-hidden ${data.image.bgClassName || ""}`}>
                    <Image width={512} height={512} className="w-full h-full object-cover transition-transform group-hover:scale-110" src={data.image.src} alt="" />
                </div>

                <div className="p-5 rounded-lg">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                    <div className='flex gap-2 flex-wrap mb-2'>
                        {data.types.map(type => (
                            <span key={`project-${data.title}-type-${type}`}
                                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-sm">
                                {type}
                            </span>
                        ))}
                    </div>
                    <p className="mb-3 font-normal text-sm text-gray-700 line-clamp-3">
                        {data.description}
                    </p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
                        Read more
                        <ArrowRightIcon className='w-3.5 h-3.5 text-white ms-2' />
                    </button>
                </div>
            </div>

            <ProjectDetail open={isOpen} setIsOpen={setIsOpen} data={data} />
        </>
    )
}