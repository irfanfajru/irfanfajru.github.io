export type Contact = {
    label: string;
    href: string;
    type: "EXTERNAL" | "GMAIL" | "GITHUB" | "LINKEDIN"
}

export const ContactType = {
    EXTERNAL:"EXTERNAL",
    GMAIL:"GMAIL",
    GITHUB:"GITHUB",
    LINKEDIN:"LINKEDIN"
} as const;

export const contacts: Contact[] = [
    {
        label:"irfanfajru@gmail.com",
        href:"mailto:irfanfajru@gmail.com",
        type: ContactType.GMAIL
    },
    {
        label:"irfanfajru",
        href:"https://www.linkedin.com/in/irfanfajru/",
        type: ContactType.LINKEDIN
    },
    {
        label:"irfanfajru",
        href:"https://github.com/irfanfajru",
        type: ContactType.GITHUB
    },
]