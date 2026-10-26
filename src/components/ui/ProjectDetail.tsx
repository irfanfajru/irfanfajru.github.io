"use client"
import { Project, ProjectLink, ProjectLinkType } from "@/data/projects";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function ProjectDetail(
    {
        open,
        setIsOpen,
        data
    }:
        {
            open: boolean,
            setIsOpen: Dispatch<SetStateAction<boolean>>,
            data?: Project | null
        }) {

    if (!data) return "";

    const Content = data.content;

    return (
        <Dialog open={open} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />

            <div className="fixed inset-0 flex flex-col gap-2 w-screen pt-2">

                <button type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto me-2 inline-flex justify-center items-center cursor-pointer" >
                    <XMarkIcon className="w-6 h-6" />
                    <span className="sr-only">Close modal</span>
                </button>

                {/* modal content */}
                <DialogPanel className="bg-white flex justify-center w-full h-full max-h-screen overflow-y-auto rounded-t-lg shadow-sm">
                    {/* body */}
                    <div className="w-full max-w-4xl p-4 pt-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
                        <div className='flex gap-2 flex-wrap mb-2'>
                            {data.types.map(type => (
                                <span key={`project-${data.title}-type-${type}`}
                                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-sm">
                                    {type}
                                </span>
                            ))}
                        </div>
                        <p className="mb-4 font-normal text-sm text-gray-700">
                            {data.description}
                        </p>
                        <div className='flex gap-2 flex-wrap mb-6'>
                            {data.links?.map(link =>
                                <ProjectLinkCTA key={link.href} data={link} />
                            )}
                        </div>
                        <div className={`w-full aspect-[4/3] rounded-lg overflow-hidden ${data.image.bgClassName || ""} mb-8`}>
                            <Image width={1200} height={1200} className="w-full h-full object-cover transition-transform group-hover:scale-110" src={data.image.src} alt="" />
                        </div>

                        <article className="prose prose-gray max-w-none pb-12">
                            <Content />
                        </article>

                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

function ProjectLinkCTA({ data }: { data: ProjectLink }) {

    if (data.type === ProjectLinkType.GITHUB)
        return (
            <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                <svg className="w-7 h-6 me-2 -ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" /></svg>
                {data.label}
            </Link>
        )

    return (
        <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <ArrowTopRightOnSquareIcon className="w-6 h-5 me-2 -ms-1" />
            {data?.label}
        </Link>
    )
}