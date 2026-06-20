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
        <section className="grid grid-cols-1 border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
            <div className="px-6 py-6 xl:px-8 xl:py-8">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    PROFESSIONAL JOURNEY
                </h2>

                <div className="relative mt-6 space-y-6 pl-5">
                    <div className="absolute top-1 bottom-1 left-[5px] w-px bg-text" />

                    {professionalJourney.map((item) => (
                        <div key={item.period} className="relative">
                            <div className="absolute top-1.5 -left-5 h-2.5 w-2.5 rounded-full bg-text" />
                            <p className="font-heading text-xs tracking-wide text-accent xl:text-sm">
                                {item.period}
                            </p>
                            <h3 className="font-heading mt-1 text-base tracking-wide xl:text-lg">
                                {item.role}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed">
                                {item.skills}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    TECH STACK IN PRACTICE
                </h2>

                <div className="mt-6 space-y-6">
                    {techStackGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="font-heading text-sm tracking-wide text-accent xl:text-base">
                                {group.title}
                            </h3>
                            <div
                                className={`mt-3 grid gap-2 xl:gap-2.5 ${
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
                                        className="flex flex-col items-center gap-1.5"
                                    >
                                        <div className="flex h-11 w-full items-center justify-center rounded-sm border border-text/70 bg-background/40 xl:h-12">
                                            <TechIcon type={item.icon} />
                                        </div>
                                        <span className="font-body text-center text-[0.6rem] font-bold leading-tight xl:text-[0.65rem]">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    HIGHLIGHTS
                </h2>

                <div className="mt-6 space-y-4">
                    {highlights.map((item) => (
                        <div key={item.number} className="flex gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-secondary/50 font-heading text-sm text-accent">
                                {item.number}
                            </span>
                            <p className="pt-1 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
