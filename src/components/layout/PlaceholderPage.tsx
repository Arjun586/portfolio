import { Link } from "react-router-dom";

type PlaceholderPageProps = {
    title: string;
    description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-3xl leading-none">
                    ARJUN
                </Link>
            </div>

            <div className="flex min-h-[70vh] flex-col justify-center px-6 py-16 xl:px-10">
                <h1 className="font-heading text-5xl tracking-wide xl:text-6xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed xl:text-lg">
                    {description}
                </p>
            </div>
        </>
    );
}
