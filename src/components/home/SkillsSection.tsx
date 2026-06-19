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
        <section id="skills" className="flex flex-col px-6 py-5 xl:px-8 xl:py-6">
            <h2 className="font-heading text-2xl tracking-wide xl:text-3xl">
                SKILLS
            </h2>

            <div className="mt-5 grid grid-cols-3 gap-3 xl:gap-4">
                {featuredTechStack.map((name) => {
                    const Icon = techIcons[name];

                    return (
                        <div key={name} className="flex flex-col items-center gap-2">
                            <div className="flex h-14 w-full items-center justify-center rounded-md border border-text/70 bg-background/40 xl:h-16">
                                <Icon size={26} className="text-text" />
                            </div>
                            <span className="font-body text-center text-[0.65rem] font-bold leading-tight xl:text-xs">
                                {name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <Link to="/skills" className="link-arrow mt-5 text-sm xl:text-base">
                SEE ALL SKILLS →
            </Link>
        </section>
    );
}
