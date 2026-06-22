export type ProjectFilterId =
| "all"
| "featured"
| "full-stack"
| "backend"
| "hackathon"
| "frontend";

export type ProjectCategory =
| "full-stack"
| "backend"
| "frontend"
| "hackathon";

export type Project = {
id: string;
number: string;

title: string;
description: string;

category: string;
categoryIds: ProjectCategory[];

featured: boolean;

thumbnail: string;

githubUrl?: string;
liveUrl?: string;

technologies: string[];

contribution?: string;

status: "Completed" | "Hackathon";

};

export const projectFilters: {
id: ProjectFilterId;
label: string;
}[] = [
{ id: "all", label: "ALL" },
{ id: "featured", label: "FEATURED" },
{ id: "full-stack", label: "FULL STACK" },
{ id: "backend", label: "BACKEND" },
{ id: "hackathon", label: "HACKATHON" },
{ id: "frontend", label: "FRONTEND" },
];

export const projectsHero = {
label: "MY WORK",
title: "PROJECTS",
subtitle:
"A collection of full-stack applications, backend systems, hackathon projects, and developer tools built while exploring software engineering and modern web technologies.",
metadata:
"FULL-STACK DEVELOPMENT • BACKEND SYSTEMS • REAL-TIME APPLICATIONS",
} as const;

export const allProjects: Project[] = [
{
id: "replayos",
number: "01",


    title: "REPLAYOS",

    description:
        "Developer observability platform that transforms logs, traces, and incidents into visual timelines, enabling faster debugging and root-cause analysis.",

    category: "FULL STACK",
    categoryIds: ["full-stack"],

    featured: true,

    thumbnail: "/projects/replayos.png",

    githubUrl: "https://github.com/Arjun586/ReplayOS",

    technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "BullMQ",
        "JWT",
        "RBAC",
    ],

    status: "Completed",
},

{
    id: "kmrl",
    number: "02",

    title: "KMRL",

    description:
        "Intelligent document processing platform that classifies, routes, and interprets documents while connecting policies, approvals, and workflows in real time.",

    category: "FULL STACK",
    categoryIds: ["full-stack"],

    featured: true,

    thumbnail: "/projects/kmrl.png",

    technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "WebSockets",
        "LangChain",
        "Gemini",
        "n8n",
    ],

    contribution:
        "Developed WebSocket communication, backend services using Node.js and Express, and MongoDB integrations.",

    status: "Completed",
},

{
    id: "resq360",
    number: "03",

    title: "RESQ360",

    description:
        "Emergency response platform that combines real-time alerts, community reporting, and safety resources to improve crisis coordination.",

    category: "HACKATHON",
    categoryIds: ["hackathon"],

    featured: true,

    thumbnail: "/projects/resq360.png",

    githubUrl:
        "https://github.com/Arjun586/RESQ360-hacknovate",

    technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Gemini API",
        "Tailwind",
    ],

    status: "Hackathon",
},

{
    id: "studynotion",
    number: "04",

    title: "STUDYNOTION",

    description:
        "EdTech platform where students purchase and consume courses while instructors create, manage, and analyze educational content.",

    category: "FULL STACK",
    categoryIds: ["full-stack"],

    featured: true,

    thumbnail: "/projects/studynotion.png",

    githubUrl:
        "https://github.com/Arjun586/studynotion",

    technologies: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind",
    ],

    status: "Completed",
},

{
    id: "verichain",
    number: "05",

    title: "VERICHAIN",

    description:
        "Blockchain-powered property verification system that converts physical assets into secure, verifiable digital records.",

    category: "BACKEND • HACKATHON",
    categoryIds: ["backend", "hackathon"],

    featured: false,

    thumbnail: "/projects/verichain.png",

    githubUrl:
        "https://github.com/aryan-saini-dev/Verichain-Property_Transfer_Using_Blockchain",

    technologies: [
        "Blockchain",
        "NFT",
        "Property Verification",
    ],

    status: "Hackathon",
},

{
    id: "chat-app",
    number: "06",

    title: "CHAT APP",

    description:
        "Real-time messaging application featuring instant communication, authentication, and scalable client-server architecture.",

    category: "FULL STACK",
    categoryIds: ["full-stack"],

    featured: false,

    thumbnail: "/projects/chat-app.png",

    githubUrl:
        "https://github.com/Arjun586/chat-app",

    technologies: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
        "JWT",
    ],

    status: "Completed",
},

{
    id: "video-backend",
    number: "07",

    title: "VIDEO BACKEND",

    description:
        "Production-style backend inspired by modern video platforms, featuring authentication, subscriptions, comments, likes, and media management.",

    category: "BACKEND",
    categoryIds: ["backend"],

    featured: false,

    thumbnail: "/projects/video-backend.png",

    githubUrl:
        "https://github.com/Arjun586/full_backend",

    technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
    ],

    status: "Completed",
},

{
    id: "advanced-event-studio",
    number: "08",

    title: "ADVANCED EVENT STUDIO",

    description:
        "Interactive JavaScript playground designed to explore modern DOM events, event delegation, and real-world event-driven UI patterns.",

    category: "FRONTEND",
    categoryIds: ["frontend"],

    featured: false,

    thumbnail: "/projects/advanced-event-studio.png",

    githubUrl:
        "https://github.com/Arjun586/advance-event-studio",

    technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "DOM Events",
    ],

    status: "Completed",
},


];

export const featuredProjects = allProjects.filter(
(project) => project.featured,
);

export function filterProjects(
projects: Project[],
filterId: ProjectFilterId,
): Project[] {
if (filterId === "all") {
return projects;
}


if (filterId === "featured") {
    return projects.filter((project) => project.featured);
}

return projects.filter((project) =>
    project.categoryIds.includes(filterId as ProjectCategory),
);


}
