import { projectsHero } from "../../data/projects";
import { CraftStamp } from "../home/CraftStamp";

export function ProjectsHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[1.15fr_1fr]">
            <CraftStamp style={{ left: "42%", top: "68%" }} />

            {/* Left: title + description */}
            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {projectsHero.label}
                </span>
                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    {projectsHero.title}
                </h1>
                <div className="divider-strong mt-4 max-w-xs" />
                <p className="mt-4 max-w-lg text-body leading-relaxed">
                    {projectsHero.subtitle}
                </p>
            </div>

            {/* Right: quote */}
            <div className="hidden flex-col justify-center border-l border-border-default pad-hero xl:pad-hero-lg lg:flex">
                <div className="font-heading text-display leading-none text-accent">&ldquo;</div>
                <p className="font-heading mt-4 max-w-sm text-card-title leading-snug tracking-wide">
                    {projectsHero.quote}
                </p>
                <p className="mt-6 font-body text-card-title text-accent italic xl:mt-8">Arjun</p>
            </div>
        </section>
    );
}