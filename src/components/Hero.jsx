const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/aggarwalkamal123",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6-.01c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://in.linkedin.com/in/kamal-aggarwal-18923127a",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 9h3.56v11.45H3.54V9ZM22.23 0H1.77C.79 0 .01.77.01 1.72v20.56c0 .95.78 1.72 1.76 1.72h20.46c.97 0 1.76-.77 1.76-1.72V1.72C23.99.77 23.2 0 22.23 0Z" />
            </svg>
        ),
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8"
        >
            {/* Background Effects */}

            {/* Main blue ambient glow */}
            <div
                className="pointer-events-none absolute -left-48 top-[18%] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.10] blur-[130px] transition-all duration-1000 dark:bg-blue-500/[0.14]"
                aria-hidden="true"
            />

            {/* Right purple/blue glow */}
            <div
                className="pointer-events-none absolute -right-48 bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-indigo-500/[0.09] blur-[140px] transition-all duration-1000 dark:bg-blue-600/[0.12]"
                aria-hidden="true"
            />

            {/* Central soft glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.035] blur-[120px] dark:bg-blue-500/[0.06]"
                aria-hidden="true"
            />

            {/* Decorative grid */}
            <div
                className="[background-image:linear-gradient(rgba(59,130,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.8)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
                aria-hidden="true"
            />

            {/* Main Content */}
            <div className="relative mx-auto grid w-full max-w-5xl items-center gap-14 md:grid-cols-[1fr_280px] lg:gap-20">
                {/* Left Content */}
                <div className="text-center md:text-left">

                    {/* Intro */}
                    <div className="mb-5 flex animate-[heroFadeUp_0.8s_ease-out_both] items-center justify-center gap-3 md:justify-start">
                        <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

                        <p className="text-base font-semibold tracking-wide text-blue-600 dark:text-blue-400 sm:text-lg">
                            Hello, I&apos;m
                        </p>

                        <span className="h-px w-10 bg-gradient-to-l from-transparent to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] md:hidden" />
                    </div>

                    {/* Name */}
                    <h1 className="animate-[heroFadeUp_0.8s_0.08s_ease-out_both] text-5xl font-extrabold tracking-[-0.045em] text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
                        Kamal{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(59,130,246,0.18)]">
                            Aggarwal
                        </span>
                    </h1>

                    {/* Roles */}
                    <div className="mt-5 flex animate-[heroFadeUp_0.8s_0.16s_ease-out_both] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg font-semibold sm:text-xl md:justify-start">
                        <span className="text-zinc-800 dark:text-zinc-200">
                            Data Analyst
                        </span>

                        <span className="text-blue-500 dark:text-blue-400">
                            •
                        </span>

                        <span className="text-zinc-800 dark:text-zinc-200">
                            Full Stack Developer
                        </span>

                        <span className="text-blue-500 dark:text-blue-400">
                            •
                        </span>

                        <span className="text-zinc-800 dark:text-zinc-200">
                            Product Builder
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl animate-[heroFadeUp_0.8s_0.24s_ease-out_both] text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 md:mx-0 dark:text-zinc-400">
                        Final-year B.Tech IT student passionate about Data
                        Analytics, Machine Learning, AI, and Web Development.
                        Skilled in Python, C++, JavaScript, React.js, Next.js,
                        and data-driven problem solving, with a focus on
                        building practical applications and insightful
                        solutions.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex animate-[heroFadeUp_0.8s_0.32s_ease-out_both] flex-wrap items-center justify-center gap-3 md:justify-start">
                        {/* GitHub / LinkedIn */}
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-blue-200/70 bg-blue-50/60 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm shadow-blue-500/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:shadow-[0_8px_25px_rgba(59,130,246,0.18)] dark:border-blue-400/15 dark:bg-blue-400/[0.06] dark:text-zinc-300 dark:hover:border-blue-400/50 dark:hover:bg-blue-400/[0.12] dark:hover:text-blue-300 dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.18)]"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                                <span className="relative transition-transform duration-300 group-hover:scale-110">
                                    {social.icon}
                                </span>

                                <span className="relative">
                                    {social.name}
                                </span>
                            </a>
                        ))}

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_10px_35px_rgba(59,130,246,0.35)]"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                <path d="M14 2v6h6" />
                                <path d="M8 13h8" />
                                <path d="M8 17h5" />
                            </svg>

                            <span className="relative">Resume</span>
                        </a>
                    </div>

                    {/* Availability */}
                    <div className="mt-8 flex animate-[heroFadeUp_0.8s_0.4s_ease-out_both] items-center justify-center gap-2 text-xs text-zinc-400 md:justify-start dark:text-zinc-500">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                        </span>

                        Open to opportunities & collaborations
                    </div>
                </div>

                {/* Profile Image */}
                <div className="mx-auto animate-[heroImageIn_1s_0.2s_ease-out_both]">
                    <div className="group relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">

                        {/* Outer Glow */}
                        <div
                            className="absolute -inset-5 rounded-full bg-blue-500/10 blur-2xl transition-all duration-700 group-hover:bg-blue-500/20 group-hover:blur-3xl dark:bg-blue-500/10 dark:group-hover:bg-blue-400/20"
                            aria-hidden="true"
                        />

                        {/* Rotating Gradient Ring */}
                        <div
                            className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#06b6d4,#6366f1,#3b82f6)] opacity-80 shadow-[0_0_35px_rgba(59,130,246,0.22)] transition-all duration-[1200ms] group-hover:rotate-180 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.38)]"
                            aria-hidden="true"
                        />

                        {/* Inner Ring */}
                        <div className="absolute inset-[3px] rounded-full bg-[#eef3f8] dark:bg-[#0d1118]" />

                        {/* Image */}
                        <div className="relative h-[calc(100%-12px)] w-[calc(100%-12px)] overflow-hidden rounded-full border border-blue-200/70 shadow-2xl shadow-blue-500/15 transition-all duration-500 group-hover:scale-[1.025] group-hover:border-blue-400/80 group-hover:shadow-[0_0_45px_rgba(59,130,246,0.28)] dark:border-blue-400/15 dark:shadow-blue-500/10 dark:group-hover:border-blue-400/60 dark:group-hover:shadow-[0_0_55px_rgba(59,130,246,0.3)]">
                            <img
                                src="/profile.png"
                                alt="Kamal Aggarwal"
                                className="h-full w-full object-cover object-center grayscale-[8%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />

                            {/* Image Overlay */}
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/25 via-transparent to-blue-400/10 opacity-70 transition-opacity duration-500 group-hover:opacity-40 dark:from-blue-950/35 dark:to-blue-400/10" />

                            {/* Moving Shine */}
                            <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                        </div>

                        {/* Floating Blue Dot */}
                        <span
                            className="absolute -right-1 top-10 h-3 w-3 animate-pulse rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                            aria-hidden="true"
                        />

                        {/* Floating Cyan Dot */}
                        <span
                            className="absolute bottom-10 -left-1 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>

            {/* Local animations */}
            <style>{`
                @keyframes heroFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(18px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes heroImageIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.94);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}