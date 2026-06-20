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
        <aside className="sticky top-0 hidden h-screen shrink-0 border-r border-border lg:block">
            <div className="flex h-full flex-col px-6 py-8">
                <NavLink
                    to="/"
                    end
                    className="font-heading text-section leading-[0.9] tracking-tight transition-opacity hover:opacity-70"
                >
                    ARJUN
                </NavLink>

                <div className="bg-border mt-8 ml-1 h-20 w-px shrink-0" />

                <nav className="mt-8 flex-1 space-y-5">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.number}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                `group flex items-center gap-3 transition-opacity hover:opacity-70 ${
                                    isActive ? "text-accent" : "text-text"
                                }`
                            }
                        >
                            <span className="font-heading text-subheading">
                                {item.number}
                            </span>
                            <span className="font-heading text-card-title tracking-wide">
                                {item.label}
                            </span>
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-auto ml-1 flex flex-col gap-5">
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
