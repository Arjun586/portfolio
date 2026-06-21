export const experienceHero = {
    label: "MY JOURNEY",
    title: "EXPERIENCE",
    roleLine: "Arjun",
    roleLineAccent: "FULL STACK DEVELOPER  •  2023 – PRESENT",
    bio: "Building modern web applications, learning scalable systems, and continuously improving as an engineer.",
    quote: "EXPERIENCE IS THE NAME EVERYONE GIVES TO THEIR MISTAKES.",
} as const;

export const professionalJourney = [
    {
        period: "2025 – Present",
        role: "Full Stack Developer",
        bullets: ["MERN Applications", "REST APIs", "Database Design", "Authentication Systems"],
    },
    {
        period: "2024 – 2025",
        role: "Open Source Contributor",
        bullets: ["Git & GitHub", "Bug Fixes", "Documentation", "Community Projects"],
    },
    {
        period: "2023 – 2024",
        role: "Web Development Student",
        bullets: ["HTML", "CSS", "JavaScript", "React Fundamentals"],
    },
] as const;

export const techStackGroups = [
    {
        title: "FRONTEND",
        items: [
            { name: "React.js", icon: "react" as const },
            { name: "Next.js", icon: "nextjs" as const },
            { name: "Tailwind CSS", icon: "tailwind" as const },
            { name: "JavaScript", icon: "javascript" as const },
            { name: "TypeScript", icon: "typescript" as const },
        ],
    },
    {
        title: "BACKEND",
        items: [
            { name: "Node.js", icon: "nodejs" as const },
            { name: "Express.js", icon: "express" as const },
            { name: "REST APIs", icon: "api" as const },
            { name: "JWT Auth", icon: "jwt" as const },
        ],
    },
    {
        title: "DATABASE",
        items: [
            { name: "MongoDB", icon: "mongodb" as const },
            { name: "PostgreSQL", icon: "postgresql" as const },
            { name: "Prisma", icon: "prisma" as const },
        ],
    },
] as const;

export const highlights = [
    { number: "01", text: "Built multiple full-stack applications using MERN stack architecture." },
    { number: "02", text: "Designed responsive interfaces for desktop and mobile devices." },
    { number: "03", text: "Implemented authentication, authorization and secure APIs." },
    { number: "04", text: "Worked with modern deployment and development workflows." },
] as const;

export const experienceSnapshot = [
    { value: "15+", label: "PROJECTS COMPLETED", icon: "folder" as const },
    { value: "20+", label: "TECHNOLOGIES USED", icon: "code" as const },
    { value: "50+", label: "GITHUB REPOSITORIES", icon: "github" as const },
    { value: "3+", label: "YEARS LEARNING", icon: "graduation" as const },
] as const;

export const experienceFooterQuote = {
    text: "EVERY PROJECT TEACHES SOMETHING NEW.",
    author: "— Arjun",
} as const;