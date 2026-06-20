import { Link } from "react-router-dom";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactMainSection } from "../components/contact/ContactMainSection";
import { FooterSection } from "../components/home/FooterSection";
import { contactFooterQuote } from "../data/contactPage";

export default function Contact() {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-section leading-none">
                    ARJUN
                </Link>
            </div>

            <ContactHero />
            <ContactMainSection />
            <FooterSection quote={contactFooterQuote} />
        </>
    );
}
