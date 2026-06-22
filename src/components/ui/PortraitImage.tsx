import portraitImg from "../../assets/myImage.png";

type PortraitImageProps = {
    alt?: string;
    className?: string;
};

export function PortraitImage({
    alt = "Arjun",
    className = "",
}: PortraitImageProps) {
    return (
        <div
            className={`flex items-start justify-center px-6 pt-6 pb-4 sm:pad-hero xl:pad-hero-lg ${className}`}
        >
            <div className="relative pr-3 pb-3 pt-1 sm:pr-5 sm:pb-5 xl:pr-6 xl:pb-6">
                <div
                    className="absolute left-3 top-4 aspect-[3/4] w-[min(72vw,180px)] bg-secondary sm:left-4 sm:top-5 sm:w-[240px] xl:left-5 xl:top-6 xl:w-[280px]"
                    aria-hidden
                />
                <div className="relative z-10 aspect-[3/4] w-[min(72vw,180px)] border border-border-strong sm:w-[240px] xl:w-[280px]">
                    <img
                        src={portraitImg}
                        alt={alt}
                        className="h-full w-full object-cover object-top grayscale"
                    />
                </div>
            </div>
        </div>
    );
}
