import { MapPin } from "lucide-react";
import portraitImg from "../../assets/myImage.png";
import { skillsHero } from "../../data/skillsPage";
import { CraftStamp } from "../home/CraftStamp";

export function SkillsHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border lg:grid-cols-[1.15fr_auto_1fr]">
            <CraftStamp style={{ left: "38%", top: "65%" }} />

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <span className="font-body text-base text-accent italic xl:text-lg">
                    {skillsHero.label}
                </span>

                <h1 className="font-heading text-[4.5rem] leading-[0.9] tracking-tight xl:text-[6.5rem]">
                    {skillsHero.title}
                </h1>

                <h2 className="font-heading mt-2 text-2xl tracking-wide uppercase xl:text-3xl">
                    {skillsHero.subtitle}
                </h2>

                <p className="mt-4 max-w-md text-base leading-relaxed xl:text-lg">
                    {skillsHero.description}
                </p>
            </div>

            <div className="flex items-start justify-center px-4 py-6 xl:px-6 xl:py-8">
                <div className="relative pr-4 pb-4 pt-1 xl:pr-5 xl:pb-5">
                    <div
                        className="absolute left-3 top-4 h-[200px] w-[200px] bg-secondary xl:left-4 xl:top-5 xl:h-[220px] xl:w-[220px]"
                        aria-hidden
                    />
                    <div className="relative z-10 h-[200px] w-[200px] border border-text xl:h-[220px] xl:w-[220px]">
                        <img
                            src={portraitImg}
                            alt="Arjun Dev"
                            className="h-full w-full object-cover object-top grayscale"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <div className="font-heading text-6xl leading-none text-accent xl:text-8xl">
                    &ldquo;
                </div>

                <p className="font-heading mt-2 max-w-sm text-2xl leading-snug tracking-wide xl:text-3xl">
                    {skillsHero.quote}
                </p>

                <p className="mt-6 font-body text-3xl text-accent italic xl:mt-8 xl:text-4xl">
                    Arjun Dev
                </p>

                <div className="mt-10 xl:mt-12">
                    <div className="mb-3 h-px w-full bg-text" />
                    <div className="flex items-center justify-between font-heading text-base tracking-widest xl:text-lg">
                        <span>BASED IN INDIA</span>
                        <MapPin size={18} />
                    </div>
                </div>
            </div>
        </section>
    );
}
