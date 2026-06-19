import { Mail, MapPin, Phone } from "lucide-react";
import { contact, footerCta, footerQuote } from "../../data/home";

function BuildingSketch() {
    return (
        <svg
            viewBox="0 0 120 160"
            className="h-[96px] w-auto shrink-0 opacity-20 xl:h-[108px]"
            aria-hidden
        >
            <path
                d="M10 150V70L30 55V150M30 55L60 35L90 55M90 55V150M30 70H90M25 150H95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            />
            <path
                d="M38 150V95H52V150M68 150V95H82V150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M48 35L60 28L72 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            />
        </svg>
    );
}

export function FooterSection() {
    return (
        <section className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1fr_1.5fr_1fr] lg:divide-x lg:divide-y-0">
            <div className="flex items-center gap-4 px-6 py-5 xl:px-8 xl:py-6">
                <BuildingSketch />
                <div>
                    <p className="font-heading text-lg leading-tight tracking-wide xl:text-xl">
                        {footerQuote.text}
                    </p>
                    <p className="mt-1 text-sm italic">
                        — {footerQuote.author}
                    </p>
                </div>
            </div>

            <div
                id="experience"
                className="flex flex-col justify-center px-6 py-5 xl:px-8 xl:py-6"
            >
                <h2 className="font-heading text-xl tracking-wide xl:text-2xl">
                    {footerCta.title}
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-snug">
                    {footerCta.description}
                </p>
                <button className="mt-4 inline-flex w-fit items-center gap-2 bg-accent px-6 py-2 font-heading text-sm tracking-wide text-background transition-opacity hover:opacity-90 xl:text-base">
                    GET IN TOUCH
                    <span>→</span>
                </button>
            </div>

            <div
                id="contact"
                className="flex flex-col justify-center gap-3 px-6 py-5 font-heading text-sm tracking-wide xl:px-8 xl:py-6 xl:text-base"
            >
                <div className="flex items-center gap-3">
                    <Mail size={16} className="shrink-0" />
                    <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin size={16} className="shrink-0" />
                    <span>{contact.location}</span>
                </div>
            </div>
        </section>
    );
}
