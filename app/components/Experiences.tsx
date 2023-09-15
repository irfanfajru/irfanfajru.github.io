import ExperienceCard from "./ExperienceCard"

const experiences = [
    {
        company:"Evermos",
        role:"Project-Based Virtual Intern : Backend Developer Evermos x Rakamin Academy",
        startDate:"July 2023",
        endDate:"Aug 2023",
        jobs : ["Learn Golang, GoFiber, GORM, Docker, Git, Gitlab, Postman, API, and MySQL.",
                "Learn SQL operations and optimization.",
                "Learn about application deployment.",
                "Creating a final project for a simple social commerce reseller API service with Golang Fiber and MySQL, presenting the final project with very satisfying results by the mentor.",
                ]
    },
    {
        company:"PT. Investree Radhika Jaya",
        role:"Project-Based Intern : Backend Developer Virtual Internship Experience",
        startDate:"May 2023",
        endDate:"June 2023",
        jobs : ["Learn Java, Spring Boot, SQL, PostgreSQL, Git, Gitlab, Postman, API, Unit Test, and CI/CD.",
                "Learn MVC design patterns.",
                "Learn clean architecture, clean code, and OAuth security in Java Spring Boot.",
                "Created the final project for the lending and borrowing transaction service API using Java Spring Boot and PostgreSQL, presenting the final project with very satisfying results by the mentor.",
                ]
    },
    {
        company:"The House of Representatives, Republic of Indonesia (DPR RI)",
        role:"Back-End Programmer Intern",
        startDate:"Aug 2022",
        endDate:"Dec 2022",
        jobs : ["Become an lead back end programmer intern to lead the team in creating the Indonesian DPR RI Ticketing and Service Escalation System application using PHP Zend Framework and MySQL.",
                "Designing database structure, logic and application documentation.",
                "Performed E-Sign API testing with Postman.",
                "Assist front end and back end programmer intern in solving program code problems.",
                "Creating an API for the Indonesian DPR RI Ticketing and Service Escalation System application for use on mobile with JWT authentication and authorization as well as testing the API with Postman.",
                "Perform code checking, debugging, and merge branches from feature branch to staging.",
                "Presented the DPR RI Ticket and Service Escalation System application program code to the DPR RI Information Technology Center with a final score of 89.89 (very satisfactory).",
                ]
    },
    {
        company:"Ahmad Dahlan University Informatics Computer Lab",
        role:"Lab Assistant",
        startDate:"Sept 2020",
        endDate:"Jan 2021",
        jobs : ["Teaching basic programming using the C++ programming language to practitioners.",
                "Testing practice with Pretest, Posttest and Final Exam.",
                "Entering practical Pretest, Posttest and Final Exam scores."
                ]
    }
]

export default function Experiences(){
    return (
        <div id="experiences" className="bg-primary p-2 py-10 md:px-40 md:py-10 text-white">
            <div className="text-center">    
                <h1 className="font-bold text-4xl">Experience</h1>
                <p>Below is my <span className="text-secondary text-md"> experience.</span></p>
            </div>
            <div className="space-y-8 mt-8">
                {experiences.map((v,i)=>(
                <ExperienceCard 
                key={`experience ${i}`}
                company={v.company} 
                role={v.role}
                startDate={v.startDate}
                endDate={v.endDate}
                jobs={v.jobs}
                />
                ))}
            </div>
        </div>
    )
}