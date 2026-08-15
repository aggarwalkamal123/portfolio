export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-blue-500/15
                bg-[#eef4fb]
                dark:border-blue-400/15
                dark:bg-[#080d16]
            "
        >
            {/* Subtle top blue glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-2/3
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-blue-500/60
                    to-transparent
                    blur-[1px]
                    dark:via-blue-400/60
                "
            />

            {/* Soft ambient glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-20
                    w-80
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.06]
                    blur-3xl
                    dark:bg-blue-400/[0.08]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    flex
                    w-[92%]
                    max-w-6xl
                    flex-col
                    items-center
                    py-4
                "
            >
                {/* Copyright */}
                <p
                    className="
                        text-xs
                        font-medium
                        tracking-wide
                        text-zinc-500
                        transition-colors
                        duration-300
                        hover:text-blue-600
                        dark:text-zinc-400
                        dark:hover:text-blue-400
                    "
                >
                    © {new Date().getFullYear()} Kamal Aggarwal. All rights reserved.
                </p>

                {/* Built with */}
                <p
                    className="
                        mt-1
                        text-[11px]
                        tracking-wide
                        text-zinc-400
                        transition-colors
                        duration-300
                        hover:text-blue-500
                        dark:text-zinc-500
                        dark:hover:text-blue-400
                    "
                >
                    Built with Next.js
                </p>
            </div>
        </footer>
    );
}