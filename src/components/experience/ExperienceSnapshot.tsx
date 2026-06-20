import { Code2, FolderOpen, GraduationCap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { experienceSnapshot } from "../../data/experience";

const snapshotIcons = {
    folder: FolderOpen,
    code: Code2,
    github: FaGithub,
    graduation: GraduationCap,
} as const;

export function ExperienceSnapshot() {
    return (
        <section className="grid grid-cols-2 border-b border-border-default lg:grid-cols-4 lg:divide-x lg:divide-border-default">
            {experienceSnapshot.map((stat, index) => {
                const Icon = snapshotIcons[stat.icon];

                return (
                    <div
                        key={stat.label}
                        className={`flex items-center gap-4 pad-section ${
                            index % 2 === 0
                                ? "border-r border-border-default lg:border-r-0"
                                : ""
                        } ${index < 2 ? "border-b border-border-default lg:border-b-0" : ""}`}
                    >
                        <Icon size={22} className="shrink-0 text-accent" />
                        <div>
                            <p className="font-heading text-card-title leading-none xl:text-section">
                                {stat.value}
                            </p>
                            <p className="mt-2 font-heading text-caption tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
