import { MobileHeader } from "../components/ui/MobileHeader";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactMainSection } from "../components/contact/ContactMainSection";

export default function Contact() {
    return (
        <>
            <MobileHeader />

            <ContactHero />
            <ContactMainSection />
        </>
    );
}
