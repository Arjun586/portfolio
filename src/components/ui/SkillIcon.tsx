import type { ReactNode } from "react";
import {
    Braces,
    Cloud,
    Code2,
    KeyRound,
    Shield,
    Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
    SiCss,
    SiDocker,
    SiExpress,
    SiFirebase,
    SiGit,
    SiGithubactions,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiNetlify,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiRailway,
    SiReact,
    SiRedux,
    SiRender,
    SiSocketdotio,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import type { SkillIconKey } from "../../data/skillsPage";

type SkillIconProps = {
    type: SkillIconKey;
    size?: number;
    className?: string;
};

export function SkillIcon({
    type,
    size = 22,
    className = "text-text",
}: SkillIconProps) {
    const icons: Record<SkillIconKey, ReactNode> = {
        html5: <SiHtml5 size={size} className={className} />,
        css3: <SiCss size={size} className={className} />,
        javascript: <SiJavascript size={size} className={className} />,
        typescript: <SiTypescript size={size} className={className} />,
        react: <SiReact size={size} className={className} />,
        nextjs: <SiNextdotjs size={size} className={className} />,
        redux: <SiRedux size={size} className={className} />,
        tailwind: <SiTailwindcss size={size} className={className} />,
        nodejs: <SiNodedotjs size={size} className={className} />,
        express: <SiExpress size={size} className={className} />,
        api: <Braces size={20} className={className} />,
        socketio: <SiSocketdotio size={size} className={className} />,
        jwt: <Shield size={20} className={className} />,
        oauth: <KeyRound size={20} className={className} />,
        rbac: <Users size={20} className={className} />,
        mongodb: <SiMongodb size={size} className={className} />,
        postgresql: <SiPostgresql size={size} className={className} />,
        prisma: <SiPrisma size={size} className={className} />,
        mongoose: <SiMongoose size={size} className={className} />,
        supabase: <SiSupabase size={size} className={className} />,
        git: <SiGit size={size} className={className} />,
        github: <FaGithub size={size} className={className} />,
        docker: <SiDocker size={size} className={className} />,
        githubactions: <SiGithubactions size={size} className={className} />,
        vercel: <SiVercel size={size} className={className} />,
        netlify: <SiNetlify size={size} className={className} />,
        railway: <SiRailway size={size} className={className} />,
        render: <SiRender size={size} className={className} />,
        aws: <Cloud size={20} className={className} />,
        firebase: <SiFirebase size={size} className={className} />,
        vscode: <Code2 size={20} className={className} />,
        postman: <SiPostman size={size} className={className} />,
    };

    return icons[type];
}
