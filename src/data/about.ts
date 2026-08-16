export const aboutHero = {
    label: "ABOUT ME",
    title: "Arjun",
    subtitle: "FULL STACK DEVELOPER",
    bio: "I approach software development with a focus on clarity, usability, and attention to detail. Whether building backend systems or refining user experiences, I value purposeful design and thoughtful execution.",
} as const;

export const aboutHeroQuote = {
    text: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
} as const;

export const aboutContent = {
    bio: [
        "I'm a Computer Science student focused on backend and full-stack development. I enjoy building applications beyond the interface — working with APIs, databases, authentication, caching, and the infrastructure that connects everything together.",
        "I'm currently focused on writing more reliable software, improving my understanding of system design, and getting better at testing and deployment.",
    ],
    currently: {
        education: {
            degree: "B.Tech — CSE (AI & ML)",
            institution: "ABES Institute of Technology",
            period: "2023 — 2027",
        },
        focus: [
            "Backend Engineering",
            "Full-Stack Development",
            "Systems & Infrastructure",
        ],
        location: "India",
    },
} as const;

export const outsideTheCode = {
    text: "Outside of development, I spend time reading fiction and philosophy, and generally following whatever I'm curious about at the moment.",
    currentlyReading: {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
    },
} as const;