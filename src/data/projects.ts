import FanPaperEngineContent from "@/content/fanpaper-engine.mdx";
import BhimacContent from "@/content/bhimac.mdx";
import DaftrixContent from "@/content/daftrix.mdx";
import DigiscoreContent from "@/content/digiscore.mdx";
import PomodoroAppContent from "@/content/pomodoro-app.mdx";
import StelaContent from "@/content/stela.mdx";
import PbsfContent from "@/content/pbsf.mdx";
import NokenContent from "@/content/noken.mdx";
import SmokingDetectionContent from "@/content/smoking-detection.mdx";
import OpenMusicAPIContent from "@/content/open-music-api.mdx";
import P2PLendingServiceContent from "@/content/p2p-lending-service.mdx";
import SocialCommerceResellerServiceContent from "@/content/social-commerce-resellser-service.mdx";
import { ComponentType } from "react";

export type Project = {
    title:string;
    types:string[];
    description:string;
    image:ProjectImage;
    links?:ProjectLink[];
    content: ComponentType;
}

export type ProjectImage = {
    src: string;
    bgClassName?: string|null;
} 

export type ProjectLink = {
    label: string;
    href: string;
    type: "EXTERNAL" | "GITHUB";
}

export const ProjectLinkType = {
    EXTERNAL:"EXTERNAL",
    GITHUB:"GITHUB"
} as const;

export const projects: Project[] = [
    {
        title:"FanPaper Engine",
        types:["Desktop App"],
        description:"A macOS live wallpaper app that turns videos into stunning animated backgrounds.",
        image:{
            src: "/images/fanpaperengine.webp",
            bgClassName: "bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027]"
        },
        links:[
            {
                label:"Visit Website",
                href:"https://fanpaperengine.vercel.app/",
                type:ProjectLinkType.EXTERNAL
            }
        ],
        content: FanPaperEngineContent
    },
    {
        title:"BHIMAC",
        types:["Web App"],
        description:"Behavior Identification Measurement for Autism Child",
        image:{
            src: "/images/bhimac.webp",
            bgClassName: "bg-gradient-to-r from-[#FFFFFF] via-[#6DD5FA] to-[#2980B9]"
        },
        links:[
            {
                label:"Visit Website",
                href:"https://malangautismcenter.com/instrumen-deteksi-dini",
                type:ProjectLinkType.EXTERNAL
            }
        ],
        content: BhimacContent
    },
    {
        title:"DAFTRIX",
        types:["Web App"],
        description:"Web-based event management system for organizing and managing pencak silat tournaments, streamlining competition administration and event operations.",
        image:{
            src: "/images/daftrix.webp",
            bgClassName: "bg-gradient-to-r from-[#753A88] to-[#CC2B5E]"
        },
        content: DaftrixContent
    },
    {
        title:"DIGISCORE",
        types:["Web App"],
        description:"Simplifying Pencak Silat Scoring with Affordable Technology",
        image:{
            src: "/images/digiscore.webp",
            bgClassName: "bg-gradient-to-r from-[#2F80ED] to-[#56CCF2]"
        },
        content: DigiscoreContent
    },
    {
        title:"Pomodoro App",
        types:["Web App"],
        description:"Focus Timer for Productivity",
        image:{
            src: "/images/pomodoro-app.webp",
            bgClassName: "bg-gradient-to-r from-[#182848] to-[#4B6CB7]"
        },
        links:[
            {
                label:"Visit Web App",
                href:"https://pomodoro-app-ten-bice.vercel.app/",
                type:ProjectLinkType.EXTERNAL
            }
        ],
        content: PomodoroAppContent
    },
    {
        title:"STELA",
        types:["Web App", "Mobile App"],
        description:"Ticketing and Service Escalation System DPR RI",
        image:{
            src: "/images/stela.webp",
            bgClassName: "bg-gradient-to-r from-[#009FFC] to-[#1DA1F2]"
        },
        content: StelaContent
    },
    {
        title:"Playbook Sales Force",
        description:"Mobile and web app for monitoring Telkomsel Sales activities for Telkomsel Balikpapan",
        types:["Web App", "Mobile App"],
        image:{
            src: "/images/pbsf.webp",
            bgClassName: "bg-gradient-to-r from-[#FDCF58] to-[#FF0000]"
        },
        content: PbsfContent
    },
    {
        title:"Noken Super App",
        types:["Web App", "Mobile App"],
        description:"Custom-built sales monitoring system for Telkomsel Sales Agent Papua Maluku",
        image:{
            src: "/images/noken.webp",
            bgClassName: "bg-gradient-to-r from-[#FDCF58] to-[#FF0000]"
        },
        content: NokenContent
    },
    {
        title:"Smoking Detection While Driving Using YOLOv7",
        types:["Web App"],
        description:"Web-based image detection system for identifying motorbike riders who smoke",
        image:{
            src: "/images/smoking-detection.webp",
            bgClassName: "bg-gradient-to-r from-[#D7DDE8] to-[#757F9A]"
        },
        links:[
            {
                label:"Backend",
                href:"https://github.com/irfanfajru/smoking-detection-back-end",
                type:ProjectLinkType.GITHUB
            },
            {
                label:"Frontend",
                href:"https://github.com/irfanfajru/smoking-detection-front-end",
                type:ProjectLinkType.GITHUB
            }
        ],
        content: SmokingDetectionContent
    },
    {
        title:"Open Music API",
        types:["Backend API"],
        description:"Spotify-inspired backend service for music and playlist management",
        image:{
            src: "/images/open-music-api.webp",
        },
        links:[
            {
                label:"Open Music API",
                href:"https://github.com/irfanfajru/open-music-api",
                type:ProjectLinkType.GITHUB
            },
            {
                label:"Open Music API Consumer",
                href:"https://github.com/irfanfajru/open-music-consumer",
                type:ProjectLinkType.GITHUB
            }
        ],
        content: OpenMusicAPIContent
    },
    {
        title:"P2P Lending Service",
        types:["Backend API"],
        description:"Secure backend API for peer-to-peer lending transactions",
        image:{
            src: "/images/p2p-lending-service.webp",
        },
        links:[
            {
                label:"P2P Lending Service",
                href:"https://github.com/irfanfajru/task-5-backend-investree",
                type:ProjectLinkType.GITHUB
            }
        ],
        content: P2PLendingServiceContent
    },
    {
        title:"Social Commerce Reseller Service",
        types:["Backend API"],
        description:"Backend API for managing reseller workflows in social commerce",
        image:{
            src: "/images/social-commerce-reseller-service.webp",
        },
        links:[
            {
                label:"Social Commerce Reseller Service",
                href:"https://github.com/irfanfajru/final-task-evermos",
                type:ProjectLinkType.GITHUB
            }
        ],
        content: SocialCommerceResellerServiceContent
    }
];