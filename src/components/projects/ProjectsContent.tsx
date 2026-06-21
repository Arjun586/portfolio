import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
    allProjects,
    filterProjects,
    projectFilters,
    type Project,
    type ProjectFilterId,
} from "../../data/projects";
import { ProjectPreview } from "../home/ProjectPreview";

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="flex flex-col">
            {/* Preview thumbnail */}
            <div className="relative h-[200px] xl:h-[220px] w-full overflow-hidden">
                <span className="absolute top-0 left-0 z-10 border border-border-strong bg-secondary px-2 py-1 font-heading text-caption leading-none">
                    {project.number}
                </span>
                <ProjectPreview variant={project.preview} className="h-full w-full" />
            </div>

            {/* Text content */}
            <div className="flex flex-1 flex-col pt-4 pb-2">
                <h3 className="font-heading text-subheading leading-none tracking-wide xl:text-card-title">
                    {project.title}
                </h3>
                <span className="mt-1 font-heading text-caption tracking-wide text-accent">
                    {project.category}
                </span>
                <p className="mt-3 text-small leading-relaxed">
                    {project.description}
                </p>
                <a
                    href={project.url ?? "#"}
                    className="link-arrow mt-auto pt-4 flex items-center gap-2"
                >
                    VIEW PROJECT <ArrowRight size={13} />
                </a>
            </div>
        </article>
    );
}

export function ProjectsContent() {
    const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
    const filtered = filterProjects(allProjects, activeFilter);

    return (
        <section className="border-b border-border-default">
            {/* Filter bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-default px-6 py-4 xl:px-8">
                <div className="flex flex-wrap items-center">
                    {projectFilters.map((f, i) => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className={[
                                "font-heading text-caption tracking-wide transition-opacity xl:text-small",
                                "py-1",
                                i > 0 ? "ml-4 pl-4 border-l border-border-default" : "",
                                activeFilter === f.id
                                    ? "text-text"
                                    : "opacity-40 hover:opacity-70",
                            ].join(" ")}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, idx) => (
                    <div
                        key={project.title}
                        className={[
                            "pad-section xl:pad-section-lg",
                            // vertical divider between columns
                            idx % 3 !== 2 ? "lg:border-r lg:border-border-default" : "",
                            // horizontal divider for second row
                            idx >= 3 ? "lg:border-t lg:border-border-default" : "",
                            // sm 2-col dividers
                            idx % 2 === 0 ? "sm:border-r sm:border-border-default" : "",
                            idx >= 2 ? "sm:border-t sm:border-border-default" : "",
                            // override sm right border on last column in lg
                            idx % 3 === 2 ? "lg:border-r-0" : "",
                            // remove incorrect sm top borders in lg
                            idx < 3 ? "lg:border-t-0" : "",
                        ].join(" ")}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
}