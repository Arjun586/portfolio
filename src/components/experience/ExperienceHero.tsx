import { experienceHero } from "../../data/experience";

export function ExperienceHero() {
    return (
        <section className="relative border-b border-border-default">
            <div className="flex flex-col justify-start pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {experienceHero.label}
                </span>

                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    {experienceHero.title}
                </h1>

                <p className="mt-2 font-heading text-subheading tracking-wide">
                    {experienceHero.roleLine}
                </p>
                <p className="font-heading text-subheading tracking-wide text-accent">
                    {experienceHero.roleLineAccent}
                </p>

                <div className="divider-strong mt-2 max-w-xs" />

                <p className="mt-2 w-full text-body leading-snug">
                    {experienceHero.bio}
                </p>
            </div>
        </section>
    );
}
