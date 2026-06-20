import { Link } from "react-router-dom";

type PlaceholderPageProps = {
    title: string;
    description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <>
            <div className="border-b border-border-default pad-mobile-header lg:hidden">
                <Link
                    to="/"
                    className="font-heading text-card-title leading-none tracking-tight"
                >
                    ARJUN
                </Link>
            </div>

            <div className="flex min-h-[70vh] flex-col justify-center pad-hero xl:pad-hero-lg">
                <h1 className="font-heading text-display tracking-wide">
                    {title}
                </h1>
                <p className="mt-6 max-w-xl text-body leading-relaxed">
                    {description}
                </p>
            </div>
        </>
    );
}
