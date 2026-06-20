import { projectsHero } from "../../data/projects";
import { CraftStamp } from "../home/CraftStamp";

export function ProjectsHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border lg:grid-cols-[1.15fr_1fr]">
            <CraftStamp style={{ left: "42%", top: "68%" }} />

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <span className="font-body text-base text-accent italic xl:text-lg">
                    {projectsHero.label}
                </span>

                <h1 className="font-heading text-[4.5rem] leading-[0.9] tracking-tight xl:text-[6.5rem]">
                    {projectsHero.title}
                </h1>

                <p className="mt-4 max-w-lg text-base leading-relaxed xl:text-lg">
                    {projectsHero.subtitle}
                </p>
            </div>

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <div className="font-heading text-6xl leading-none text-accent xl:text-8xl">
                    &ldquo;
                </div>

                <p className="font-heading mt-2 max-w-sm text-2xl leading-snug tracking-wide xl:text-3xl">
                    {projectsHero.quote}
                </p>

                <p className="mt-6 font-body text-3xl text-accent italic xl:mt-8 xl:text-4xl">
                    Arjun Dev
                </p>
            </div>
        </section>
    );
}
