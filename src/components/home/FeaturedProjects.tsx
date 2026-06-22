import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { ProjectThumbnail } from "../projects/ProjectThumbnail";

export function FeaturedProjects() {
    return (
        <section id="projects" className="flex min-w-0 flex-col pad-section xl:pad-section-lg">
            <div className="flex items-baseline justify-between gap-4 border-b border-border-strong pb-4">
                <h2 className="font-heading text-section tracking-wide">FEATURED PROJECTS</h2>
                <Link to="/projects" className="link-arrow shrink-0">
                    VIEW ALL PROJECTS
                </Link>
            </div>

            <div className="mt-6 grid min-w-0 grid-cols-3 gap-4 xl:gap-6">
                {featuredProjects.map((project) => (
                    <article key={project.id} className="flex min-w-0 flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden border border-border-subtle">
                            <span className="absolute -top-px -left-px z-10 border border-border-strong bg-secondary px-2 py-1 font-heading text-caption leading-none">
                                {project.number}
                            </span>
                            <ProjectThumbnail
                                src={project.thumbnail}
                                alt={`${project.title} preview`}
                            />
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

                        {(project.githubUrl || project.liveUrl) && (
                            <div className="mt-4 flex flex-wrap gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-arrow inline-flex items-center gap-1.5"
                                    >
                                        <FaGithub size={13} />
                                        GITHUB
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-arrow inline-flex items-center gap-1.5"
                                    >
                                        <ExternalLink size={13} />
                                        DEMO
                                    </a>
                                )}
                            </div>
                        )}

                        <Link
                            to="/projects"
                            className="link-arrow mt-6 border-t border-border-subtle pt-4"
                        >
                            VIEW PROJECT
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
