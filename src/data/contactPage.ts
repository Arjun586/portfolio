export const contactHero = {
    label: "GET IN TOUCH",
    title: "CONTACT",
    subtitle: "LET'S BUILD SOMETHING GREAT",
    description:
        "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, ideas and challenges.",
    quote: "THE BEST PROJECTS START WITH A CONVERSATION.",
};

export const contactDetails = [
    {
        label: "EMAIL",
        value: "hello@arjundev.com",
        icon: "mail" as const,
    },
    {
        label: "PHONE",
        value: "+91 98765 43210",
        icon: "phone" as const,
    },
    {
        label: "LOCATION",
        value: "India",
        icon: "location" as const,
    },
    {
        label: "RESPONSE TIME",
        value: "Usually within 24 hours",
        icon: "clock" as const,
    },
] as const;

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Arjun586",
        icon: "github" as const,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arjun586",
        icon: "linkedin" as const,
    },
    {
        label: "Email",
        href: "mailto:hello@arjundev.com",
        icon: "mail" as const,
    },
] as const;

export const availableFor = [
    "Full Stack Development",
    "Web Application Projects",
    "API Development",
    "UI/UX Collaboration",
    "Technical Consulting",
] as const;

export const contactFooterQuote = {
    text: "GREAT THINGS HAPPEN WHEN WE WORK TOGETHER.",
    author: "Arjun Dev",
} as const;
