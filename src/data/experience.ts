export const experienceHero = {
    label: "MY JOURNEY",
    title: "EXPERIENCE",
    roleLine: "ARJUN DEV | FULL STACK DEVELOPER • 2023 – PRESENT",
    bio: "Building modern web applications, learning scalable systems, and continuously improving as an engineer.",
    quote:
        "EXPERIENCE IS THE NAME EVERYONE GIVES TO THEIR MISTAKES.",
};

export const professionalJourney = [
    {
        period: "2025 – PRESENT",
        role: "Full Stack Developer",
        skills: "MERN, REST APIs, Database Design, Auth Systems",
    },
    {
        period: "2024 – 2025",
        role: "Open Source Contributor",
        skills: "Git/GitHub, Bug Fixes, Documentation",
    },
    {
        period: "2023 – 2024",
        role: "Web Development Student",
        skills: "HTML, CSS, JS, React",
    },
] as const;

export const techStackGroups = [
    {
        title: "FRONTEND",
        items: [
            { name: "React.js", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
        ],
    },
    {
        title: "BACKEND",
        items: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
            { name: "REST APIs", icon: "api" },
            { name: "JWT Auth", icon: "jwt" },
        ],
    },
    {
        title: "DATABASE",
        items: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "Prisma", icon: "prisma" },
        ],
    },
] as const;

export const highlights = [
    {
        number: "01",
        text: "Built multiple full-stack MERN applications with real-world features.",
    },
    {
        number: "02",
        text: "Designed responsive interfaces focused on usability and performance.",
    },
    {
        number: "03",
        text: "Implemented secure APIs with authentication and structured backends.",
    },
    {
        number: "04",
        text: "Deployed projects using modern workflows and version control practices.",
    },
] as const;

export const experienceSnapshot = [
    { value: "15+", label: "PROJECTS COMPLETED", icon: "folder" },
    { value: "20+", label: "TECHNOLOGIES USED", icon: "code" },
    { value: "50+", label: "GITHUB REPOSITORIES", icon: "github" },
    { value: "3+", label: "YEARS LEARNING", icon: "graduation" },
] as const;

export const experienceFooterQuote = {
    text: "EVERY PROJECT TEACHES SOMETHING NEW.",
    author: "Arjun Dev",
} as const;
