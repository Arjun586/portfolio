import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
        <article className="flex bg-background">
            <div className="relative w-[118px] shrink-0 sm:w-[128px] xl:w-[138px]">
                <span className="absolute top-0 left-0 z-10 border border-border-strong bg-secondary px-2 py-1 font-heading text-caption leading-none">
                    {project.number}
                </span>
                <div className="h-full min-h-[132px] xl:min-h-[148px]">
                    <ProjectPreview variant={project.preview} />
                </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col py-4 pl-4 pr-4 xl:py-6 xl:pl-6 xl:pr-6">
                <h3 className="font-heading text-subheading leading-none tracking-wide xl:text-card-title">
                    {project.title}
                </h3>

                <span className="mt-2 font-heading text-caption tracking-wide text-accent">
                    {project.category}
                </span>

                <p className="mt-4 text-body leading-relaxed">
                    {project.description}
                </p>

                <a
                    href={project.url ?? "#"}
                    className="link-arrow mt-auto pt-4"
                >
                    VIEW PROJECT →
                </a>
            </div>
        </article>
    );
}

export function ProjectsContent() {
    const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
    const filtered = filterProjects(allProjects, activeFilter);

    const rows: Project[][] = [];
    for (let i = 0; i < filtered.length; i += 3) {
        rows.push(filtered.slice(i, i + 3));
    }

    return (
        <>
            <div className="flex flex-col gap-4 border-b border-border-strong px-6 py-4 lg:flex-row lg:items-center lg:justify-between xl:px-8 xl:py-6">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-heading text-caption tracking-wide xl:text-small">
                    {projectFilters.map((filter, index) => (
                        <span key={filter.id} className="flex items-center gap-2">
                            {index > 0 && (
                                <span className="text-text/40">|</span>
                            )}
                            <button
                                type="button"
                                onClick={() => setActiveFilter(filter.id)}
                                className={`transition-opacity hover:opacity-70 ${
                                    activeFilter === filter.id
                                        ? "text-accent"
                                        : "text-text"
                                }`}
                            >
                                {filter.label}
                            </button>
                        </span>
                    ))}
                </div>

                <button
                    type="button"
                    className="flex items-center gap-2 font-heading text-caption tracking-wide xl:text-small"
                >
                    SORT BY: LATEST
                    <ChevronDown size={14} />
                </button>
            </div>

            <div className="border-b border-border-strong">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ${
                            rowIndex < rows.length - 1
                                ? "border-b border-border-strong"
                                : ""
                        }`}
                    >
                        {row.map((project, colIndex) => (
                            <div
                                key={project.title}
                                className={
                                    colIndex < row.length - 1
                                        ? "border-border-strong lg:border-r xl:border-r"
                                        : ""
                                }
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
