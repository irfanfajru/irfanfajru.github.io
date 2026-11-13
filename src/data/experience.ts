export type Experience = {
    company: string;
    startDate: Date;
    endDate: Date | null | undefined; 
    role: string;
}

export const experiences: Experience[] = [
    {
        company: "Independent / Various Clients",
        startDate: new Date(2025, 5),
        endDate: null,
        role: "Freelance Software Developer",
    },
    {
        company: "PT. Bosnet Distribution Indonesia",
        startDate: new Date(2023, 10),
        endDate: new Date(2025, 5),
        role: "Software Developer",
    },
    {
        company: "Evermos",
        startDate: new Date(2023, 6),
        endDate: new Date(2023, 7),
        role: "Project-Based Virtual Intern: Backend Developer (Evermos x Rakamin Academy)",
    },
    {
        company: "PT. Investree Radhika Jaya",
        startDate: new Date(2023, 4),
        endDate: new Date(2023, 5),
        role: "Project-Based Intern: Backend Developer (Virtual Internship Experience)",
    },
    {
        company: "The House of Representatives, Republic of Indonesia (DPR RI)",
        startDate: new Date(2022, 7),
        endDate: new Date(2022, 11),
        role: "Back-End Programmer Intern",
    },
    {
        company: "Ahmad Dahlan University Informatics Computer Lab",
        startDate: new Date(2020, 8),
        endDate: new Date(2021, 0),
        role: "Lab Assistant",
    },
];
