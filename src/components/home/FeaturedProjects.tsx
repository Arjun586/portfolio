import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function FeaturedProjects() {
    return (
        <section id="projects" className="flex flex-col px-6 py-5 xl:px-8 xl:py-6">
            <div className="flex items-end justify-between gap-4 border-b border-text pb-3">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    FEATURED PROJECTS
                </h2>
                <Link
                    to="/projects"
                    className="link-arrow shrink-0 pb-0.5 text-sm xl:text-base"
                >
                    VIEW ALL PROJECTS →
                </Link>
            </div>

            <div className="mt-4 grid flex-1 grid-cols-3 gap-4 xl:mt-5 xl:gap-5">
                {featuredProjects.map((project) => (
                    <article key={project.title} className="flex min-w-0 flex-col">
                        <div className="relative h-[150px] xl:h-[175px]">
                            <span className="absolute -top-px -left-px z-10 border border-text bg-secondary px-2 py-0.5 font-heading text-sm leading-none xl:text-base">
                                {project.number}
                            </span>
                            <ProjectPreview variant={project.preview} />
                        </div>

                        <h3 className="font-heading mt-2.5 text-lg leading-none tracking-wide xl:mt-3 xl:text-xl">
                            {project.title}
                        </h3>

                        <p className="mt-1.5 text-xs leading-snug xl:text-sm">
                            {project.description}
                        </p>

                        <span className="mt-auto pt-2 font-body text-sm text-accent italic xl:text-base">
                            {project.category}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
