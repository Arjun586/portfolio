import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function FeaturedProjects() {
    return (
        <section id="projects" className="flex flex-col pad-section xl:pad-section-lg">
            <div className="flex items-end justify-between gap-4 border-b border-border-strong pb-4">
                <h2 className="font-heading text-section tracking-wide">FEATURED PROJECTS</h2>
                <Link to="/projects" className="link-arrow shrink-0 pb-0.5">
                    VIEW ALL PROJECTS
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 xl:gap-6">
                {featuredProjects.map((project) => (
                    <article key={project.title} className="flex min-w-0 flex-col">
                        <div className="relative h-[150px] xl:h-[175px]">
                            <span className="absolute -top-px -left-px z-10 border border-border-strong bg-secondary px-2 py-1 font-heading text-caption leading-none">
                                {project.number}
                            </span>
                            <ProjectPreview variant={project.preview} />
                        </div>

                        <h3 className="font-heading mt-4 text-subheading leading-none tracking-wide xl:text-card-title">
                            {project.title}
                        </h3>
                        <span className="mt-2 font-heading text-caption tracking-wide text-accent">
                            {project.category}
                        </span>
                        <p className="mt-2 flex-1 text-body leading-relaxed">
                            {project.description}
                        </p>

                        <Link
                            to="/projects"
                            className="link-arrow mt-6 pt-4 border-t border-border-subtle"
                        >
                            VIEW PROJECT
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}