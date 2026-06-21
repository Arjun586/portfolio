import { Link } from "react-router-dom";
import { aboutText } from "../../data/home";
import portraitImg from "../../assets/myImage.png";

export function AboutSection() {
    return (
        <section id="about" className="flex flex-col pad-section xl:pad-section-lg">
            <h2 className="font-heading text-section tracking-wide">
                ABOUT ME
            </h2>

            <div className="mt-6 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-border-subtle">
                    <img
                        src={portraitImg}
                        alt="Arjun at work"
                        className="h-full w-full object-cover object-top grayscale"
                    />
                </div>

                <p className="text-body leading-relaxed">
                    {aboutText}
                </p>
            </div>

            <Link to="/about" className="link-arrow mt-6">
                MORE ABOUT ME →
            </Link>
        </section>
    );
}