export const skillsHero = {
    label: "MY EXPERTISE",
    title: "SKILLS",
    subtitle: "FULL STACK DEVELOPER",
    description:
        "Technologies, tools, and foundations I use to design, build, and ship modern full stack applications — from interface to infrastructure.",
    quote: "SKILLS ARE CHEAP. PASSION IS PRICELESS.",
} as const;

export const frontendSkills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwind" },
] as const;

export const backendSkills = [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "REST APIs", icon: "api" },
    { name: "Socket.io", icon: "socketio" },
    { name: "JWT", icon: "jwt" },
    { name: "OAuth", icon: "oauth" },
    { name: "RBAC", icon: "rbac" },
] as const;

export const databaseSkills = [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma", icon: "prisma" },
    { name: "Mongoose", icon: "mongoose" },
    { name: "Supabase", icon: "supabase" },
] as const;

export const devopsSkills = [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "Vercel", icon: "vercel" },
    { name: "Netlify", icon: "netlify" },
    { name: "Railway", icon: "railway" },
    { name: "Render", icon: "render" },
] as const;

export const cloudSkills = [
    { name: "AWS", icon: "aws" },
    { name: "Firebase", icon: "firebase" },
] as const;

export const developerTools = [
    { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" },
] as const;

export const csFoundations = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
] as const;

export type SkillEmphasis = "primary" | "secondary" | "tertiary";

export type SkillItem = {
    name: string;
    icon: SkillIconKey;
};

export type SkillCategory = {
    id: string;
    title: string;
    emphasis: SkillEmphasis;
    skills: readonly SkillItem[];
};

export const skillCategories = {
    primary: [
        { id: "frontend", title: "FRONTEND", emphasis: "primary" as const, skills: frontendSkills },
        { id: "backend", title: "BACKEND", emphasis: "primary" as const, skills: backendSkills },
    ],
    secondary: [
        { id: "databases", title: "DATABASES", emphasis: "secondary" as const, skills: databaseSkills },
        { id: "devops", title: "DEVOPS & DEPLOYMENT", emphasis: "secondary" as const, skills: devopsSkills },
    ],
    tertiary: [
        { id: "cloud", title: "CLOUD & SERVICES", emphasis: "tertiary" as const, skills: cloudSkills },
        { id: "tools", title: "DEVELOPER TOOLS", emphasis: "tertiary" as const, skills: developerTools },
    ],
} as const;

export type SkillIconKey =
    | (typeof frontendSkills)[number]["icon"]
    | (typeof backendSkills)[number]["icon"]
    | (typeof databaseSkills)[number]["icon"]
    | (typeof devopsSkills)[number]["icon"]
    | (typeof cloudSkills)[number]["icon"]
    | (typeof developerTools)[number]["icon"];
