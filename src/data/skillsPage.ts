export const skillsHero = {
    label: "MY EXPERTISE",
    title: "SKILLS",
    subtitle: "FULL STACK DEVELOPER",
    description:
        "A diverse set of skills, tools and technologies that I use to build modern, scalable and user-friendly web applications.",
    quote: "SKILLS ARE CHEAP. PASSION IS PRICELESS.",
} as const;

export const frontendSkills = [
    { name: "HTML5",        icon: "html5"      },
    { name: "CSS3",         icon: "css3"       },
    { name: "JavaScript",   icon: "javascript" },
    { name: "TypeScript",   icon: "typescript" },
    { name: "React.js",     icon: "react"      },
    { name: "Next.js",      icon: "nextjs"     },
    { name: "Tailwind CSS", icon: "tailwind"   },
    { name: "Redux",        icon: "redux"      },
    { name: "Sass",         icon: "sass"       },
] as const;

export const backendSkills = [
    { name: "Node.js",    icon: "nodejs"   },
    { name: "Express.js", icon: "express"  },
    { name: "REST APIs",  icon: "api"      },
    { name: "JWT Auth",   icon: "jwt"      },
    { name: "GraphQL",    icon: "graphql"  },
    { name: "Socket.io",  icon: "socketio" },
] as const;

export const databaseSkills = [
    { name: "MongoDB",    icon: "mongodb"    },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma",     icon: "prisma"     },
    { name: "MySQL",      icon: "mysql"      },
] as const;

export const toolsLeft  = ["Git & GitHub", "VS Code", "Postman", "Docker", "Figma"] as const;
export const toolsRight = ["CI / CD", "Vercel / Netlify", "ESLint / Prettier", "Thunder Client", "Linux Basics"] as const;

export const skillsFooterQuote = {
    text: "THE MORE YOU LEARN, THE MORE YOU EARN.",
    author: "— Arjun",
} as const;

export type SkillIconKey =
    | (typeof frontendSkills)[number]["icon"]
    | (typeof backendSkills)[number]["icon"]
    | (typeof databaseSkills)[number]["icon"];