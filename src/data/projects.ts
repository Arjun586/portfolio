export type ProjectFilterId =
    | "all"
    | "web-applications"
    | "landing-pages"
    | "e-commerce"
    | "ui-ux";

export type ProjectPreviewVariant =
    | "taskflow"
    | "skyward"
    | "timepiece"
    | "devportfolio"
    | "nesthabitat"
    | "fintrack";

export type ProjectCategory =
    | "web-application"
    | "landing-page"
    | "e-commerce"
    | "ui-ux";

export type Project = {
    number: string;
    title: string;
    description: string;
    category: string;
    categoryId: ProjectCategory;
    preview: ProjectPreviewVariant;
    url?: string;
};

export const projectFilters: { id: ProjectFilterId; label: string }[] = [
    { id: "all", label: "ALL" },
    { id: "web-applications", label: "WEB APPLICATIONS" },
    { id: "landing-pages", label: "LANDING PAGES" },
    { id: "e-commerce", label: "E-COMMERCE" },
    { id: "ui-ux", label: "UI/UX" },
];

export const projectsHero = {
    label: "MY WORK",
    title: "PROJECTS",
    subtitle:
        "A collection of projects that showcase my skills, creativity, and passion for building digital experiences.",
    quote: "THE BEST WAY TO PREDICT THE FUTURE IS TO BUILD IT.",
};

export const allProjects: Project[] = [
    {
        number: "01",
        title: "TASKFLOW",
        description:
            "A productivity app to manage tasks, projects and team collaboration efficiently.",
        category: "WEB APPLICATION",
        categoryId: "web-application",
        preview: "taskflow",
    },
    {
        number: "02",
        title: "SKYWARD AGENCY",
        description:
            "A modern landing page for a creative digital agency with a focus on storytelling.",
        category: "LANDING PAGE",
        categoryId: "landing-page",
        preview: "skyward",
    },
    {
        number: "03",
        title: "TIMEPIECE",
        description:
            "An e-commerce platform for premium watches with a smooth shopping experience.",
        category: "E-COMMERCE",
        categoryId: "e-commerce",
        preview: "timepiece",
    },
    {
        number: "04",
        title: "DEVPORTFOLIO",
        description:
            "A minimal portfolio template for developers to showcase their work and skills.",
        category: "WEB APPLICATION",
        categoryId: "web-application",
        preview: "devportfolio",
    },
    {
        number: "05",
        title: "NESTHABITAT",
        description:
            "A real estate platform to browse properties, schedule visits and connect with agents.",
        category: "WEB APPLICATION",
        categoryId: "web-application",
        preview: "nesthabitat",
    },
    {
        number: "06",
        title: "FINTRACK",
        description:
            "A personal finance dashboard to track expenses, budgets and financial goals.",
        category: "WEB APPLICATION",
        categoryId: "web-application",
        preview: "fintrack",
    },
];

export const featuredProjects = allProjects.slice(0, 3);

export function filterProjects(
    projects: Project[],
    filterId: ProjectFilterId,
): Project[] {
    if (filterId === "all") return projects;

    const map: Record<Exclude<ProjectFilterId, "all">, ProjectCategory> = {
        "web-applications": "web-application",
        "landing-pages": "landing-page",
        "e-commerce": "e-commerce",
        "ui-ux": "ui-ux",
    };

    return projects.filter((p) => p.categoryId === map[filterId]);
}
