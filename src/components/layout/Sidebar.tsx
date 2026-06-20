import { NavLink } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navItems = [
    { number: "01", label: "HOME", to: "/" },
    { number: "02", label: "ABOUT", to: "/about" },
    { number: "03", label: "PROJECTS", to: "/projects" },
    { number: "04", label: "EXPERIENCE", to: "/experience" },
    { number: "05", label: "SKILLS", to: "/skills" },
    { number: "06", label: "CONTACT", to: "/contact" },
];

export function Sidebar() {
    return (
        <aside className="sticky top-0 hidden h-screen w-[180px] shrink-0 border-r border-border-default lg:block">
            <div className="flex h-full flex-col px-6 py-8">
                <NavLink
                    to="/"
                    end
                    className="font-heading text-card-title leading-[0.9] tracking-tight transition-opacity hover:opacity-70"
                >
                    ARJUN
                </NavLink>

                <div className="mt-8 ml-0.5 h-16 w-px shrink-0 bg-border-default" />

                <nav className="mt-8 flex-1 space-y-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.number}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                `group flex items-baseline gap-4 transition-opacity hover:opacity-70 ${
                                    isActive ? "text-accent" : "text-text"
                                }`
                            }
                        >
                            <span className="font-heading text-caption tabular-nums">
                                {item.number}
                            </span>
                            <span className="font-heading text-subheading tracking-wide">
                                {item.label}
                            </span>
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-auto flex flex-col gap-6 border-t border-border-subtle pt-8">
                    <a
                        href="https://github.com/Arjun586"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="transition-opacity hover:opacity-70"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arjun586"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="transition-opacity hover:opacity-70"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                    <NavLink
                        to="/contact"
                        aria-label="Contact page"
                        className="transition-opacity hover:opacity-70"
                    >
                        <Mail size={18} />
                    </NavLink>
                </div>
            </div>
        </aside>
    );
}
