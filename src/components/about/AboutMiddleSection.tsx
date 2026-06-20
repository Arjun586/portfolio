import { Code2, Lightbulb, PenLine } from "lucide-react";
import {
    approachIntro,
    approachSteps,
    drives,
    journey,
} from "../../data/about";

function DriveIcon({ type }: { type: (typeof drives)[number]["icon"] }) {
    const iconClass = "text-text";
    const size = 20;

    if (type === "code") return <Code2 size={size} className={iconClass} />;
    if (type === "lightbulb")
        return <Lightbulb size={size} className={iconClass} />;
    return <PenLine size={size} className={iconClass} />;
}

export function AboutMiddleSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
            <div className="px-6 py-6 xl:px-8 xl:py-8">
                <h2 className="font-heading text-section tracking-wide">
                    MY JOURNEY
                </h2>

                <div className="relative mt-6 space-y-6 pl-5">
                    <div className="absolute top-1 bottom-1 left-[5px] w-px bg-text" />

                    {journey.map((item) => (
                        <div key={item.period} className="relative">
                            <div className="absolute top-1.5 -left-5 h-2.5 w-2.5 rounded-full bg-text" />
                            <p className="font-heading text-caption tracking-wide text-accent">
                                {item.period}
                            </p>
                            <h3 className="font-heading mt-1 text-body tracking-wide xl:text-subheading">
                                {item.role}
                            </h3>
                            <p className="mt-1 text-body leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2 className="font-heading text-section tracking-wide">
                    WHAT DRIVES ME
                </h2>

                <div className="mt-6 space-y-6">
                    {drives.map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-text/70 bg-background/40">
                                <DriveIcon type={item.icon} />
                            </div>
                            <div>
                                <h3 className="font-heading text-body tracking-wide xl:text-subheading">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-body leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2 className="font-heading text-section tracking-wide">
                    MY APPROACH
                </h2>

                <p className="mt-5 text-body leading-relaxed">
                    {approachIntro}
                </p>

                <div className="mt-6 space-y-5">
                    {approachSteps.map((step) => (
                        <div key={step.number} className="flex gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-secondary/50 font-heading text-small text-accent">
                                {step.number}
                            </span>
                            <div>
                                <h3 className="font-heading text-body tracking-wide xl:text-subheading">
                                    {step.title}
                                </h3>
                                <p className="mt-0.5 text-body leading-relaxed">
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
