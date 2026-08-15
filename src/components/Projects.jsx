import {
    ArrowUpRight,
    Code2,
    ExternalLink,
    FolderGit2,
} from "lucide-react";

const projects = [
    {
        title: "Agrishield",
        image: "/projects/agrishield.png",
        description:
            "An AI-powered agriculture decision-support platform that analyzes agricultural data, assesses crop and environmental risks, and provides interactive insights and AI-driven recommendations through a modern full-stack web application.",
        technologies: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Python",
        ],
        liveLink: "https://agrishield-frontend-6ymj.onrender.com/",
        codeLink: "https://github.com/aggarwalkamal123/Agrishield",
    },
    {
        title: "EcoTrack",
        image: "/projects/ecotrack.png",
        description:
            "A climate-action web application designed to help users understand, track, and adopt sustainable everyday practices through interactive features, data-driven insights, and practical recommendations for reducing their environmental impact.",
        technologies: [
            "React.js",
            "JavaScript",
            "CSS",
            "APIs",
        ],
        liveLink: "https://ibm-csr-box-n7zj.vercel.app/",
        codeLink: "https://github.com/aggarwalkamal123/IBM-CSR-BOX",
    },
    {
        title: "EPL Data Analysis & Interactive Dashboard",
        image: "/projects/epl-dashboard.png",
        description:
            "An interactive football data analysis and visualization project exploring English Premier League match statistics, team performance, goal-scoring patterns, home and away results, and historical trends through data-driven analysis and an interactive Power BI dashboard.",
        technologies: [
            "Python",
            "Pandas",
            "Power BI",
            "Data Analysis",
        ],
        liveLink:
            "https://raw.githubusercontent.com/aggarwalkamal123/EPL_Data_Analysis/refs/heads/main/EPL_Analysis.png",
        codeLink:
            "https://github.com/aggarwalkamal123/EPL_Data_Analysis",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="
                relative
                scroll-mt-28
                overflow-hidden
                px-5
                py-14
                sm:px-8
                sm:py-16
                lg:px-10
            "
        >
            {/* =====================================================
                BACKGROUND GLOWS
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-20
                    h-[28rem]
                    w-[28rem]
                    rounded-full
                    bg-blue-500/[0.045]
                    blur-[130px]
                    dark:bg-blue-500/[0.08]
                "
                aria-hidden="true"
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-48
                    bottom-10
                    h-[30rem]
                    w-[30rem]
                    rounded-full
                    bg-indigo-500/[0.04]
                    blur-[140px]
                    dark:bg-blue-600/[0.07]
                "
                aria-hidden="true"
            />

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="relative mx-auto w-full max-w-6xl">

                {/* Section Heading */}
                <div className="mb-12">

                    <div className="flex items-center gap-3">
                        <span
                            className="
                                h-[2px]
                                w-8
                                rounded-full
                                bg-blue-500
                                shadow-[0_0_10px_rgba(59,130,246,0.65)]
                                dark:bg-blue-400
                                dark:shadow-[0_0_12px_rgba(96,165,250,0.75)]
                            "
                        />

                        <h2
                            className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-zinc-900
                                sm:text-4xl
                                dark:text-white
                            "
                        >
                            Projects
                        </h2>
                    </div>

                    <div
                        className="
                            mt-3
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-blue-500/40
                            via-zinc-200
                            to-transparent
                            dark:from-blue-400/40
                            dark:via-white/10
                        "
                    />
                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================== */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="
                                group
                                relative
                                flex
                                h-full
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border
                                border-zinc-200/80
                                bg-white/70
                                shadow-sm
                                backdrop-blur-md
                                transition-all
                                duration-500

                                hover:-translate-y-2
                                hover:border-blue-300/80
                                hover:shadow-[0_18px_50px_rgba(59,130,246,0.12)]

                                dark:border-white/[0.08]
                                dark:bg-white/[0.025]

                                dark:hover:border-blue-400/30
                                dark:hover:shadow-[0_18px_55px_rgba(59,130,246,0.14)]
                            "
                        >
                            {/* Card Ambient Glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-48
                                    w-48
                                    rounded-full
                                    bg-blue-500/[0.08]
                                    blur-3xl
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                    dark:bg-blue-400/[0.10]
                                "
                                aria-hidden="true"
                            />

                            {/* =================================================
                                PROJECT IMAGE
                            ================================================== */}

                            <div
                                className="
                                    relative
                                    m-3
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-zinc-200/80
                                    bg-zinc-100
                                    dark:border-white/[0.08]
                                    dark:bg-zinc-900
                                "
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-all
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />
                                </div>

                                {/* Image Blue Overlay */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-tr
                                        from-blue-950/40
                                        via-transparent
                                        to-blue-400/10
                                        opacity-30
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-70
                                    "
                                />

                                {/* Image Shine */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-y-0
                                        -left-full
                                        w-1/2
                                        skew-x-[-20deg]
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/20
                                        to-transparent
                                        transition-all
                                        duration-700
                                        group-hover:left-[130%]
                                    "
                                    aria-hidden="true"
                                />

                                {/* Project Number */}
                                <span
                                    className="
                                        absolute
                                        right-3
                                        top-3
                                        flex
                                        h-8
                                        min-w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-white/20
                                        bg-black/45
                                        px-2
                                        text-xs
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        group-hover:border-blue-300/50
                                        group-hover:bg-blue-950/60
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* =================================================
                                CARD CONTENT
                            ================================================== */}

                            <div className="relative flex flex-1 flex-col px-4 pb-5 pt-2">

                                {/* Title */}
                                <div className="mb-3 flex items-start justify-between gap-3">

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            leading-tight
                                            text-zinc-900
                                            transition-colors
                                            duration-300
                                            group-hover:text-blue-600
                                            dark:text-white
                                            dark:group-hover:text-blue-400
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                    <span
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-zinc-200
                                            bg-zinc-50
                                            text-zinc-400
                                            transition-all
                                            duration-300
                                            group-hover:border-blue-300
                                            group-hover:bg-blue-50
                                            group-hover:text-blue-500
                                            dark:border-white/10
                                            dark:bg-white/[0.04]
                                            dark:text-zinc-500
                                            dark:group-hover:border-blue-400/25
                                            dark:group-hover:bg-blue-400/[0.08]
                                            dark:group-hover:text-blue-400
                                        "
                                    >
                                        <FolderGit2
                                            className="h-4 w-4"
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className="
                                        mb-5
                                        text-sm
                                        leading-6
                                        text-zinc-600
                                        dark:text-zinc-400
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6 flex flex-wrap gap-2">

                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="
                                                rounded-lg
                                                border
                                                border-zinc-200/80
                                                bg-zinc-50
                                                px-2.5
                                                py-1
                                                text-xs
                                                font-medium
                                                text-zinc-600
                                                transition-all
                                                duration-300

                                                group-hover:border-blue-200/80
                                                group-hover:bg-blue-50/70

                                                dark:border-white/[0.08]
                                                dark:bg-white/[0.035]
                                                dark:text-zinc-400

                                                dark:group-hover:border-blue-400/20
                                                dark:group-hover:bg-blue-400/[0.06]
                                            "
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}
                                <div className="mt-auto flex items-center gap-2">

                                    {/* Live Demo */}
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group/button
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-lg
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-blue-500
                                            px-3.5
                                            py-2
                                            text-xs
                                            font-semibold
                                            text-white
                                            shadow-sm
                                            shadow-blue-500/20
                                            transition-all
                                            duration-300

                                            hover:-translate-y-0.5
                                            hover:from-blue-500
                                            hover:to-cyan-500
                                            hover:shadow-[0_8px_25px_rgba(59,130,246,0.28)]

                                            dark:from-blue-500
                                            dark:to-blue-600
                                            dark:hover:from-blue-400
                                            dark:hover:to-cyan-400
                                        "
                                    >
                                        <ExternalLink
                                            className="
                                                h-3.5
                                                w-3.5
                                                transition-transform
                                                duration-300
                                                group-hover/button:-translate-y-0.5
                                                group-hover/button:translate-x-0.5
                                            "
                                            strokeWidth={2}
                                        />

                                        Live Demo
                                    </a>

                                    {/* Source Code */}
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group/code
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-lg
                                            border
                                            border-zinc-200
                                            bg-white
                                            px-3.5
                                            py-2
                                            text-xs
                                            font-semibold
                                            text-zinc-700
                                            transition-all
                                            duration-300

                                            hover:-translate-y-0.5
                                            hover:border-blue-400
                                            hover:bg-blue-50/50
                                            hover:text-blue-600
                                            hover:shadow-[0_8px_22px_rgba(59,130,246,0.10)]

                                            dark:border-white/10
                                            dark:bg-white/[0.03]
                                            dark:text-zinc-300

                                            dark:hover:border-blue-400/40
                                            dark:hover:bg-blue-400/[0.06]
                                            dark:hover:text-blue-400
                                        "
                                    >
                                        <Code2
                                            className="h-3.5 w-3.5"
                                            strokeWidth={2}
                                        />

                                        Source Code

                                        <ArrowUpRight
                                            className="
                                                h-3 w-3
                                                transition-transform
                                                duration-300
                                                group-hover/code:translate-x-0.5
                                                group-hover/code:-translate-y-0.5
                                            "
                                            strokeWidth={2}
                                        />
                                    </a>

                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-5
                                    right-5
                                    h-px
                                    origin-left
                                    scale-x-0
                                    bg-gradient-to-r
                                    from-blue-500
                                    via-cyan-400
                                    to-indigo-500
                                    shadow-[0_0_10px_rgba(59,130,246,0.6)]
                                    transition-transform
                                    duration-500
                                    group-hover:scale-x-100
                                "
                                aria-hidden="true"
                            />
                        </article>
                    ))}

                </div>

                {/* =================================================
                    VIEW ALL PROJECTS
                ================================================== */}

                <div className="mt-10 flex justify-center">

                    <a
                        href="https://github.com/aggarwalkamal123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-blue-200/80
                            bg-white/70
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-zinc-700
                            shadow-sm
                            backdrop-blur-sm
                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-blue-400
                            hover:bg-blue-50/70
                            hover:text-blue-600
                            hover:shadow-[0_10px_30px_rgba(59,130,246,0.14)]

                            dark:border-blue-400/15
                            dark:bg-white/[0.03]
                            dark:text-zinc-300

                            dark:hover:border-blue-400/40
                            dark:hover:bg-blue-400/[0.06]
                            dark:hover:text-blue-400
                            dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.14)]
                        "
                    >
                        <Code2
                            className="
                                h-4 w-4
                                transition-transform
                                duration-300
                                group-hover:scale-110
                            "
                            strokeWidth={1.8}
                        />

                        View All Projects

                        <ArrowUpRight
                            className="
                                h-4 w-4
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                            strokeWidth={1.8}
                        />
                    </a>

                </div>
            </div>
        </section>
    );
}