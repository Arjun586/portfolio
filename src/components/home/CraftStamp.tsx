import type { CSSProperties } from "react";

export function CraftStamp({ style }: { style?: CSSProperties }) {
    return (
        <div
            className="pointer-events-none absolute z-20 hidden lg:block"
            style={{ left: "26%", top: "62%", ...style }}
            aria-hidden
        >
            <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-text/70 bg-background/95 xl:h-[124px] xl:w-[124px]">
                <svg
                    viewBox="0 0 124 124"
                    className="absolute inset-0 h-full w-full"
                >
                    <defs>
                        <path
                            id="stamp-ring"
                            d="M 62,62 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                        />
                    </defs>
                    <text
                        fontSize="8.5"
                        fontWeight="700"
                        letterSpacing="2.2"
                        fill="currentColor"
                        className="font-body font-bold uppercase text-text"
                    >
                        <textPath href="#stamp-ring" startOffset="0%">
                            Crafting Digital Experiences • 2024 •
                        </textPath>
                    </text>
                </svg>
                <span className="font-heading text-card-title font-bold text-text xl:text-section">
                    ★
                </span>
            </div>
        </div>
    );
}
