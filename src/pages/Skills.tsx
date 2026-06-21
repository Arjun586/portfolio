import { MobileHeader } from "../components/ui/MobileHeader";
import { SkillsGridSection } from "../components/skills/SkillsGridSection";
import { SkillsHero } from "../components/skills/SkillsHero";

export default function Skills() {
    return (
        <>
            <MobileHeader />

            <SkillsHero />
            <SkillsGridSection />
        </>
    );
}
