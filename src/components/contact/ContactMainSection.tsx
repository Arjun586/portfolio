import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
    availableFor,
    contactDetails,
    socialLinks,
} from "../../data/contactPage";
import { Button } from "../ui/Button";

function DetailIcon({ type }: { type: (typeof contactDetails)[number]["icon"] }) {
    const className = "text-text";
    const size = 18;

    if (type === "mail") return <Mail size={size} className={className} />;
    if (type === "phone") return <Phone size={size} className={className} />;
    if (type === "location") return <MapPin size={size} className={className} />;
    return <Clock size={size} className={className} />;
}

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
    const className = "text-text";
    const size = 20;

    if (type === "github") return <FaGithub size={size} className={className} />;
    if (type === "linkedin")
        return <FaLinkedinIn size={size} className={className} />;
    return <Mail size={size} className={className} />;
}

export function ContactMainSection() {
    return (
        <section className="grid grid-cols-1 border-b border-border-default lg:grid-cols-3 lg:divide-x lg:divide-border-default">
            <div className="pad-section xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    SEND ME A MESSAGE
                </h2>

                <form
                    className="mt-6 space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="form-field">
                        <label className="form-label" htmlFor="contact-name">
                            YOUR NAME
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="contact-email">
                            YOUR EMAIL
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="contact-subject">
                            SUBJECT
                        </label>
                        <input
                            id="contact-subject"
                            type="text"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="contact-message">
                            YOUR MESSAGE
                        </label>
                        <textarea
                            id="contact-message"
                            rows={4}
                            className="form-input resize-none"
                        />
                    </div>

                    <Button type="submit">SEND MESSAGE</Button>
                </form>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    CONTACT DETAILS
                </h2>

                <ul className="mt-6">
                    {contactDetails.map((item) => (
                        <li
                            key={item.label}
                            className="flex gap-4 border-b border-dashed border-border-subtle py-6 first:pt-0 last:border-b-0"
                        >
                            <div className="icon-box">
                                <DetailIcon type={item.icon} />
                            </div>
                            <div>
                                <p className="font-heading text-caption tracking-wide text-accent">
                                    {item.label}
                                </p>
                                <p className="mt-2 text-body leading-relaxed">
                                    {item.value}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-border-default pad-section lg:border-t-0 xl:pad-section-lg">
                <h2 className="font-heading text-section tracking-wide">
                    LET&apos;S CONNECT
                </h2>

                <div className="mt-6 grid grid-cols-3 gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.icon === "mail" ? undefined : "_blank"}
                            rel={
                                link.icon === "mail"
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            className="flex flex-col items-center gap-4 border border-border-subtle bg-background/40 px-2 py-4 transition-opacity hover:opacity-70"
                        >
                            <SocialIcon type={link.icon} />
                            <span className="font-heading text-caption tracking-wide">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

                <h3 className="font-heading mt-8 text-subheading tracking-wide text-accent">
                    I&apos;M AVAILABLE FOR
                </h3>

                <ul className="mt-6 space-y-4">
                    {availableFor.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                            <Check
                                size={16}
                                className="mt-1 shrink-0 text-accent"
                            />
                            <span className="text-body leading-relaxed">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
