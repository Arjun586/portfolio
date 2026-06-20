import { experienceHero } from "../../data/experience";
import { HeroQuoteColumn } from "../ui/HeroQuoteColumn";
import { PortraitImage } from "../ui/PortraitImage";

export function ExperienceHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[1.15fr_auto_1fr]">
            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {experienceHero.label}
                </span>

                <h1 className="font-heading text-display leading-[0.9] tracking-tight">
                    {experienceHero.title}
                </h1>

                <p className="mt-4 font-heading text-subheading tracking-wide text-accent">
                    {experienceHero.roleLine}
                </p>

                <p className="mt-4 max-w-md text-body leading-relaxed">
                    {experienceHero.bio}
                </p>
            </div>

            <PortraitImage />

            <HeroQuoteColumn quote={experienceHero.quote} />
        </section>
    );
}
