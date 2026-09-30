import { ComputerDesktopIcon, ServerIcon, 
  CircleStackIcon, WrenchScrewdriverIcon} from '@heroicons/react/24/outline';
import { ComponentType } from 'react';

export const PortfolioSections = {
  ABOUT_ME : "ABOUT_ME",
  EDUCATION: "EDUCATION",
  EXPERIENCE: "EXPERIENCE",
  SKILLS: "SKILLS",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT"
} as const;


export type SkillsSection = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  skills : string[]
}

export const SkillsSections: SkillsSection[] = [
  {
    icon: ComputerDesktopIcon,
    title:"Frontend",
    skills:[
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js"
    ]
  },
  {
    icon: ServerIcon,
    title:"Backend",
    skills:[
      "PHP",
      "Java",
      "JavaScript",
      "TypeScript",
      "Golang",
      "Python",
      "C#",
      "Laravel (PHP)",
      "Spring Boot (Java)",
      "Flask (Python)",
      "GoFiber (Golang)",
      "Express.js",
      "Hapi.js"
    ]
  },
  {
    icon: CircleStackIcon,
    title:"Database",
    skills:[
      "MySQL", 
      "PostgreSQL", 
      "SQL Server", 
      "MongoDB", 
      "Redis"
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title:"Other",
    skills:[
      "Postman", 
      "Git", 
      "Docker", 
      "RabbitMQ"
    ]
  }
];


export type Certificate = {
  title: string;
  date: string
}

export const Certificates: Certificate[] = [
  {
        title: "Google IT Automation with Python",
        date: "May 2024"
    },
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