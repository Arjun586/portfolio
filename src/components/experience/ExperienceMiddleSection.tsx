import type { ReactNode } from "react";
import { Cloud, Shield } from "lucide-react";
import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {
    highlights,
    professionalJourney,
    techStackGroups,
} from "../../data/experience";

type TechIconKey =
    (typeof techStackGroups)[number]["items"][number]["icon"];

function TechIcon({ type }: { type: TechIconKey }) {
    const className = "text-text";
    const size = 22;

    const icons: Record<TechIconKey, ReactNode> = {
        react: <SiReact size={size} className={className} />,
        nextjs: <SiNextdotjs size={size} className={className} />,
        tailwind: <SiTailwindcss size={size} className={className} />,
        javascript: <SiJavascript size={size} className={className} />,
        typescript: <SiTypescript size={size} className={className} />,
        nodejs: <SiNodedotjs size={size} className={className} />,
        express: <SiExpress size={size} className={className} />,
        api: <Cloud size={20} className={className} />,
        jwt: <Shield size={20} className={className} />,
        mongodb: <SiMongodb size={size} className={className} />,
        postgresql: <SiPostgresql size={size} className={className} />,
        prisma: <SiPrisma size={size} className={className} />,
    };

    return icons[type];
}

export function ExperienceMiddleSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-3 lg:divide-x lg:divide-border-default">
            <div className="pad-section xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    PROFESSIONAL JOURNEY
                </h2>

                <div className="relative mt-6 space-y-6 pl-6">
                    <div className="absolute top-1 bottom-1 left-0 w-px bg-border-strong" />

                    {professionalJourney.map((item) => (
                        <div key={item.period} className="relative">
                            <div className="absolute top-2 -left-6 h-2 w-2 bg-border-strong" />
                            <p className="font-heading text-caption tracking-wide text-accent">
                                {item.period}
                            </p>
                            <h3 className="font-heading mt-2 text-subheading tracking-wide">
                                {item.role}
                            </h3>
                            <p className="mt-2 text-body leading-relaxed">
                                {item.skills}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    TECH STACK IN PRACTICE
                </h2>

                <div className="mt-6 space-y-6">
                    {techStackGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="font-heading text-subheading tracking-wide text-accent">
                                {group.title}
                            </h3>
                            <div
                                className={`mt-4 grid gap-4 ${
                                    group.items.length === 5
                                        ? "grid-cols-3 xl:grid-cols-5"
                                        : group.items.length === 4
                                          ? "grid-cols-2 xl:grid-cols-4"
                                          : "grid-cols-3"
                                }`}
                            >
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="skill-card"
                                    >
                                        <TechIcon type={item.icon} />
                                        <span className="font-body text-center text-caption font-bold leading-tight">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    HIGHLIGHTS
                </h2>

                <div className="mt-6 space-y-4">
                    {highlights.map((item) => (
                        <div key={item.number} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-secondary/50 font-heading text-small text-accent">
                                {item.number}
                            </span>
                            <p className="pt-1 text-body leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
