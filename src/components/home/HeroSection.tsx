import { Link } from "react-router-dom";
import { heroBio, heroQuote } from "../../data/home";
import { Button } from "../ui/Button";
import { HeroQuoteColumn } from "../ui/HeroQuoteColumn";
import { PortraitImage } from "../ui/PortraitImage";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative grid min-w-0 grid-cols-1 items-start border-b border-border-default lg:grid-cols-[1.15fr_auto_1fr]"
        >
            <div className="flex min-w-0 flex-col justify-start pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    HELLO, I&apos;M
                </span>

                <h1 className="font-heading text-hero-display leading-[0.85] tracking-tight">
                    Arjun
                </h1>

                <h2 className="font-heading mt-4 text-subheading tracking-widest uppercase">
                    FULL STACK DEVELOPER
                </h2>

                <div className="divider-strong mt-4" />

                <p className="mt-4 max-w-md text-body leading-relaxed">
                    {heroBio}
                </p>

                <Link to="/projects" className="mt-6 inline-block w-fit xl:mt-8">
                    <Button>VIEW MY WORK</Button>
                </Link>
            </div>

            <PortraitImage alt="Arjun" />

            <HeroQuoteColumn quote={heroQuote.text} author={heroQuote.author} />
        </section>
    );
}