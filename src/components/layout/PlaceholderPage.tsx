import { Link } from "react-router-dom";

type PlaceholderPageProps = {
    title: string;
    description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <>
            <div className="border-b border-border px-6 py-5 lg:hidden">
                <Link to="/" className="font-heading text-section leading-none">
                    ARJUN
                </Link>
            </div>

            <div className="flex min-h-[70vh] flex-col justify-center px-6 py-16 xl:px-10">
                <h1 className="font-heading text-display tracking-wide xl:text-display-xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-xl text-body leading-relaxed xl:text-subheading">
                    {description}
                </p>
            </div>
        </>
    );
}
