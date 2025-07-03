import { Link } from "react-router-dom";
import { BookOpenIcon } from '@heroicons/react/24/solid';
import Avatar from "../assets/images/avatar.jpeg"
import GithubIco from "../assets/icons/github.png"
import GmailIco from "../assets/icons/gmail.png"
import LinkedinIco from "../assets/icons/linkedin.png"
import { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import SkillModal from "./SkillModal";
import ProjectsModal from "./ProjectsModal";

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

const JourneyInfo = ({ currentStage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // OnBoard
    if (currentStage === 1)
        return (
            <div className="flex items-start gap-2.5">
                <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-white">IrfanFajru</span>
                        <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-white">
                        Hi, I'm
                        <span className='font-semibold mx-2 text-white'>IrfanFajru</span>
                        👋
                        <br />
                        A Software Engineer from Indonesia
                    </p>
                </div>
            </div>
        );

    // Educations
    if (currentStage === 2) {
        return (
            <>
                <div className="flex items-start gap-2.5">
                    <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-white">IrfanFajru</span>
                            <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-white">
                            Graduated from Ahmad Dahlan University (2019-2023)
                            with a degree in Informatics and a GPA of 3.85 (Cum Laude).
                            <br></br>
                            My thesis? Smoking detection while driving with YOLOv7. 🚗💨
                        </p>
                    </div>
                </div>
            </>
        );
    }

    // Experiences
    if (currentStage === 3) {
        return (
            <>
                <div className="flex items-start gap-2.5">
                    <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-white">IrfanFajru</span>
                            <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-white">
                            Every step has been a lesson.
                            Here's a look at the experiences that shaped my journey.
                        </p>
                        <div className="flex justify-center">
                            <button onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                                className="cursor-pointer text-blue-600 text-sm font-normal hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <ExperienceModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </>
        );
    }

    // Skills and Certifications
    if (currentStage === 4) {
        return (
            <>
                <div className="flex items-start gap-2.5">
                    <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-white">IrfanFajru</span>
                            <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-white">
                            Learning is a continuous journey for me.
                            Every new skill I acquire is just another step toward becoming the best version of myself.
                        </p>
                        <div className="flex justify-center">
                            <button onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                                className="cursor-pointer text-blue-600 text-sm font-normal hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <SkillModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </>
        );
    }

    // Projects
    if (currentStage === 5) {
        return (
            <>
                <div className="flex items-start gap-2.5">
                    <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-white">IrfanFajru</span>
                            <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-white">
                            The projects I've worked on
                            have been great opportunities to challenge myself and level up my skills.
                            They each reflect my journey and passion for tech.
                        </p>
                        <div className="flex justify-center">
                            <button onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                                className="cursor-pointer text-blue-600 text-sm font-normal hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <ProjectsModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </>
        );
    }

    // Contact
    if (currentStage === 6) {
        return (
            <div className="flex items-start gap-2.5">
                <img className="w-8 h-8 rounded-full" src={Avatar} alt="irfan img"></img>
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-white">IrfanFajru</span>
                        <span className="text-sm font-normal text-gray-500 text-gray-400">{getCurrentTime()}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-white">
                        Feel free to reach out.
                        I'm always open to new opportunities and discussions.
                    </p>
                    <div className="flex justify-center gap-2.5">
                        <a href="mailto:irfanfajru025@gmail.com">
                            <img className="w-6 h-6" src={GmailIco} alt="gmail ico"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/irfanfajru/" target="_blank">
                            <img className="w-6 h-6" src={LinkedinIco} alt="linkedin ico"></img>
                        </a>
                        <a href="https://github.com/irfanfajru" target="_blank">
                            <img className="w-6 h-6" src={GithubIco} alt="github ico"></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default JourneyInfo;
