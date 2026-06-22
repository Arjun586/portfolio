import { csFoundations, skillCategories, type SkillCategory, type SkillEmphasis, type SkillItem } from "../../data/skillsPage";
import { SkillIcon } from "../ui/SkillIcon";

const emphasisStyles: Record<
    SkillEmphasis,
    { heading: string; divider: string; grid: string; iconSize: number }
> = {
    primary: {
        heading: "font-heading text-section tracking-wide",
        divider: "divider-strong mt-3 max-w-xs",
        grid: "mt-6 grid min-w-0 grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4",
        iconSize: 22,
    },
    secondary: {
        heading: "font-heading text-card-title tracking-wide xl:text-section",
        divider: "divider-strong mt-3 max-w-[140px]",
        grid: "mt-5 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
        iconSize: 22,
    },
    tertiary: {
        heading: "font-heading text-subheading tracking-wide text-accent xl:text-card-title",
        divider: "divider-strong mt-3 max-w-[120px]",
        grid: "mt-5 grid min-w-0 grid-cols-2 gap-3",
        iconSize: 20,
    },
};

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
            <h2 className={styles.heading}>{category.title}</h2>
            <div className={styles.divider} />
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
            <h2 className="font-heading text-subheading tracking-wide text-accent xl:text-card-title">
                COMPUTER SCIENCE FOUNDATIONS
            </h2>
            <div className="divider-strong mt-3 max-w-[120px]" />
            <p className="mt-4 max-w-2xl text-body leading-relaxed">
                Core concepts that shape how I approach problem solving, system design, and
                software engineering decisions.
            </p>
            <ul className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
                {csFoundations.map((item, index) => (
                    <li key={item} className="flex items-baseline gap-6 py-5">
                        <span className="font-heading text-caption tabular-nums text-accent">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-subheading tracking-wide">{item}</span>
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
