import { MobileHeader } from "../components/ui/MobileHeader";
import { FooterSection } from "../components/home/FooterSection";
import { SkillsGridSection } from "../components/skills/SkillsGridSection";
import { SkillsHero } from "../components/skills/SkillsHero";
import { skillsFooterQuote } from "../data/skillsPage";

export default function Skills() {
    return (
        <>
            <MobileHeader />

            <SkillsHero />
            <SkillsGridSection />
            <FooterSection quote={skillsFooterQuote} />
        </>
    );
}
