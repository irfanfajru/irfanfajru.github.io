import Avatar from "../assets/images/avatar.jpeg"
import GithubIco from "../assets/icons/github.png"
import GmailIco from "../assets/icons/gmail.png"
import LinkedinIco from "../assets/icons/linkedin.png"
import { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import SkillModal from "./SkillModal";
import ProjectsModal from "./ProjectsModal";
import HelloImg from "../assets/images/hello.png"
import GraduateImg from "../assets/images/graduation.png"
import ExperienceImg from "../assets/images/experience.png"
import SkillImg from "../assets/images/skills.png"
import ProjectsImg from "../assets/images/projects.png"
import ContactImg from "../assets/images/contact.png"

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
            <div className="flex items-start gap-1">
                <img className="w-24 h-34" src={HelloImg} alt="ava img"></img>
                <div className="mt-8 flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                    <p className="text-sm font-normal text-white">
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
                <div className="flex items-start gap-1">
                    <img className="w-24 h-34" src={GraduateImg} alt="irfan img"></img>
                    <div className="mt-8 flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                        <p className="text-sm font-normal text-white">
                            I studied Informatics at Ahmad Dahlan University (2019–2023),
                            where I explored AI through my thesis on detecting smoking while driving with YOLOv7. 🚗💨
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
                <div className="flex items-start gap-1">
                    <img className="w-24 h-34" src={ExperienceImg} alt="irfan img"></img>

                    <div className="mt-8 flex flex-col gap-1">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                            <p className="text-sm font-normal text-white">
                                Every flight carries a lesson. These are the skies that shaped my path.
                            </p>
                        </div>

                        <div className="flex justify-end"
                            onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                        >
                            <button type="button" className="cursor-pointer px-3 py-2 text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                My Flight So Far
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
                <div className="flex items-start gap-1">
                    <img className="w-24 h-34" src={SkillImg} alt="irfan img"></img>

                    <div className="mt-8 flex flex-col gap-1">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                            <p className="text-sm font-normal text-white">
                                Every new skill is a wing I've earned, every certification a wind beneath them, carrying me further on my path.
                            </p>
                        </div>

                        <div className="flex justify-end"
                            onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                        >
                            <button type="button" className="cursor-pointer px-3 py-2 text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                See My Wings
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
                <div className="flex items-start gap-1">
                    <img className="w-24 h-34" src={ProjectsImg} alt="irfan img"></img>
                    <div className="mt-8 flex flex-col gap-1">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                            <p className="text-sm font-normal text-white">
                                Each project is a glowing lantern I’ve released into the sky,
                                carrying sparks of creativity, challenges overcome, and the light of what I’ve built.
                            </p>
                        </div>

                        <div className="flex justify-end"
                            onClick={(e) => {
                                setIsModalOpen(true)
                            }}
                        >
                            <button type="button" className="cursor-pointer px-3 py-2 text-xs font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                                Follow the Lanterns
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
            <div className="flex items-start gap-1">
                <img className="w-24 h-34" src={ContactImg} alt="irfan img"></img>
                <div className="mt-8 flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
                    <p className="text-sm font-normal text-white">
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
