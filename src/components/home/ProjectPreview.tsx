type ProjectPreviewProps = {
    variant: ProjectPreviewVariant;
    className?: string;
};

export type ProjectPreviewVariant =
    | "taskflow"
    | "skyward"
    | "timepiece"
    | "devportfolio"
    | "nesthabitat"
    | "fintrack";

export function ProjectPreview({ variant, className = "" }: ProjectPreviewProps) {
    if (variant === "taskflow") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#1a1a1a] ${className}`}>
                <div className="absolute inset-y-0 left-0 w-[22%] border-r border-white/10 bg-[#111]">
                    <div className="mx-2 mt-3 h-1.5 w-8 bg-white/15" />
                    <div className="mx-2 mt-2 h-1 w-10 bg-white/8" />
                    <div className="mx-2 mt-2 h-1 w-7 bg-white/8" />
                    <div className="mx-2 mt-2 h-1 w-9 bg-white/8" />
                </div>
                <div className="absolute inset-y-0 left-[22%] right-0 p-2">
                    <div className="grid h-full grid-cols-3 gap-1.5">
                        <div className="rounded-sm bg-[#252525] p-1.5">
                            <div className="mx-auto mt-1 h-7 w-7 rounded-full border-2 border-accent/60" />
                            <div className="mx-auto mt-1 h-0.5 w-6 bg-white/10" />
                        </div>
                        <div className="rounded-sm bg-[#252525] p-1.5">
                            <div className="mx-auto mt-1 h-7 w-7 rounded-full border-2 border-white/20" />
                            <div className="mx-auto mt-1 h-0.5 w-6 bg-white/10" />
                        </div>
                        <div className="rounded-sm bg-[#252525] p-1.5">
                            <div className="mx-auto mt-1 h-7 w-7 rounded-full border-2 border-white/20" />
                            <div className="mx-auto mt-1 h-0.5 w-6 bg-white/10" />
                        </div>
                        <div className="col-span-2 rounded-sm bg-[#222] p-1">
                            <div className="flex h-full items-end gap-0.5 px-1 pb-1">
                                {[40, 65, 45, 80, 55, 70].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-accent/50"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="rounded-sm bg-[#252525]" />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "skyward") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#0d1117] ${className}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#3a4a6b_0%,transparent_55%)]" />
                <div className="absolute top-[18%] right-[12%] h-14 w-14 rounded-full bg-[radial-gradient(circle_at_35%_35%,#8899aa,#445566)] opacity-90" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2">
                    <div className="h-1 w-6 bg-white/20" />
                    <div className="flex gap-2">
                        <div className="h-1 w-4 bg-white/10" />
                        <div className="h-1 w-4 bg-white/10" />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
                    <p className="font-heading text-[0.55rem] leading-tight tracking-wide text-white/90 xl:text-[0.65rem]">
                        WHERE IDEAS
                        <br />
                        TAKE FLIGHT
                    </p>
                </div>
            </div>
        );
    }

    if (variant === "timepiece") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#141210] ${className}`}>
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2">
                <div className="h-1 w-8 bg-white/15" />
                <div className="flex gap-1.5">
                    <div className="h-1 w-3 bg-white/10" />
                    <div className="h-1 w-3 bg-white/10" />
                </div>
            </div>
            <div className="absolute top-[28%] left-[8%]">
                <p className="font-heading text-[0.5rem] leading-tight tracking-wide text-white/80 xl:text-[0.6rem]">
                    DISCOVER
                    <br />
                    TIMELESS
                    <br />
                    STYLE
                </p>
            </div>
            <div className="absolute right-[6%] bottom-[8%] h-[55%] w-[42%]">
                <div className="relative h-full w-full rounded-full border-2 border-[#c9a96e]/40 bg-[radial-gradient(circle_at_40%_40%,#2a2520,#0a0908)]">
                    <div className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/30" />
                    <div className="absolute top-[18%] left-1/2 h-1 w-3 -translate-x-1/2 bg-[#c9a96e]/50" />
                </div>
            </div>
        </div>
        );
    }

    if (variant === "devportfolio") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#161616] ${className}`}>
                <div className="absolute inset-x-0 top-0 border-b border-white/10 px-3 py-2">
                    <div className="h-1 w-10 bg-white/20" />
                </div>
                <div className="absolute top-[30%] left-[10%]">
                    <p className="font-heading text-[0.55rem] tracking-wide text-white/90">
                        ARJUN DEV
                    </p>
                    <div className="mt-2 h-px w-12 bg-accent/60" />
                </div>
                <div className="absolute right-[8%] bottom-[12%] h-[45%] w-[50%] border border-white/10 bg-[#222]" />
            </div>
        );
    }

    if (variant === "nesthabitat") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#1c1a18] ${className}`}>
                <div className="absolute inset-x-0 top-0 flex justify-between px-3 py-2">
                    <div className="h-1 w-8 bg-white/15" />
                    <div className="h-1 w-4 bg-white/10" />
                </div>
                <div className="absolute inset-x-3 top-[28%] grid grid-cols-2 gap-1.5">
                    <div className="h-10 border border-white/10 bg-[#2a2622]" />
                    <div className="h-10 border border-white/10 bg-[#2a2622]" />
                </div>
                <p className="absolute bottom-3 left-3 font-heading text-[0.5rem] tracking-wide text-white/70">
                    FIND YOUR HOME
                </p>
            </div>
        );
    }

    if (variant === "fintrack") {
        return (
            <div className={`relative h-full min-h-[120px] w-full overflow-hidden bg-[#121820] ${className}`}>
                <div className="absolute inset-x-0 top-0 px-3 py-2">
                    <div className="h-1 w-12 bg-white/15" />
                </div>
                <div className="absolute inset-x-3 bottom-4 flex h-[50%] items-end gap-1">
                    {[35, 55, 40, 70, 50, 65, 45].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-accent/45"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>
                <div className="absolute top-[28%] left-3 h-6 w-10 rounded-sm border border-white/15 bg-[#1a2430]" />
            </div>
        );
    }

    return null;
}

const previewVariants: ProjectPreviewVariant[] = [
    "taskflow",
    "skyward",
    "timepiece",
];

export function getPreviewVariant(index: number): ProjectPreviewVariant {
    return previewVariants[index] ?? "taskflow";
}
