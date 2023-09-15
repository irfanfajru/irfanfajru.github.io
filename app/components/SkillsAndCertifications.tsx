import TextSection from "./TextSection"
import Image from "next/image"

const skills = [
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
        <div id="skillsandcertifications" className="bg-primary px-40 py-10 text-white">
            <TextSection title="Skills" />
            <p className="text-md text-justify mt-2 mb-5 text-paragraf">I dont limit my abilities, I will continue to study technology. Following are the skills that I have.</p>
            <div className="flex space-x-20 justify-center mb-5">
                <ul className="list-disc">
                    {skills.map((v,i)=>{
                        if(i<6) return (
                            <li key={`skill${i}`} className="text-secondary"> <span className="text-white">{v}</span> </li>
                        ) 
                    })}
                </ul>
                <ul className="list-disc">
                    {skills.map((v,i)=>{
                        if(i>5 && i<14) return (
                            <li key={`skill${i}`} className="text-secondary"> <span className="text-white">{v}</span> </li>
                        ) 
                    })}
                </ul>
                <ul className="list-disc">
                    {skills.map((v,i)=>{
                        if(i>13) return (
                            <li key={`skill${i}`} className="text-secondary"> <span className="text-white">{v}</span> </li>
                        ) 
                    })}
                </ul>
            </div>

            <TextSection title="Certifications" />
            <div className="grid grid-cols-3 gap-2 mt-4">
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