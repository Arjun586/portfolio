import { csFoundations, skillCategories, type SkillCategory, type SkillEmphasis, type SkillItem } from "../../data/skillsPage";
import { SkillIcon } from "../ui/SkillIcon";
import { SiLeetcode } from "react-icons/si";

const emphasisStyles: Record<
    SkillEmphasis,
    { heading: string; grid: string; iconSize: number }
> = {
    primary: {
        heading: "font-heading text-section tracking-wide",
        grid: "mt-6 grid min-w-0 grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4",
        iconSize: 22,
    },
    secondary: {
        heading: "font-heading text-card-title tracking-wide xl:text-section",
        grid: "mt-5 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
        iconSize: 22,
    },
    tertiary: {
        heading: "font-heading text-card-title tracking-wide xl:text-section",
        grid: "mt-5 grid min-w-0 grid-cols-2 gap-3",
        iconSize: 20,
    },
};

function SectionHeading({
    title,
    className,
}: {
    title: string;
    className: string;
}) {
    return (
        <div className="w-fit">
            <h2 className={className}>{title}</h2>
            <div className="divider-strong mt-3" />
        </div>
    );
}

function SkillCard({ name, icon, iconSize }: SkillItem & { iconSize: number }) {
    return (
        <div className="skill-card">
            <SkillIcon type={icon} size={iconSize} />
            <span className="font-body text-center text-caption font-bold leading-tight">
                {name}
            </span>
        </div>
    );
}

function SkillCategoryBlock({ category }: { category: SkillCategory }) {
    const styles = emphasisStyles[category.emphasis];

    return (
        <div className="min-w-0 pad-section xl:pad-section-lg">
            <SectionHeading title={category.title} className={styles.heading} />
            <div className={styles.grid}>
                {category.skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} iconSize={styles.iconSize} />
                ))}
            </div>
        </div>
    );
}

function SkillCategoryRow({
    categories,
    bordered = true,
}: {
    categories: readonly SkillCategory[];
    bordered?: boolean;
}) {
    return (
        <div
            className={[
                "grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-border-default",
                bordered ? "border-b border-border-default" : "",
            ].join(" ")}
        >
            {categories.map((category, index) => (
                <div
                    key={category.id}
                    className={index > 0 ? "border-t border-border-default lg:border-t-0" : ""}
                >
                    <SkillCategoryBlock category={category} />
                </div>
            ))}
        </div>
    );
}

function CSFoundationsSection() {
    return (
        <div className="min-w-0 pad-section xl:pad-section-lg">
            <SectionHeading
                title="COMPUTER SCIENCE FOUNDATIONS"
                className="font-heading text-card-title tracking-wide text-accent xl:text-section"
            />
            <p className="mt-4 max-w-2xl text-body leading-relaxed">
                Core concepts that shape how I approach problem solving, system design, and
                software engineering decisions.
            </p>
            <ul className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
                {csFoundations.map((item, index) => (
                    <li key={item.label} className="flex items-center gap-6 py-5">
                        <span className="font-heading text-caption tabular-nums text-accent">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                            <span className="font-heading text-subheading tracking-wide">
                                {item.label}
                            </span>
                            {"link" in item && item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LeetCode profile"
                                    className="shrink-0 transition-opacity hover:opacity-70"
                                >
                                    <SiLeetcode size={18} className="text-text" />
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function SkillsGridSection() {
    return (
        <section className="max-w-full border-b border-border-default">
            <SkillCategoryRow categories={skillCategories.primary} />
            <SkillCategoryRow categories={skillCategories.secondary} />
            <SkillCategoryRow categories={skillCategories.tertiary} bordered={false} />
            <CSFoundationsSection />
        </section>
    );
}
