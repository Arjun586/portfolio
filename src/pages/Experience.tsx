import { MobileHeader } from "../components/ui/MobileHeader";
import { ExperienceHero } from "../components/experience/ExperienceHero";
import { ExperienceMiddleSection } from "../components/experience/ExperienceMiddleSection";
import { ExperienceSnapshot } from "../components/experience/ExperienceSnapshot";
import { FooterSection } from "../components/home/FooterSection";
import { experienceFooterQuote } from "../data/experience";

export default function Experience() {
    return (
        <>
            <MobileHeader />

            <ExperienceHero />
            <ExperienceMiddleSection />
            <ExperienceSnapshot />
            <FooterSection quote={experienceFooterQuote} />
        </>
    );
}
