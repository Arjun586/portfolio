export const featuredProjects = [
    {
        number: "01",
        title: "TASKFLOW",
        description:
            "A productivity app to manage tasks, projects and team collaboration.",
        category: "Web Application",
    },
    {
        number: "02",
        title: "SKYWARD AGENCY",
        description: "A modern landing page for a creative digital agency.",
        category: "Landing Page",
    },
    {
        number: "03",
        title: "TIMEPIECE",
        description: "An e-commerce platform for premium watches.",
        category: "E-Commerce",
    },
] as const;

export type FeaturedProject = (typeof featuredProjects)[number];
