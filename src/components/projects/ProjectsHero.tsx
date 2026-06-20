import { projectsHero } from "../../data/projects";
import { CraftStamp } from "../home/CraftStamp";

export function ProjectsHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border lg:grid-cols-[1.15fr_1fr]">
            <CraftStamp style={{ left: "42%", top: "68%" }} />

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {projectsHero.label}
                </span>

                <h1 className="font-heading text-display leading-[0.9] tracking-tight xl:text-display-xl">
                    {projectsHero.title}
                </h1>

                <p className="mt-4 max-w-lg text-body leading-relaxed xl:text-subheading">
                    {projectsHero.subtitle}
                </p>
            </div>

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <div className="font-heading text-display leading-none text-accent xl:text-display-xl">
                    &ldquo;
                </div>

                <p className="font-heading mt-2 max-w-sm text-card-title leading-snug tracking-wide xl:text-section">
                    {projectsHero.quote}
                </p>

                <p className="mt-6 font-body text-card-title text-accent italic xl:mt-8 xl:text-section">
                    Arjun Dev
                </p>
            </div>
        </section>
    );
}
