import { Link } from "react-router-dom";
import { aboutText } from "../../data/home";

export function AboutSection() {
    return (
        <section id="about" className="flex flex-col px-6 py-5 xl:px-8 xl:py-6">
            <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                ABOUT ME
            </h2>

            <p className="mt-5 text-sm leading-relaxed xl:text-base">{aboutText}</p>

            <Link to="/about" className="link-arrow mt-5 text-base">
                MORE ABOUT ME →
            </Link>
        </section>
    );
}
