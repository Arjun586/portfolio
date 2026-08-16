import { MobileHeader } from "../components/ui/MobileHeader";
import { AboutHero } from "../components/about/AboutHero";
import { AboutSection } from "../components/about/AboutSection";
import { OutsideTheCode } from "../components/about/OutsideTheCode";
import { FooterSection } from "../components/home/FooterSection";

export default function About() {
    return (
        <>
            <MobileHeader />
            <AboutHero />
            <AboutSection />
            <OutsideTheCode />
            <FooterSection />
        </>
    );
}