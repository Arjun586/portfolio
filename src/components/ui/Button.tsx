import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    showArrow?: boolean;
};

export function Button({
    children,
    className = "",
    showArrow = true,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`btn-primary ${className}`.trim()}
            {...props}
        >
            {children}
            {showArrow && <span aria-hidden>→</span>}
        </button>
    );
}
