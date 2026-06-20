import { MobileHeader } from "../components/ui/MobileHeader";
import { AboutSection } from "../components/home/AboutSection";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { FooterSection } from "../components/home/FooterSection";
import { HeroSection } from "../components/home/HeroSection";
import { SkillsSection } from "../components/home/SkillsSection";

export default function Home() {
    return (
        <>
            <MobileHeader />

            <HeroSection />

            <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-[1fr_2fr_1fr] lg:divide-x lg:divide-border-default">
                <AboutSection />
                <FeaturedProjects />
                <SkillsSection />
            </section>

            <FooterSection />
        </>
    );
}
