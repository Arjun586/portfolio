import { Link } from "react-router-dom";
import { aboutHero } from "../../data/about";
import { Button } from "../ui/Button";
import { CraftStamp } from "../home/CraftStamp";
import { HeroQuoteColumn } from "../ui/HeroQuoteColumn";
import { PortraitImage } from "../ui/PortraitImage";

export function AboutHero() {
    return (
        <section className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[1.15fr_auto_1fr]">
            <CraftStamp style={{ left: "38%", top: "65%" }} />

            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    {aboutHero.label}
                </span>

                <h1 className="font-heading text-display-xl leading-[0.85] tracking-tight">
                    {aboutHero.title}
                </h1>

                <h2 className="font-heading mt-4 text-subheading tracking-widest uppercase">
                    {aboutHero.subtitle}
                </h2>

                <div className="divider-strong mt-4" />

                <p className="mt-4 max-w-md text-body leading-relaxed">
                    {aboutHero.bio}
                </p>

                <Link to="/contact">
                    <Button className="mt-6 xl:mt-8">DOWNLOAD RESUME</Button>
                </Link>
            </div>

            <PortraitImage alt="Arjun" />

            <HeroQuoteColumn quote={aboutHero.quote} author="Arjun" />
        </section>
    );
}