import { skillsHero } from "../../data/skillsPage";
import { PortraitImage } from "../ui/PortraitImage";

export function SkillsHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[1.15fr_auto_1fr]">
            

            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {skillsHero.label}
                </span>
                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    {skillsHero.title}
                </h1>
                <h2 className="font-heading mt-4 text-subheading tracking-wide uppercase">
                    {skillsHero.subtitle}
                </h2>
                <div className="divider-strong mt-4 max-w-xs" />
                <p className="mt-4 max-w-md text-body leading-relaxed">
                    {skillsHero.description}
                </p>
            </div>

            <PortraitImage />
        </section>
    );
}