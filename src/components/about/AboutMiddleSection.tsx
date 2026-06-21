import { BookOpen, GraduationCap, Layers, Lightbulb, ScanEye } from "lucide-react";
import {
    approachIntro,
    approachSteps,
    drives,
    journey,
} from "../../data/about";

function DriveIcon({ type }: { type: (typeof drives)[number]["icon"] }) {
    const iconClass = "text-text";
    const size = 20;

    if (type === "layers") return <Layers size={size} className={iconClass} />;
    if (type === "graduation")
        return <GraduationCap size={size} className={iconClass} />;
    if (type === "lightbulb")
        return <Lightbulb size={size} className={iconClass} />;
    if (type === "scan") return <ScanEye size={size} className={iconClass} />;
    return <BookOpen size={size} className={iconClass} />;
}

export function AboutMiddleSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-3 lg:divide-x lg:divide-border-default">
            {/* ── Col 1: MY JOURNEY ── */}
            <div className="pad-section xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    MY JOURNEY
                </h2>

                <div className="relative mt-6 space-y-8 pl-6">
                    <div className="absolute top-2 bottom-2 left-0 w-px bg-border-strong" />

                    {journey.map((item) => (
                        <div key={item.period} className="relative">
                            {/* Filled circle dot */}
                            <div className="absolute top-[5px] left-[-1.85rem] h-3 w-3 rounded-full border-2 border-border-strong bg-border-strong" />

                            <p className="font-heading text-caption tracking-wide text-accent">
                                {item.period}
                            </p>
                            <h3 className="font-heading mt-1 text-subheading tracking-wide">
                                {item.role}
                            </h3>
                            <p className="mt-2 text-body leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Col 2: WHAT DRIVES ME ── */}
            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    WHAT DRIVES ME
                </h2>

                <div className="mt-6 space-y-8">
                    {drives.map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <div className="icon-box h-11 w-11 shrink-0">
                                <DriveIcon type={item.icon} />
                            </div>
                            <div>
                                <h3 className="font-heading text-subheading tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-body leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Col 3: MY APPROACH ── */}
            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    MY APPROACH
                </h2>

                <p className="mt-6 text-body leading-relaxed">
                    {approachIntro}
                </p>

                <div className="mt-6 space-y-6">
                    {approachSteps.map((step) => (
                        <div key={step.number} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-secondary/50 font-heading text-small text-accent">
                                {step.number}
                            </span>
                            <div>
                                <h3 className="font-heading text-subheading tracking-wide">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-body leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}