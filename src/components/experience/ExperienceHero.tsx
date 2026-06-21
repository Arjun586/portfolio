import { experienceHero } from "../../data/experience";
import { PortraitImage } from "../ui/PortraitImage";

export function ExperienceHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {experienceHero.label}
                </span>

                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    {experienceHero.title}
                </h1>

                <p className="mt-4 font-heading text-subheading tracking-wide">
                    {experienceHero.roleLine}
                </p>
                <p className="font-heading text-subheading tracking-wide text-accent">
                    {experienceHero.roleLineAccent}
                </p>

                <div className="divider-strong mt-4 max-w-xs" />

                <p className="mt-4 max-w-xl text-body leading-relaxed">
                    {experienceHero.bio}
                </p>
            </div>

            <PortraitImage className="lg:justify-end xl:pl-0 xl:pr-8" />
        </section>
    );
}