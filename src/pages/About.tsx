import { Link } from "react-router-dom";
import { AboutMiddleSection } from "../components/about/AboutMiddleSection";
import { FooterSection } from "../components/home/FooterSection";
import { HeroSection } from "../components/home/HeroSection";

export default function About() {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-3xl leading-none">
                    ARJUN
                </Link>
            </div>

            <HeroSection />
            <AboutMiddleSection />
            <FooterSection />
        </>
    );
}
