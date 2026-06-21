import { currentlyExploring, growthTimeline, highlights } from "../../data/experience";

export function ExperienceMiddleSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-3 lg:items-stretch lg:divide-x lg:divide-border-default">
            {/* GROWTH TIMELINE */}
            <div className="pad-section xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">GROWTH TIMELINE</h2>
                <div className="relative mt-6 space-y-6 pl-6">
                    <div className="absolute top-2 bottom-2 left-0 w-px bg-border-strong" />
                    {growthTimeline.map((item) => (
                        <div key={item.period} className="relative">
                            <div className="absolute top-[5px] left-[-1.85rem] h-3 w-3 rounded-full border-2 border-border-strong bg-border-strong" />

                            <p className="font-heading text-caption tracking-wide text-accent">
                                {item.period}
                            </p>
                            <h3 className="font-heading mt-1 text-subheading tracking-wide">
                                {item.title}
                            </h3>
                            <ul className="mt-2 space-y-1">
                                {item.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2 text-small leading-relaxed">
                                        <span className="mt-[0.35rem] h-1 w-1 shrink-0 bg-text/50" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 text-small leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CURRENTLY EXPLORING */}
            <div className="flex flex-col border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">CURRENTLY EXPLORING</h2>
                <div className="mt-6 flex flex-1 flex-col gap-4">
                    {currentlyExploring.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-1 flex-col justify-center border border-border-subtle bg-[rgb(221_208_181/0.35)] px-4 py-5 xl:px-5 xl:py-6"
                        >
                            <h3 className="font-heading text-subheading tracking-wide">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-small leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">HIGHLIGHTS</h2>
                <div className="mt-6 divide-y divide-border-subtle">
                    {highlights.map((item) => (
                        <div key={item.number} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent bg-secondary/50 font-heading text-small text-accent">
                                {item.number}
                            </span>
                            <p className="pt-1 text-body leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
