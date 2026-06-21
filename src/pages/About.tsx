import { MobileHeader } from "../components/ui/MobileHeader";
import { AboutHero } from "../components/about/AboutHero";
import { AboutMiddleSection } from "../components/about/AboutMiddleSection";

export default function About() {
    return (
        <>
            <MobileHeader />
            <AboutHero />
            <AboutMiddleSection />
        </>
    );
}