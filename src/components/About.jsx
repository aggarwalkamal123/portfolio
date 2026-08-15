export default function About() {
    return (
        <section
            id="about"
            className="
                relative
                scroll-mt-28
                px-5
                py-14
                sm:px-8
                sm:py-16
            "
        >
            <div className="mx-auto w-full max-w-5xl">

                {/* Section Heading */}
                <div className="mb-10">
                    <div className="flex items-center gap-4">
                        <span
                            className="
                                h-[2px]
                                w-12
                                shrink-0
                                rounded-full
                                bg-blue-500
                                shadow-[0_0_12px_rgba(59,130,246,0.65)]
                                transition-all
                                duration-500
                                hover:w-16
                            "
                        />

                        <h2
                            className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-zinc-900
                                transition-colors
                                duration-300
                                sm:text-4xl
                                dark:text-white
                            "
                        >
                            About Me
                        </h2>
                    </div>

                    <div
                        className="
                            mt-3
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-blue-500/50
                            via-blue-400/15
                            to-transparent
                            shadow-[0_0_8px_rgba(59,130,246,0.08)]
                            dark:from-blue-400/50
                            dark:via-blue-400/10
                        "
                    />
                </div>

                {/* Introduction */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-blue-100/80
                        bg-blue-50/35
                        p-6
                        shadow-[0_8px_30px_rgba(59,130,246,0.04)]
                        transition-all
                        duration-500
                        hover:-translate-y-0.5
                        hover:border-blue-200
                        hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)]
                        sm:p-7
                        dark:border-blue-400/10
                        dark:bg-blue-400/[0.035]
                        dark:hover:border-blue-400/20
                        dark:hover:bg-blue-400/[0.045]
                        dark:hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)]
                    "
                >
                    {/* Decorative Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-40
                            w-40
                            rounded-full
                            bg-blue-500/[0.08]
                            blur-3xl
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                            dark:bg-blue-400/[0.08]
                        "
                        aria-hidden="true"
                    />

                    <p
                        className="
                            relative
                            max-w-4xl
                            text-base
                            leading-8
                            text-zinc-600
                            sm:text-lg
                            dark:text-zinc-300
                        "
                    >
                        I&apos;m a final-year B.Tech. Information Technology student at USICT,
                        GGSIPU, with a strong interest in Data Analytics, Machine Learning,
                        Artificial Intelligence, and Full-Stack Web Development. I enjoy
                        working with data to uncover meaningful insights, building machine
                        learning and deep learning solutions, and developing modern,
                        responsive web applications that solve practical problems. My
                        technical foundation includes Python, C++, JavaScript, React.js,
                        Next.js, SQL, data analysis, data visualization, and machine learning
                        frameworks. I&apos;m also interested in exploring new technologies,
                        improving my problem-solving skills, and turning ideas into
                        practical, user-focused, and data-driven solutions.
                    </p>
                </div>

                {/* Education */}
                <div className="mt-14">
                    <div className="mb-7 flex items-center gap-3">
                        <span
                            className="
                                h-7
                                w-1
                                rounded-full
                                bg-gradient-to-b
                                from-blue-400
                                to-indigo-500
                                shadow-[0_0_12px_rgba(59,130,246,0.45)]
                            "
                        />

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-zinc-900
                                sm:text-2xl
                                dark:text-white
                            "
                        >
                            Education
                        </h3>
                    </div>

                    <div className="space-y-6">

                        {/* B.Tech */}
                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-zinc-200/80
                                bg-white/45
                                p-5
                                pl-6
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-blue-300/70
                                hover:shadow-[0_12px_40px_rgba(59,130,246,0.09)]
                                sm:p-6
                                sm:pl-7
                                dark:border-white/[0.08]
                                dark:bg-white/[0.025]
                                dark:hover:border-blue-400/30
                                dark:hover:bg-blue-400/[0.035]
                                dark:hover:shadow-[0_12px_45px_rgba(59,130,246,0.1)]
                            "
                        >
                            {/* Left Accent */}
                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    top-0
                                    w-[2px]
                                    bg-gradient-to-b
                                    from-blue-500
                                    via-cyan-400
                                    to-indigo-500
                                    opacity-60
                                    transition-all
                                    duration-500
                                    group-hover:w-[3px]
                                    group-hover:opacity-100
                                "
                            />

                            {/* Timeline Dot */}
                            <span
                                className="
                                    absolute
                                    left-[-4px]
                                    top-7
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-blue-500
                                    shadow-[0_0_12px_rgba(59,130,246,0.75)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_18px_rgba(59,130,246,0.9)]
                                "
                            />

                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-8">
                                <div>
                                    <h4
                                        className="
                                            text-base
                                            font-bold
                                            leading-6
                                            text-zinc-900
                                            transition-colors
                                            duration-300
                                            group-hover:text-blue-600
                                            sm:text-lg
                                            dark:text-white
                                            dark:group-hover:text-blue-400
                                        "
                                    >
                                        University School of Information,
                                        Communication and Technology
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            sm:text-base
                                            dark:text-zinc-400
                                        "
                                    >
                                        Bachelor of Technology - Information
                                        Technology
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        Overall CGPA:{" "}
                                        <span
                                            className="
                                                font-semibold
                                                text-blue-600
                                                dark:text-blue-400
                                            "
                                        >
                                            8.32 / 10
                                        </span>
                                    </p>
                                </div>

                                <div className="shrink-0 text-left sm:text-right">
                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-zinc-700
                                            dark:text-zinc-300
                                        "
                                    >
                                        Delhi, India
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        September 2023 - August 2027
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Class XII */}
                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-zinc-200/80
                                bg-white/45
                                p-5
                                pl-6
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-blue-300/70
                                hover:shadow-[0_12px_40px_rgba(59,130,246,0.09)]
                                sm:p-6
                                sm:pl-7
                                dark:border-white/[0.08]
                                dark:bg-white/[0.025]
                                dark:hover:border-blue-400/30
                                dark:hover:bg-blue-400/[0.035]
                                dark:hover:shadow-[0_12px_45px_rgba(59,130,246,0.1)]
                            "
                        >
                            {/* Left Accent */}
                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    top-0
                                    w-[2px]
                                    bg-gradient-to-b
                                    from-blue-500
                                    via-cyan-400
                                    to-indigo-500
                                    opacity-60
                                    transition-all
                                    duration-500
                                    group-hover:w-[3px]
                                    group-hover:opacity-100
                                "
                            />

                            {/* Timeline Dot */}
                            <span
                                className="
                                    absolute
                                    left-[-4px]
                                    top-7
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-blue-500
                                    shadow-[0_0_12px_rgba(59,130,246,0.75)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_18px_rgba(59,130,246,0.9)]
                                "
                            />

                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-8">
                                <div>
                                    <h4
                                        className="
                                            text-base
                                            font-bold
                                            leading-6
                                            text-zinc-900
                                            transition-colors
                                            duration-300
                                            group-hover:text-blue-600
                                            sm:text-lg
                                            dark:text-white
                                            dark:group-hover:text-blue-400
                                        "
                                    >
                                        Govt. Boys Senior Secondary School (Dharampura)
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            sm:text-base
                                            dark:text-zinc-400
                                        "
                                    >
                                        Central Board of Secondary Education
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        Class XII:{" "}
                                        <span
                                            className="
                                                font-semibold
                                                text-blue-600
                                                dark:text-blue-400
                                            "
                                        >
                                            90.20%
                                        </span>
                                    </p>
                                </div>

                                <div className="shrink-0 text-left sm:text-right">
                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-zinc-700
                                            dark:text-zinc-300
                                        "
                                    >
                                        Delhi, India
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        April 2022 - March 2023
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Class X */}
                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-zinc-200/80
                                bg-white/45
                                p-5
                                pl-6
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-blue-300/70
                                hover:shadow-[0_12px_40px_rgba(59,130,246,0.09)]
                                sm:p-6
                                sm:pl-7
                                dark:border-white/[0.08]
                                dark:bg-white/[0.025]
                                dark:hover:border-blue-400/30
                                dark:hover:bg-blue-400/[0.035]
                                dark:hover:shadow-[0_12px_45px_rgba(59,130,246,0.1)]
                            "
                        >
                            {/* Left Accent */}
                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    top-0
                                    w-[2px]
                                    bg-gradient-to-b
                                    from-blue-500
                                    via-cyan-400
                                    to-indigo-500
                                    opacity-60
                                    transition-all
                                    duration-500
                                    group-hover:w-[3px]
                                    group-hover:opacity-100
                                "
                            />

                            {/* Timeline Dot */}
                            <span
                                className="
                                    absolute
                                    left-[-4px]
                                    top-7
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-blue-500
                                    shadow-[0_0_12px_rgba(59,130,246,0.75)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_18px_rgba(59,130,246,0.9)]
                                "
                            />

                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-8">
                                <div>
                                    <h4
                                        className="
                                            text-base
                                            font-bold
                                            leading-6
                                            text-zinc-900
                                            transition-colors
                                            duration-300
                                            group-hover:text-blue-600
                                            sm:text-lg
                                            dark:text-white
                                            dark:group-hover:text-blue-400
                                        "
                                    >
                                        Govt. Boys Senior Secondary School (Dharampura)
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            sm:text-base
                                            dark:text-zinc-400
                                        "
                                    >
                                        Central Board of Secondary Education
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        Class X:{" "}
                                        <span
                                            className="
                                                font-semibold
                                                text-blue-600
                                                dark:text-blue-400
                                            "
                                        >
                                            85.20%
                                        </span>
                                    </p>
                                </div>

                                <div className="shrink-0 text-left sm:text-right">
                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-zinc-700
                                            dark:text-zinc-300
                                        "
                                    >
                                        Delhi, India
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            italic
                                            text-zinc-500
                                            dark:text-zinc-500
                                        "
                                    >
                                        April 2021 - March 2022
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}