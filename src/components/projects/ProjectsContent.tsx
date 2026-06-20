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
                <span className="absolute top-0 left-0 z-10 border border-text bg-secondary px-1.5 py-0.5 font-heading text-xs leading-none xl:text-sm">
                    {project.number}
                </span>
                <div className="h-full min-h-[132px] xl:min-h-[148px]">
                    <ProjectPreview variant={project.preview} />
                </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col py-3 pl-3 pr-4 xl:py-4 xl:pl-4 xl:pr-5">
                <h3 className="font-heading text-base leading-none tracking-wide xl:text-lg">
                    {project.title}
                </h3>

                <span className="mt-1 font-heading text-[0.65rem] tracking-wide text-accent xl:text-xs">
                    {project.category}
                </span>

                <p className="mt-1.5 text-[0.7rem] leading-snug xl:text-xs">
                    {project.description}
                </p>

                <a
                    href={project.url ?? "#"}
                    className="link-arrow mt-auto pt-2 text-[0.65rem] xl:text-xs"
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
            <div className="flex flex-col gap-3 border-b border-text px-6 py-3 lg:flex-row lg:items-center lg:justify-between xl:px-8 xl:py-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-heading text-xs tracking-wide xl:text-sm">
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
                    className="flex items-center gap-1.5 font-heading text-xs tracking-wide xl:text-sm"
                >
                    SORT BY: LATEST
                    <ChevronDown size={14} />
                </button>
            </div>

            <div className="border-b border-text">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ${
                            rowIndex < rows.length - 1
                                ? "border-b border-text"
                                : ""
                        }`}
                    >
                        {row.map((project, colIndex) => (
                            <div
                                key={project.title}
                                className={
                                    colIndex < row.length - 1
                                        ? "border-text lg:border-r xl:border-r"
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
