export const experienceHero = {
    label: "MY GROWTH",
    title: "EXPERIENCE",
    roleLine: "ARJUN",
    roleLineAccent: "CSE STUDENT • FULL-STACK DEVELOPMENT & BACKEND SYSTEMS",
    bio: "Building projects, exploring backend engineering, and learning how reliable software systems are designed, deployed, and maintained.",
    quote: "EXPERIENCE IS THE NAME EVERYONE GIVES TO THEIR MISTAKES.",
} as const;

export const growthTimeline = [
    {
        period: "2026 – PRESENT",
        title: "ENGINEERING & INFRASTRUCTURE",
        bullets: ["Docker", "CI/CD Pipelines", "Deployment Workflows", "System Design"],
        description:
            "Exploring modern infrastructure, automation, deployment, and software engineering practices.",
    },
    {
        period: "2025 – 2026",
        title: "BACKEND & SYSTEMS",
        bullets: ["Node.js & Express", "PostgreSQL & Prisma", "Authentication & Authorization", "REST APIs"],
        description:
            "Focused on backend engineering, APIs, databases, and scalable application architecture.",
    },
    {
        period: "2024 – 2025",
        title: "FULL-STACK DEVELOPMENT",
        bullets: ["React & TypeScript", "MERN Applications", "State Management", "Responsive Interfaces"],
        description:
            "Expanded into full-stack development while building larger and more complex web applications.",
    },
    {
        period: "2023 – 2024",
        title: "FOUNDATIONS",
        bullets: ["HTML & CSS", "JavaScript", "Git & GitHub", "Programming Fundamentals"],
        description:
            "Built my first websites and established a strong foundation in web development and programming.",
    },
] as const;

export const currentlyExploring = [
    {
        title: "BACKEND ENGINEERING",
        description: "Designing APIs and scalable services.",
    },
    {
        title: "DOCKER",
        description: "Containerization and development workflows.",
    },
    {
        title: "CI/CD",
        description: "Deployment automation and software delivery.",
    },
    {
        title: "SYSTEM DESIGN",
        description: "Learning how scalable systems are structured.",
    },
    {
        title: "AI APPLICATIONS",
        description: "Exploring practical AI integration.",
    },
    {
        title: "DEVELOPER TOOLING",
        description: "Improving workflows, tooling, and productivity.",
    },
] as const;

export const highlights = [
    {
        number: "01",
        text: "Built multiple full-stack applications using modern web technologies.",
    },
    {
        number: "02",
        text: "Participated in hackathons and collaborative development projects.",
    },
    {
        number: "03",
        text: "Exploring Docker, CI/CD, and modern deployment workflows.",
    },
] as const;

export const experienceSnapshot = [
    { value: "15+", label: "PROJECTS COMPLETED", icon: "folder" as const },
    { value: "20+", label: "TECHNOLOGIES USED", icon: "code" as const },
    { value: "50+", label: "GITHUB REPOSITORIES", icon: "github" as const },
    { value: "3+", label: "YEARS LEARNING", icon: "graduation" as const },
] as const;