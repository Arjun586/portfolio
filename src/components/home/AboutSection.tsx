import { Link } from "react-router-dom";
import { aboutText } from "../../data/home";

export function AboutSection() {
    return (
        <section id="about" className="flex flex-col pad-section xl:pad-section-lg">
            <h2 className="font-heading text-section tracking-wide">
                ABOUT ME
            </h2>

            <p className="mt-6 text-body leading-relaxed">
                {aboutText}
            </p>

            <Link to="/about" className="link-arrow mt-6">
                MORE ABOUT ME →
            </Link>
        </section>
    );
}
