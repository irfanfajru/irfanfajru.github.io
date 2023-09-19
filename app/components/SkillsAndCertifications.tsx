import TextSection from "./TextSection"
import Image from "next/image"

const skills = [
    "HTML",
    "CSS",
    "React",
    "NextJS",
    "Tailwind CSS",
    "Bootstrap",
    "PHP",
    "Javascript",
    "Python",
    "Golang",
    "Java",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "API",
    "Git",
    "Postman",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Laravel",
    "NodeJS",
    "Spring Boot",
    "Flask",
    "GoFiber",
]

const certifications = [
    {
        title:"Belajar Dasar Pemrograman JavaScript",
        url:"/assets/Certifications/Dicoding-Dasar JS.png",
    },
    {
        title:"Belajar Membuat Aplikasi Back-End untuk Pemula",
        url:"/assets/Certifications/Dicoding-BE.png",
    },
    {
        title:"Belajar Fundamental Aolikasi Back-End",
        url:"/assets/Certifications/Dicoding-FBE.png"
    },
    {
        title:"Fresh Graduate Academy Back-End Developer",
        url:"/assets/Certifications/FGA-BE.png",
    },
    {
        title:"Junior Web Developer",
        url:"/assets/Certifications/JWD.png",
    },
    {
        title:"MSIB MDRR DPR RI",
        url:"/assets/Certifications/MDRR-MSIB.png",
    },
    {
        title:"Back End Development and API's",
        url:"/assets/Certifications/BEDevnAPI-freecodecamp.png",
    },
    {
        title:"Oracle Java Foundations",
        url:"/assets/Certifications/Oracle-JF.png",
    },
    {
        title:"Oracle Java Programming",
        url:"/assets/Certifications/Oracle-JP.png",
    },
    {
        title:"FGA Java Foundation & Java Programming",
        url:"/assets/Certifications/FGA-Java.png",
    },
    {
        title:"Pelatihan Junior Web Developer",
        url:"/assets/Certifications/Pelatihan-JWD.png",
    },
    {
        title:"VIX Evermos Back End Developer Competencies",
        url:"/assets/Certifications/VIX-Evermos-Competencies.png",
    },
    {
        title:"VIX Evermos Back End Developer Completion",
        url:"/assets/Certifications/VIX-Evermos-Completion.png",
    },
    {
        title:"VIX Investree Back End Developer Competencies",
        url:"/assets/Certifications/VIX-Investree-Competencies.png",
    },
    {
        title:"VIX Investree Back End Developer Completion",
        url:"/assets/Certifications/VIX-Investeree-Completion.png",
    },
    {
        title:"Asisten Praktikum",
        url:"/assets/Certifications/AsistenPraktikum.png",
    },
]

export default function SkillsAndCertifications(){

    return (
        <div id="skillsandcertifications" className="bg-primary p-2 py-10 md:px-40 md:py-10 text-white">
            <TextSection title="Skills" />
            <p className="text-sm md:text-md text-justify mt-2 mb-5 text-paragraf">I dont limit my abilities, I will continue to learn technology. Following are the skills that I have.</p>
            <div className="grid grid-cols-2 gap-2 justify-items-center md:place-items-center md:flex md:justify-center md:space-x-20 mb-5">
                <ul className="list-disc">
                    <li className="text-secondary"> <span className="text-white">HTML</span> </li>
                    <li className="text-secondary"> <span className="text-white">CSS</span> </li>
                    <li className="text-secondary"> <span className="text-white">React</span> </li>
                    <li className="text-secondary"> <span className="text-white">NextJS</span> </li>
                    <li className="text-secondary"> <span className="text-white">Tailwind CSS</span> </li>
                    <li className="text-secondary"> <span className="text-white">Bootstrap</span> </li>
                </ul>
                <ul className="list-disc">
                    <li className="text-secondary"> <span className="text-white">PHP</span> </li>
                    <li className="text-secondary"> <span className="text-white">JavaScript</span> </li>
                    <li className="text-secondary"> <span className="text-white">Python</span> </li>
                    <li className="text-secondary"> <span className="text-white">Golang</span> </li>
                    <li className="text-secondary"> <span className="text-white">Java</span> </li>
                    <li className="text-secondary"> <span className="text-white">SQL</span> </li>
                    <li className="text-secondary hidden md:list-item"> <span className="text-white">MySQL</span> </li>
                </ul>
                <ul className="list-disc">
                    <li className="text-secondary md:hidden"> <span className="text-white">MySQL</span> </li>
                    <li className="text-secondary"> <span className="text-white">PostgreSQL</span> </li>
                    <li className="text-secondary"> <span className="text-white">MongoDB</span> </li>
                    <li className="text-secondary"> <span className="text-white">API</span> </li>
                    <li className="text-secondary"> <span className="text-white">Git</span> </li>
                    <li className="text-secondary"> <span className="text-white">Postman</span> </li>
                    <li className="text-secondary"> <span className="text-white">Docker</span> </li>
                    <li className="text-secondary hidden md:list-item"> <span className="text-white">Laravel</span> </li>
                </ul>
                <ul className="list-disc row-start-2 col-start-2">
                    <li className="text-secondary md:hidden"> <span className="text-white">Laravel</span> </li>
                    <li className="text-secondary"> <span className="text-white">NodeJS</span> </li>
                    <li className="text-secondary"> <span className="text-white">Spring Boot</span> </li>
                    <li className="text-secondary"> <span className="text-white">Flask</span> </li>
                    <li className="text-secondary"> <span className="text-white">GoFiber</span> </li>
                    <li className="text-secondary"> <span className="text-white">Redis</span> </li>
                    <li className="text-secondary"> <span className="text-white">RabbitMQ</span> </li>
                </ul>
            </div>

            <TextSection title="Certifications" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                {certifications.map((v,i)=>(
                    <div key={`certificate${i}`} className={v.title=="Junior Web Developer"?"row-span-2":""}>            
                        <figure className="h-auto max-w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <Image width={600} height={600} className="h-auto max-w-full rounded-lg" src={v.url} alt="image description"/>
                        </figure>
                    </div>
                    ))}
            </div>
        </div>
    )
}