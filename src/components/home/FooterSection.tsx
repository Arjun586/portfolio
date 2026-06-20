import { Mail, MapPin } from "lucide-react";
import { contact, footerCta, footerQuote } from "../../data/home";
import { Button } from "../ui/Button";

function BuildingSketch() {
    return (
        <svg
            viewBox="0 0 120 160"
            className="h-24 w-auto shrink-0 opacity-20 xl:h-[6.75rem]"
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

type FooterQuote = {
    text: string;
    author: string;
};

type FooterSectionProps = {
    quote?: FooterQuote;
};

export function FooterSection({ quote }: FooterSectionProps = {}) {
    const displayQuote = quote ?? footerQuote;
    return (
        <section className="grid grid-cols-1 divide-y divide-border-default lg:grid-cols-[1fr_1.5fr_1fr] lg:divide-x lg:divide-y-0">
            <div className="flex items-center gap-4 pad-section xl:pad-section-lg">
                <BuildingSketch />
                <div>
                    <p className="font-heading text-card-title leading-tight tracking-wide">
                        {displayQuote.text}
                    </p>
                    <p className="mt-2 text-small italic">
                        — {displayQuote.author}
                    </p>
                </div>
            </div>

            <div
                id="experience"
                className="flex flex-col justify-center pad-section xl:pad-section-lg"
            >
                <h2 className="font-heading text-subheading tracking-wide xl:text-card-title">
                    {footerCta.title}
                </h2>
                <p className="mt-4 max-w-lg text-body leading-relaxed">
                    {footerCta.description}
                </p>
                <Button className="mt-6">GET IN TOUCH</Button>
            </div>

            <div
                id="contact"
                className="flex flex-col justify-center gap-4 pad-section font-heading text-small tracking-wide xl:pad-section-lg xl:text-body"
            >
                <div className="flex items-center gap-4">
                    <Mail size={16} className="shrink-0" />
                    <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin size={16} className="shrink-0" />
                    <span>{contact.location}</span>
                </div>
            </div>
        </section>
    );
}
