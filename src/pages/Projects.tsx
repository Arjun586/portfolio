import { MobileHeader } from "../components/ui/MobileHeader";
import { FooterSection } from "../components/home/FooterSection";
import { ProjectsContent } from "../components/projects/ProjectsContent";
import { ProjectsHero } from "../components/projects/ProjectsHero";

export default function Projects() {
    return (
        <>
            <MobileHeader />

            <ProjectsHero />
            <ProjectsContent />
            <FooterSection />
        </>
    );
}
