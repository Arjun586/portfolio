import { MobileHeader } from "../components/ui/MobileHeader";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactMainSection } from "../components/contact/ContactMainSection";
import { FooterSection } from "../components/home/FooterSection";
import { contactFooterQuote } from "../data/contactPage";

export default function Contact() {
    return (
        <>
            <MobileHeader />

            <ContactHero />
            <ContactMainSection />
            <FooterSection quote={contactFooterQuote} />
        </>
    );
}
