import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
    availableFor,
    contactDetails,
    socialLinks,
} from "../../data/contactPage";

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
        <section className="grid grid-cols-1 border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
            <div className="px-6 py-6 xl:px-8 xl:py-8">
                <h2
                    className="font-heading tracking-wide"
                    style={{ fontSize: "var(--text-section)" }}
>
                    SEND ME A MESSAGE
                </h2>

                <form
                    className="mt-5 space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="font-heading tracking-wide xl:text-sm"
                        >
                            YOUR NAME
                        </label>
                        <input
                            type="text"
                            className="mt-1.5 w-full border border-text/30 bg-background/60 px-3 py-2 font-body text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <div>
                        <label className="font-heading text-xs tracking-wide xl:text-sm">
                            YOUR EMAIL
                        </label>
                        <input
                            type="email"
                            className="mt-1.5 w-full border border-text/30 bg-background/60 px-3 py-2 font-body text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <div>
                        <label className="font-heading text-xs tracking-wide xl:text-sm">
                            SUBJECT
                        </label>
                        <input
                            type="text"
                            className="mt-1.5 w-full border border-text/30 bg-background/60 px-3 py-2 font-body text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <div>
                        <label className="font-heading text-xs tracking-wide xl:text-sm">
                            YOUR MESSAGE
                        </label>
                        <textarea
                            rows={4}
                            className="mt-1.5 w-full resize-none border border-text/30 bg-background/60 px-3 py-2 font-body text-sm outline-none focus:border-accent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-accent px-6 py-2.5 font-heading text-sm tracking-wide text-background transition-opacity hover:opacity-90 xl:text-base"
                    >
                        SEND MESSAGE
                        <span>→</span>
                    </button>
                </form>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    CONTACT DETAILS
                </h2>

                <ul className="mt-5">
                    {contactDetails.map((item) => (
                        <li
                            key={item.label}
                            className="flex gap-3 border-b border-dashed border-text/30 py-4 first:pt-0 last:border-b-0"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-text/50 bg-background/40">
                                <DetailIcon type={item.icon} />
                            </div>
                            <div>
                                <p className="font-heading text-xs tracking-wide text-accent xl:text-sm">
                                    {item.label}
                                </p>
                                <p className="mt-0.5 text-sm leading-snug">
                                    {item.value}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-border px-6 py-6 lg:border-t-0 xl:px-8 xl:py-8">
                <h2
    className="font-heading tracking-wide"
    style={{ fontSize: "var(--text-section)" }}
>
                    LET&apos;S CONNECT
                </h2>

                <div className="mt-5 grid grid-cols-3 gap-2">
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
                            className="flex flex-col items-center gap-2 border border-text/50 bg-background/40 px-2 py-3 transition-opacity hover:opacity-70"
                        >
                            <SocialIcon type={link.icon} />
                            <span className="font-heading text-[0.65rem] tracking-wide xl:text-xs">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

                <h3 className="font-heading mt-8 text-sm tracking-wide text-accent xl:text-base">
                    I&apos;M AVAILABLE FOR
                </h3>

                <ul className="mt-4 space-y-3">
                    {availableFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                            <Check
                                size={16}
                                className="mt-0.5 shrink-0 text-accent"
                            />
                            <span className="text-sm leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
