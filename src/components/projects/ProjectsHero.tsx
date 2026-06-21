import { projectsHero } from "../../data/projects";

export function ProjectsHero() {
    return (
        <section className="relative border-b border-border-default">
            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {projectsHero.label}
                </span>
                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    {projectsHero.title}
                </h1>
                <div className="divider-strong mt-4 max-w-xs" />
                <p className="mt-4 max-w-2xl text-body leading-relaxed xl:max-w-3xl">
                    {projectsHero.subtitle}
                </p>
                <p className="mt-6 font-heading text-caption tracking-widest text-accent xl:text-small">
                    {projectsHero.metadata}
                </p>
            </div>
        </section>
    );
}
