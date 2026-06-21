// src/components/home/FooterSection.tsx
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, footerCta } from "../../data/home";
import { Button } from "../ui/Button";

export function FooterSection() {
    return (
        <section className="grid grid-cols-1 divide-y divide-border-default lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div id="experience" className="flex flex-col justify-center px-6 py-4 xl:px-8 xl:py-5">
                <h2 className="font-heading text-subheading tracking-wide xl:text-card-title">{footerCta.title}</h2>
                <p className="mt-2 max-w-lg text-body leading-relaxed">{footerCta.description}</p>
                <Link to="/contact" className="mt-4 inline-block w-fit">
                    <Button>GET IN TOUCH</Button>
                </Link>
            </div>

            <div id="contact" className="flex flex-col justify-center gap-3 px-6 py-4 font-heading text-small tracking-wide xl:px-8 xl:py-5 xl:text-body">
                <div className="flex items-center gap-4">
                    <Mail size={16} className="shrink-0" />
                    <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin size={16} className="shrink-0" />
                    <span>{contact.location}</span>
                </div>
            </div>
        </section>
    );
}