import { Link } from "react-router-dom";

export function MobileHeader() {
    return (
        <div className="border-b border-border-default pad-mobile-header lg:hidden">
            <Link
                to="/"
                className="font-heading text-card-title leading-none tracking-tight"
            >
                ARJUN
            </Link>
        </div>
    );
}
