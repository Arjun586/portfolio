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
            className={`flex items-start justify-center px-4 py-6 xl:px-6 xl:py-8 ${className}`}
        >
            <div className="relative pr-5 pb-5 pt-1 xl:pr-6 xl:pb-6">
                <div
                    className="absolute left-4 top-5 aspect-[3/4] w-[240px] bg-secondary xl:left-5 xl:top-6 xl:w-[280px]"
                    aria-hidden
                />
                <div className="relative z-10 aspect-[3/4] w-[240px] border border-border-strong xl:w-[280px]">
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
