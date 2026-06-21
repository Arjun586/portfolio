import type { ReactNode } from "react";
import { Cloud, Code2, Database, Shield, Wrench } from "lucide-react";
import {
    SiCss, SiExpress, SiGraphql, SiHtml5, SiJavascript,
    SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql,
    SiPrisma, SiReact, SiRedux, SiSass, SiSocketdotio,
    SiTailwindcss, SiTypescript,
} from "react-icons/si";
import type { SkillIconKey } from "../../data/skillsPage";
import { backendSkills, databaseSkills, frontendSkills, toolsLeft, toolsRight } from "../../data/skillsPage";

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

function SkillCard({ name, icon }: { name: string; icon: SkillIconKey }) {
    return (
        <div className="skill-card">
            <SkillIcon type={icon} />
            <span className="font-body text-center text-caption font-bold leading-tight">{name}</span>
        </div>
    );
}

function ToolsList({ items }: { items: readonly string[] }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item} className="border-b border-dashed border-border-subtle py-4 font-heading text-small tracking-wide last:border-b-0">
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function SkillsGridSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-3 lg:divide-x lg:divide-border-default">
            <div className="pad-section xl:pad-section-lg">
                <div className="flex items-center gap-4">
                    <Code2 size={18} className="text-accent" />
                    <h2 className="font-heading text-section tracking-wide">FRONTEND</h2>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                    {frontendSkills.map((s) => <SkillCard key={s.name} name={s.name} icon={s.icon} />)}
                </div>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <div className="flex items-center gap-4">
                    <Database size={18} className="text-accent" />
                    <h2 className="font-heading text-section tracking-wide">BACKEND</h2>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                    {backendSkills.map((s) => <SkillCard key={s.name} name={s.name} icon={s.icon} />)}
                </div>
                <div className="mt-8 flex items-center gap-4">
                    <Database size={16} className="text-accent" />
                    <h3 className="font-heading text-subheading tracking-wide text-accent">DATABASE</h3>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {databaseSkills.map((s) => <SkillCard key={s.name} name={s.name} icon={s.icon} />)}
                </div>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <div className="flex items-center gap-4">
                    <Wrench size={18} className="text-accent" />
                    <h2 className="font-heading text-section tracking-wide">TOOLS &amp; OTHERS</h2>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8">
                    <ToolsList items={toolsLeft} />
                    <ToolsList items={toolsRight} />
                </div>
            </div>
        </section>
    );
}