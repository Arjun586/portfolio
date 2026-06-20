import { MobileHeader } from "../components/ui/MobileHeader";
import { AboutMiddleSection } from "../components/about/AboutMiddleSection";
import { FooterSection } from "../components/home/FooterSection";
import { HeroSection } from "../components/home/HeroSection";

export default function About() {
    return (
        <>
            <MobileHeader />

            <HeroSection />
            <AboutMiddleSection />
            <FooterSection />
        </>
    );
}
