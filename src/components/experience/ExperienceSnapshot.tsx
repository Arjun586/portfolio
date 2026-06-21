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
        <section className="border-b border-border-default">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border-default">
                {experienceSnapshot.map((stat, index) => {
                    const Icon = snapshotIcons[stat.icon];
                    return (
                        <div
                            key={stat.label}
                            className={[
                                "flex items-center gap-4 pad-section",
                                index % 2 === 0 ? "border-r border-border-default lg:border-r-0" : "",
                                index < 2 ? "border-b border-border-default lg:border-b-0" : "",
                            ].join(" ")}
                        >
                            <div className="icon-box shrink-0">
                                <Icon size={18} className="text-accent" />
                            </div>
                            <div>
                                <p className="font-heading text-card-title leading-none xl:text-section">
                                    {stat.value}
                                </p>
                                <p className="mt-1 font-heading text-caption tracking-wide text-text/60">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}