import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import {
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { featuredTechStack } from "../../data/home";

const techIcons: Record<(typeof featuredTechStack)[number], IconType> = {
    "React.js": SiReact,
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    "Node.js": SiNodedotjs,
    MongoDB: SiMongodb,
    "Tailwind CSS": SiTailwindcss,
};

export function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col pad-section xl:pad-section-lg">
            <h2 className="font-heading text-section tracking-wide">
                SKILLS
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-4">
                {featuredTechStack.map((name) => {
                    const Icon = techIcons[name];

                    return (
                        <div key={name} className="skill-card">
                            <Icon size={26} className="text-text" />
                            <span className="font-body text-center text-caption font-bold leading-tight">
                                {name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <Link to="/skills" className="link-arrow mt-6">
                SEE ALL SKILLS →
            </Link>
        </section>
    );
}
