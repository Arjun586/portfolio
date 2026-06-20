import { Link } from "react-router-dom";
import { FooterSection } from "../components/home/FooterSection";
import { ProjectsContent } from "../components/projects/ProjectsContent";
import { ProjectsHero } from "../components/projects/ProjectsHero";

export default function Projects() {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-section leading-none">
                    ARJUN
                </Link>
            </div>

            <ProjectsHero />
            <ProjectsContent />
            <FooterSection />
        </>
    );
}
