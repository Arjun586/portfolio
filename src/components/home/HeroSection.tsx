import { MapPin } from "lucide-react";
import portraitImg from "../../assets/myImage.png";
import { heroBio, heroQuote } from "../../data/home";
import { CraftStamp } from "./CraftStamp";

export function HeroSection() {
    return (
        <section id="home" className="relative grid grid-cols-1 border-b border-border lg:grid-cols-[1.15fr_auto_1fr]">
            <CraftStamp />

            <div className="flex flex-col justify-center px-6 py-8 xl:px-10 xl:py-10">
                <span className="font-body text-base text-accent italic xl:text-lg">
                    HELLO, I&apos;M
                </span>

                <h1
    className="font-heading leading-[0.9] tracking-tight"
    style={{ fontSize: "var(--text-display)" }}
>
                    ARJUN
                </h1>

                <h2
    className="font-heading mt-2 tracking-wide uppercase"
    style={{ fontSize: "var(--text-subheading)" }}
>
                    FULL STACK DEVELOPER
                </h2>

                <div className="mt-3 h-px w-full bg-text" />

                <p
    className="mt-4 max-w-md leading-relaxed"
    style={{ fontSize: "var(--text-body)" }}
>
                    {heroBio}
                </p>

                <button className="mt-6 inline-flex w-fit items-center gap-2 bg-accent px-7 py-3 font-heading text-base tracking-wide text-background transition-opacity hover:opacity-90 xl:mt-8">
                    VIEW MY WORK
                    <span>→</span>
                </button>
            </div>

            <div className="flex items-start justify-center px-4 py-6 xl:px-6 xl:py-8">
                <div className="relative pr-5 pb-5 pt-1 xl:pr-6 xl:pb-6">
                    <div
                        className="absolute left-4 top-5 aspect-[3/4] w-[240px] bg-secondary xl:left-5 xl:top-6 xl:w-[280px]"
                        aria-hidden
                    />
                    <div className="relative z-10 aspect-[3/4] w-[240px] border border-text xl:w-[280px]">
                        <img
                            src={portraitImg}
                            alt="ARJUN"
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
                    {heroQuote}
                </p>

                <p className="mt-6 font-body text-3xl text-accent italic xl:mt-8 xl:text-4xl">
                    ARJUN
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
