"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <nav className="relative mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-zinc-300/60 bg-[#f1f5fb]/80 px-5 py-3 shadow-[0_8px_35px_rgba(37,99,235,0.06)] backdrop-blur-2xl transition-all duration-500 dark:border-blue-400/[0.12] dark:bg-[#0b0f19]/75 dark:shadow-[0_8px_40px_rgba(37,99,235,0.08)]">

                {/* Subtle top highlight */}
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-70 dark:via-blue-400/50" />

                {/* Subtle ambient glow */}
                <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-blue-500/[0.04] via-transparent to-violet-500/[0.04] blur-xl dark:from-blue-500/[0.07] dark:to-violet-500/[0.06]" />

                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleNavClick}
                    className="group relative shrink-0"
                >
                    <span className="relative text-xl font-bold tracking-tight text-zinc-900 transition-all duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        Kamal
                    </span>

                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300 ease-out group-hover:w-full" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:bg-blue-500/[0.06] hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-blue-400/[0.07] dark:hover:text-blue-400"
                        >
                            {link.name}

                            {/* Nav item glow underline */}
                            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:w-4/5 group-hover:opacity-100" />
                        </a>
                    ))}
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">

                    {/* Theme Toggle */}
                    <div className="rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.16)]">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen((previous) => !previous)
                        }
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        className="group flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/70 bg-zinc-50/80 text-zinc-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:bg-blue-50 hover:text-blue-600 hover:shadow-[0_0_16px_rgba(59,130,246,0.14)] md:hidden dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-300 dark:hover:border-blue-400/35 dark:hover:bg-blue-400/[0.08] dark:hover:text-blue-400 dark:hover:shadow-[0_0_18px_rgba(59,130,246,0.18)]"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                            >
                                <path d="M6 6l12 12" />
                                <path d="M18 6 6 18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            >
                                <path d="M4 7h16" />
                                <path d="M4 12h16" />
                                <path d="M4 17h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`absolute left-0 top-[calc(100%+0.65rem)] w-full origin-top overflow-hidden rounded-2xl border border-zinc-300/60 bg-[#f1f5fb]/95 p-2 shadow-[0_15px_45px_rgba(37,99,235,0.10)] backdrop-blur-2xl transition-all duration-300 dark:border-blue-400/[0.12] dark:bg-[#0b0f19]/95 dark:shadow-[0_15px_50px_rgba(37,99,235,0.14)] md:hidden ${menuOpen
                            ? "visible scale-100 opacity-100"
                            : "invisible scale-95 opacity-0"
                        }`}
                >
                    {/* Mobile menu glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-3xl dark:bg-blue-400/[0.10]" />

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleNavClick}
                            className="group relative block overflow-hidden rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:translate-x-1 hover:bg-blue-500/[0.07] hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-400/[0.07] dark:hover:text-blue-400"
                        >
                            {link.name}

                            <span className="absolute bottom-0 left-4 h-px w-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}