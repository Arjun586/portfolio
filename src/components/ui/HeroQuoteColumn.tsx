import { MapPin } from "lucide-react";

type HeroQuoteColumnProps = {
    quote: string;
    author?: string;
    showLocation?: boolean;
};

export function HeroQuoteColumn({
    quote,
    author = "Arjun",
    showLocation = true,
}: HeroQuoteColumnProps) {
    return (
        <div className="flex flex-col justify-center pad-hero xl:pad-hero-lg">
            <div className="font-heading text-display leading-none text-accent">
                &ldquo;
            </div>

            <p className="font-heading mt-4 max-w-sm text-card-title leading-snug tracking-wide">
                {quote}
            </p>

            <p className="mt-6 font-body text-card-title text-accent italic xl:mt-8">
                {author}
            </p>

            {showLocation && (
                <div className="mt-10 xl:mt-12">
                    <div className="divider-strong mb-4" />
                    <div className="flex items-center justify-between font-heading text-small tracking-widest xl:text-body">
                        <span>BASED IN INDIA</span>
                        <MapPin size={18} />
                    </div>
                </div>
            )}
        </div>
    );
}
