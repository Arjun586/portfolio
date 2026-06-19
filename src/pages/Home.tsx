import { Link } from "react-router-dom";
import { AboutSection } from "../components/home/AboutSection";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { FooterSection } from "../components/home/FooterSection";
import { HeroSection } from "../components/home/HeroSection";
import { SkillsSection } from "../components/home/SkillsSection";

export default function Home() {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-3xl leading-none">
                    ARJUN
                </Link>
            </div>

            <HeroSection />

            <section className="grid grid-cols-1 border-b border-border lg:grid-cols-[1fr_2fr_1fr] lg:divide-x lg:divide-border">
                <AboutSection />
                <FeaturedProjects />
                <SkillsSection />
            </section>

            <FooterSection />
        </>
    );
}
