export const contactHero = {
    label: "GET IN TOUCH",
    title: "CONTACT",
    subtitle: "LET'S BUILD SOMETHING GREAT",
    description:
        "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, ideas and challenges.",
} as const;

export const contactHeroQuote = {
    text: "So we beat on, boats against the current.",
    author: "F. Scott Fitzgerald",
} as const;

export const contactDetails = [
    { label: "EMAIL",         value: "arjunofficial586@gmail.com",     icon: "mail"     as const },
    { label: "LOCATION",      value: "India",                   icon: "location" as const },
    { label: "RESPONSE TIME", value: "Usually within 24 hours", icon: "clock"    as const },
] as const;

export const socialLinks = [
    { label: "GitHub",   href: "https://github.com/Arjun586",          icon: "github"   as const },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun586", icon: "linkedin" as const },
    { label: "X",        href: "https://x.com/Arjun88823705",          icon: "x"        as const },
    { label: "Email",    href: "mailto:arjunofficial586@gmail.com",    icon: "mail"     as const },
] as const;

export const availableFor = [
    "Full Stack Development",
    "Web Application Projects",
    "API Development"
] as const;