import { Link } from "react-router-dom";

const frontend = ["TypeScript", "React.js", "Next.js"];
const backend  = ["Node.js", "Express.js", "Prisma"];
const database = ["MongoDB", "PostgreSQL"];
const tools    = ["Git", "Docker", "AWS"];

function TagList({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {items.map((item) => (
                <span
                    key={item}
                    className="border border-border-default bg-transparent px-3 py-1.5 font-heading text-caption tracking-widest uppercase"
                >
                    {item}
                </span>
            ))}
        </div>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col pad-section xl:pad-section-lg">
            <h2 className="font-heading text-display leading-[0.9] tracking-tight">SKILLS</h2>
            <p className="mt-4 max-w-lg font-heading text-caption tracking-widest text-text/70 uppercase">
                Technologies I work with to build modern, scalable and user-centric solutions.
            </p>

            <div className="mt-10 space-y-8">
                <div>
                    <h3 className="font-heading text-subheading tracking-wide">FRONTEND</h3>
                    <TagList items={frontend} />
                </div>
                <div>
                    <h3 className="font-heading text-subheading tracking-wide">BACKEND</h3>
                    <TagList items={backend} />
                </div>
                <div>
                    <h3 className="font-heading text-subheading tracking-wide">DATABASE</h3>
                    <TagList items={database} />
                </div>
                <div>
                    <h3 className="font-heading text-subheading tracking-wide">TOOLS &amp; DEVOPS</h3>
                    <TagList items={tools} />
                </div>
            </div>

            <Link to="/skills" className="link-arrow mt-8">SEE ALL SKILLS</Link>
        </section>
    );
}