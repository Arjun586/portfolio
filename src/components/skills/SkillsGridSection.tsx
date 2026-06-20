import type { ReactNode } from "react";
import { Cloud, Code2, Database, Shield, Wrench } from "lucide-react";
import {
    SiCss,
    SiExpress,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedux,
    SiSass,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import type { SkillIconKey } from "../../data/skillsPage";
import {
    backendSkills,
    databaseSkills,
    frontendSkills,
    toolsLeft,
    toolsRight,
} from "../../data/skillsPage";

function SkillIcon({ type }: { type: SkillIconKey }) {
    const className = "text-text";
    const size = 22;

    const icons: Record<SkillIconKey, ReactNode> = {
        html5: <SiHtml5 size={size} className={className} />,
        css3: <SiCss size={size} className={className} />,
        javascript: <SiJavascript size={size} className={className} />,
        typescript: <SiTypescript size={size} className={className} />,
        react: <SiReact size={size} className={className} />,
        nextjs: <SiNextdotjs size={size} className={className} />,
        tailwind: <SiTailwindcss size={size} className={className} />,
        redux: <SiRedux size={size} className={className} />,
        sass: <SiSass size={size} className={className} />,
        nodejs: <SiNodedotjs size={size} className={className} />,
        express: <SiExpress size={size} className={className} />,
        api: <Cloud size={20} className={className} />,
        jwt: <Shield size={20} className={className} />,
        graphql: <SiGraphql size={size} className={className} />,
        socketio: <SiSocketdotio size={size} className={className} />,
        mongodb: <SiMongodb size={size} className={className} />,
        postgresql: <SiPostgresql size={size} className={className} />,
        prisma: <SiPrisma size={size} className={className} />,
        mysql: <SiMysql size={size} className={className} />,
    };

    return icons[type];
}

function SkillCard({
    name,
    icon,
}: {
    name: string;
    icon: SkillIconKey;
}) {
    return (
        <div className="flex flex-col items-center gap-1.5 border border-text/25 bg-background/50 px-1 py-2.5">
            <SkillIcon type={icon} />
            <span className="font-body text-center text-[0.6rem] font-bold leading-tight xl:text-[0.65rem]">
                {name}
            </span>
        </div>
    );
}

function ToolsList({ items }: { items: readonly string[] }) {
    return (
        <ul className="space-y-0">
            {items.map((item) => (
                <li
                    key={item}
                    className="border-b border-dashed border-text/30 py-2.5 font-heading text-xs tracking-wide last:border-b-0 xl:text-sm"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function SkillsGridSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
            <div className="px-6 py-6 xl:px-8 xl:py-8">
                <div className="flex items-center gap-2">
                    <Code2 size={18} className="text-accent" />
                    <h2 className="font-heading text-2xl tracking-wide xl:text-3xl">
                        FRONTEND
                    </h2>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                    {frontendSkills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <div className="flex items-center gap-2">
                    <Database size={18} className="text-accent" />
                    <h2 className="font-heading text-2xl tracking-wide xl:text-3xl">
                        BACKEND
                    </h2>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                    {backendSkills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-2">
                    <Database size={16} className="text-accent" />
                    <h3 className="font-heading text-sm tracking-wide text-accent xl:text-base">
                        DATABASE
                    </h3>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {databaseSkills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <div className="flex items-center gap-2">
                    <Wrench size={18} className="text-accent" />
                    <h2 className="font-heading text-2xl tracking-wide xl:text-3xl">
                        TOOLS & OTHERS
                    </h2>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-6">
                    <ToolsList items={toolsLeft} />
                    <ToolsList items={toolsRight} />
                </div>
            </div>
        </section>
    );
}