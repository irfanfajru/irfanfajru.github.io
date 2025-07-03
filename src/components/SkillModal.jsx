import { Dialog, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'

const skills = {
    markup: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    fe: ["JavaScript", "React", "NextJS"],
    be: ["PHP", "NodeJS", "Golang", "Python", "Java", "C#"],
    beFrameworks: ["Laravel (PHP)", "Spring Boot (Java)", "Flask (Python)", "GoFiber (Golang)",
        ".NET (C#)", "NestJS (NodeJS)", "Express.js (NodeJS)", "Hapi.js (NodeJS)"
    ],
    db: ["SQL", "MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis"],
    tools: ["Postman", "Git", "Docker", "RabbitMQ"]
}

const certifications = [
    {
        title: "Java Certified Foundations Associate (Oracle)",
        date: "Oct 2023"
    },
    {
        title: "Java Foundations (Oracle)",
        date: "Aug 2023"
    },
    {
        title: "Java Programming (Oracle)",
        date: "Aug 2023"
    },
    {
        title: "JAVA (Java Foundations & Java Programming) (KOMINFO)",
        date: "Sep 2023"
    },
    {
        title: "Junior Web Developer (Indonesian Professional Certification Authority)",
        date: "Oct 2021"
    },
    {
        title: "Junior Web Developer Training (KOMINFO)",
        date: "Sep 2021"
    },
    {
        title: "Basic Programming Lab Assistant (Ahmad Dahlan University)",
        date: "Jan 2021"
    },
    {
        title: "Learn JavaScript Programming Basics (Dicoding)",
        date: "Mar 2022"
    },
    {
        title: "Learn to Create Back-End Applications for Beginners (Dicoding)",
        date: "Mar 2022"
    },
    {
        title: "Learn Back-End Application Fundamentals (Dicoding)",
        date: "May 2022"
    },
    {
        title: "Back End Development and APIs (FreeCodeCamp)",
        date: "Sep 2022"
    },
    {
        title: "Data Wrangling Python (DQLab)",
        date: "Mar 2021"
    },
    {
        title: "Python for Data Professional Beginner - Part 1 (DQLab)",
        date: "Mar 2021"
    },
    {
        title: "Python for Data Professional Beginner - Part 2 (DQLab)",
        date: "Mar 2021"
    },
    {
        title: "Python Fundamental for Data Science (DQLab)",
        date: "Mar 2021"
    },
    {
        title: "Fresh Graduate Academy Back-End Developer (KOMINFO)",
        date: "Jun 2022"
    }
]

export default function SkillModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Dialog open={isOpen} onClose={closeModal}>
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
                    <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative rounded-xl shadow-sm bg-gray-700">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 ">
                                <h3 className="text-xl font-semibold text-white">
                                    Skill & Certification
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
                            <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)]">

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Markup & Styling</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.markup.map(value => (
                                        <span key={`markup-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Frontend Development</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.fe.map(value => (
                                        <span key={`fe-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Backend Development</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.be.map(value => (
                                        <span key={`be-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Backend Frameworks</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.beFrameworks.map(value => (
                                        <span key={`beFrameworks-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Databases</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.db.map(value => (
                                        <span key={`db-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Tools</h5>
                                <div className="flex flex-wrap gap-1 justify-center mb-12">
                                    {skills.tools.map(value => (
                                        <span key={`tools-${value}`} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-800 text-gray-300">{value}</span>
                                    ))}
                                </div>

                                <h5 className="mb-2 text-lg font-semibold text-white text-center">Certifications</h5>
                                <div className="flex flex-col gap-1 justify-center">
                                    {certifications.map(value => (
                                        <div key={`certification-${value.title}`} className='mb-4'>
                                            <h3 className="text-md font-semibold text-white">
                                                {value.title}
                                            </h3>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                                {value.date}
                                            </time>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
