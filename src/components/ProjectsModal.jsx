import { Dialog, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Bhimac from '../assets/images/bhimac.png'
import Digiscore from '../assets/images/digiscore.png'
import Pbsf from '../assets/images/pbsf.png'
import Noken from '../assets/images/noken.png'
import Stela from '../assets/images/stela.png'
import SmokingDetection from '../assets/images/smoking detection.png'

const projects = [
    {
        image: Bhimac,
        heading: "BHIMAC",
        subHeading: "Behavior Identification Measurement for Autism Child",
        desc: `A scientific early screening tool designed to help identify behavioral tendencies related to autism spectrum in children. BHIMAC provides a structured, research-based questionnaire to assist parents and professionals in recognizing early signs of autism.`,
        links: [
            {
                name: "Go to website",
                url: "https://malangautismcenter.com/deteksi_anak/",
            }
        ]
    },
    {
        image: Digiscore,
        heading: "DIGISCORE",
        subHeading: "Simplifying Pencak Silat Scoring with Affordable Technology",
        desc: "A digital scoring system designed for Pencak Silat competitions. DIGISCORE enables judges to record and calculate scores in real time using accessible digital devices, improving efficiency and scoring transparency.",
        links: [
            {
                name: "Go to website",
                url: "https://idwebtech.com/",
            }
        ]
    },
    {
        image: Pbsf,
        heading: "Playbook Sales Force",
        subHeading: "Mobile and web app for monitoring Telkomsel Sales activities for Telkomsel Balikpapan",
        desc: "A mobile and web-based application for tracking daily activities of Telkomsel's Sales in Balikpapan. Features include GPS-based check-in, task documentation, mobile-to-web API integration, daily activity reports, and a monthly performance leaderboard.",
        links: []
    },
    {
        image: Noken,
        heading: "Noken Super App",
        subHeading: "Custom-built sales monitoring system for Telkomsel Sales Agent Papua Maluku",
        desc: `A mobile and web-based application for monitoring the daily activities of Telkomsel Sales Agents in the Papua and Maluku regions. Evolved from the Telkomsel Balikpapan Playbook system, this version is tailored to local workflows and environments.\n
        Sales agents check in via the mobile app and are given a 1 km activity radius. Within this zone, they document tasks and upload Digipos files (Excel format) as a condition for checkout. All data is synced to the web dashboard via API for monitoring.\n
        The web application features personal and territorial dashboards for performance recaps, along with detailed activity logs for daily oversight.`,
        links: []
    },
    {
        image: Stela,
        heading: "STELA",
        subHeading: "Ticketing and Service Escalation System DPR RI",
        desc: `A web and mobile-based application for managing service tickets and escalation processes within the DPR RI. Users can submit service requests, receive unique ticket codes, and track progress in real-time.\n
        The Service Desk handles incoming tickets, provides feedback, and escalates issues to relevant officers (Helpdesk/IT Specialists) when needed. Officers report their actions via the app, and all updates are verified by the Service Desk to ensure transparent ticket status tracking.\n
        Developed as part of the final project for the MSIB program at DPR RI.`,
        links: []
    },
    {
        image: SmokingDetection,
        heading: "Smoking Detection While Driving Using YOLOv7",
        subHeading: "Web-based image detection system for identifying motorbike riders who smoke",
        desc: `A web-based application for detecting motorbike riders who smoke, developed as a final thesis project for a Bachelor's degree in Informatics at Ahmad Dahlan University.\n
        The system uses a two-stage YOLOv7 object detection pipeline—first to detect motorbike riders, then to detect cigarettes within their bounding box. If detected, a "smoking" label is applied.\n
        Built with Next.js for the frontend and Flask for the backend API. Users upload images via the web interface, and the server processes them to return annotated detection results.`,
        links: [
            {
                name: "Back End (Flask)",
                url: "https://github.com/irfanfajru/smoking-detection-back-end",
            },
            {
                name: "Front End (NextJS)",
                url: "https://github.com/irfanfajru/smoking-detection-front-end",
            }
        ]
    },
    {
        image: "",
        heading: "Open Music API",
        subHeading: "Spotify-inspired backend service for music and playlist management",
        desc: `A RESTful backend service for music management, developed as the final project of the FGA Backend Developer training in collaboration with Dicoding. Inspired by Spotify, the system supports song, album, and playlist management with full authentication and authorization.\n
        Key features include collaborative playlist management, album likes, activity logs, and playlist export in JSON format via email.\n`,
        links: [
            {
                name: "Open Music API",
                url: "https://github.com/irfanfajru/open-music-api",
            },
            {
                name: "Open Music API Consumer (Email sending for export playlist)",
                url: "https://github.com/irfanfajru/open-music-consumer",
            }
        ]
    },
    {
        image: "",
        heading: "P2P Lending Service",
        subHeading: "Secure backend API for peer-to-peer lending transactions",
        desc: `A backend REST API for peer-to-peer lending transactions, developed as the final project of the Investree virtual internship program.\n
        Built with Spring Boot and secured using OAuth2 JWT, this service includes features for user authentication, loan creation with customizable tenor and interest, loan status updates, and transaction history with pagination and status filtering.\n`,
        links: [
            {
                name: "P2P Lending Service",
                url: "https://github.com/irfanfajru/task-5-backend-investree",
            }
        ]
    },
    {
        image: "",
        heading: "Social Commerce Reseller Service",
        subHeading: "Backend API for managing reseller workflows in social commerce",
        desc: `A backend API service for managing social commerce reseller activities, developed as the final project of the Evermos virtual internship program.\n
        Built with Golang and MySQL, the service includes user authentication, account and store management, product and category handling, shipping addresses, transactions, and integration with regional APIs.\n`,
        links: [
            {
                name: "Social Commerce Reseller Service",
                url: "https://github.com/irfanfajru/final-task-evermos",
            }
        ]
    },
]

export default function ProjectsModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Dialog open={isOpen} onClose={closeModal}>
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
                    <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                    <div className="relative p-4 w-full max-w-5xl max-h-full">
                        <div className="relative bg-white rounded-xl shadow-sm dark:bg-gray-700">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Projects
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

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                    {projects.map((project, projectIdx) => (
                                        <div key={`project-${projectIdx}`} className="max-w-sm border rounded-lg shadow-sm bg-gray-800 border-gray-700">
                                            {project.image ? (<img className="rounded-t-lg" src={project.image} alt="" />) : ""}
                                            <div className="p-5">
                                                <h5 className="text-2xl font-bold tracking-tight text-white">
                                                    {project.heading}
                                                </h5>
                                                <p className="mb-3 font-normal text-gray-400">
                                                    {project.subHeading}
                                                </p>
                                                <p className="mb-3 font-normal text-gray-400" style={{ whiteSpace: 'pre-line' }}>
                                                    {project.desc}
                                                </p>

                                                <div className='grid grid-col-2 md:grid-col-3 gap-2'>
                                                    {project.links.map((link, linkIdx) => (
                                                        <Link
                                                            key={`project-${projectIdx}-link-${linkIdx}`}
                                                            className='cursor-pointer text-blue-600 text-sm font-normal hover:underline'
                                                            to={link.url} target='blank' >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
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
