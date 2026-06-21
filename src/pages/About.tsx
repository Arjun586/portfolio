import { MobileHeader } from "../components/ui/MobileHeader";
import { AboutHero } from "../components/about/AboutHero";
import { AboutMiddleSection } from "../components/about/AboutMiddleSection";
import { FooterSection } from "../components/home/FooterSection";
import { aboutFooterQuote } from "../data/about";


export default function About() {
    return (
        <>
            <MobileHeader />
            <AboutHero />
            <AboutMiddleSection />
            <FooterSection quote={aboutFooterQuote} />
        </>
    );
}