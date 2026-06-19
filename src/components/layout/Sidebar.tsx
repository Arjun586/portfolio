import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navItems = [
    { number: "01", label: "HOME" },
    { number: "02", label: "ABOUT" },
    { number: "03", label: "PROJECTS" },
    { number: "04", label: "EXPERIENCE" },
    { number: "05", label: "SKILLS" },
    { number: "06", label: "CONTACT" },
];

export function Sidebar() {
    return (
        <aside className="border-border h-screen border-r">
            <div className="relative h-full px-6 py-8">
                <div>
                    <div>
                        <h1 className="font-heading text-5xl leading-none">
                            ARJUN
                        </h1>

                        <h1 className="font-heading text-5xl leading-none">
                            DEV
                        </h1>
                    </div>

                    <div className="bg-border mt-12 ml-1 h-28 w-px" />

                    <nav className="mt-12 space-y-8">
                        {navItems.map((item) => (
                            <div
                                key={item.number}
                                className="flex items-center gap-4"
                            >
                                <span className="font-heading text-xl text-accent">
                                    {item.number}
                                </span>

                                <span className="font-heading text-2xl tracking-wide">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="absolute bottom-8 left-6 flex flex-col gap-8">
                    <FaGithub
                        size={20}
                        className="cursor-pointer transition-opacity hover:opacity-70"
                    />

                    <FaLinkedinIn
                        size={20}
                        className="cursor-pointer transition-opacity hover:opacity-70"
                    />

                    <Mail
                        size={20}
                        className="cursor-pointer transition-opacity hover:opacity-70"
                    />
                </div>
            </div>
        </aside>
    );
}