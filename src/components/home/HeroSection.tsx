import { heroBio, heroQuote } from "../../data/home";
import { Button } from "../ui/Button";
import { HeroQuoteColumn } from "../ui/HeroQuoteColumn";
import { PortraitImage } from "../ui/PortraitImage";
import { CraftStamp } from "./CraftStamp";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative grid grid-cols-1 border-b border-border-default lg:grid-cols-[1.15fr_auto_1fr]"
        >
            <CraftStamp />

            <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
                <span className="font-body text-body text-accent italic xl:text-subheading">
                    HELLO, I&apos;M
                </span>

                <h1 className="font-heading text-display-xl leading-[0.9] tracking-tight">
                    ARJUN
                </h1>

                <h2 className="font-heading mt-4 text-subheading tracking-wide uppercase">
                    FULL STACK DEVELOPER
                </h2>

                <div className="divider-strong mt-4" />

                <p className="mt-4 max-w-md text-body leading-relaxed">
                    {heroBio}
                </p>

                <Button className="mt-6 xl:mt-8">VIEW MY WORK</Button>
            </div>

            <PortraitImage alt="ARJUN" />

            <HeroQuoteColumn quote={heroQuote} author="ARJUN" />
        </section>
    );
}
