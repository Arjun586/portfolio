import { Link } from "react-router-dom";
import { ExperienceHero } from "../components/experience/ExperienceHero";
import { ExperienceMiddleSection } from "../components/experience/ExperienceMiddleSection";
import { ExperienceSnapshot } from "../components/experience/ExperienceSnapshot";
import { FooterSection } from "../components/home/FooterSection";
import { experienceFooterQuote } from "../data/experience";

export default function Experience() {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-3xl leading-none">
                    ARJUN
                </Link>
            </div>

            <ExperienceHero />
            <ExperienceMiddleSection />
            <ExperienceSnapshot />
            <FooterSection quote={experienceFooterQuote} />
        </>
    );
}
