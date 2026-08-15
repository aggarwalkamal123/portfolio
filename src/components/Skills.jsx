import {
    Code2,
    Terminal,
    Globe,
    Layers,
    Palette,
    Database,
    Server,
    BarChart3,
    Brain,
    Cpu,
    Workflow,
    GitBranch,
    NotebookPen,
    Monitor,
    LayoutDashboard,
    Table2,
    Network,
    Boxes,
    FileCode2,
    Binary,
    FileText,
    Image,
    BookOpen,
    Sigma,
    Search,
    PanelsTopLeft,
    Gauge,
    Cloud,
    Brackets,
    ServerCog,
} from "lucide-react";


const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", icon: Code2 },
            { name: "C++", icon: Brackets },
            { name: "C", icon: Terminal },
            { name: "Java", icon: Code2 },
            { name: "JavaScript", icon: FileCode2 },
        ],
    },

    {
        title: "Web Technologies",
        skills: [
            { name: "HTML", icon: Globe },
            { name: "CSS", icon: Palette },
            { name: "React.js", icon: PanelsTopLeft },
            { name: "Next.js", icon: Layers },
            { name: "Tailwind CSS", icon: LayoutDashboard },
            { name: "FastAPI", icon: ServerCog },
            { name: "REST APIs", icon: Workflow },
        ],
    },

    {
        title: "Data Science & Analytics",
        skills: [
            { name: "Machine Learning", icon: Brain },
            { name: "Deep Learning", icon: Cpu },
            { name: "Statistics", icon: Sigma },
            { name: "Data Analysis", icon: BarChart3 },
            { name: "EDA", icon: Search },
        ],
    },

    {
        title: "Libraries & Frameworks",
        skills: [
            { name: "NumPy", icon: Binary },
            { name: "Pandas", icon: Table2 },
            { name: "Matplotlib", icon: BarChart3 },
            { name: "Seaborn", icon: BarChart3 },
            { name: "Scikit-learn", icon: Gauge },
            { name: "TensorFlow", icon: Network },
            { name: "Keras", icon: Layers },
        ],
    },

    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: Database },
            { name: "PostgreSQL", icon: Database },
            { name: "SQLite", icon: Database },
        ],
    },

    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: GitBranch },
            { name: "Google Colab", icon: Cloud },
            { name: "Jupyter Notebook", icon: NotebookPen },
            { name: "VS Code", icon: Monitor },
            { name: "Power BI", icon: LayoutDashboard },
            { name: "Tableau", icon: BarChart3 },
        ],
    },

    {
        title: "Core Concepts",
        skills: [
            {
                name: "Data Structures & Algorithms (DSA)",
                icon: Brackets,
            },
            {
                name: "Object-Oriented Programming (OOP)",
                icon: Boxes,
            },
            {
                name: "Computer Networks (CN)",
                icon: Network,
            },
            {
                name: "Operating Systems (OS)",
                icon: Cpu,
            },
            {
                name: "Database Management System (DBMS)",
                icon: Database,
            },
        ],
    },

    {
        title: "Design & Productivity",
        skills: [
            {
                name: "MS Office Suite",
                icon: FileText,
            },
            {
                name: "Adobe Photoshop",
                icon: Image,
            },
            {
                name: "Canva",
                icon: Palette,
            },
            {
                name: "Overleaf",
                icon: BookOpen,
            },
        ],
    },
];


function SkillChip({ skill }) {
    const Icon = skill.icon;

    return (
        <div
            className="
                group/chip
                inline-flex
                cursor-default
                items-center
                gap-2.5
                rounded-xl
                border
                border-blue-100/80
                bg-white/65
                px-3
                py-2
                text-sm
                font-medium
                text-zinc-700
                shadow-[0_2px_12px_rgba(37,99,235,0.035)]
                backdrop-blur-sm
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-blue-300/80
                hover:bg-blue-50/80
                hover:text-blue-600
                hover:shadow-[0_8px_22px_rgba(59,130,246,0.12)]

                dark:border-blue-400/[0.10]
                dark:bg-blue-400/[0.025]
                dark:text-zinc-300

                dark:hover:border-blue-400/30
                dark:hover:bg-blue-400/[0.075]
                dark:hover:text-blue-300
                dark:hover:shadow-[0_8px_25px_rgba(59,130,246,0.14)]
            "
        >
            <span
                className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-200/70
                    bg-zinc-100/80
                    text-zinc-600
                    shadow-sm
                    transition-all
                    duration-300
                    ease-out

                    group-hover/chip:scale-110
                    group-hover/chip:border-blue-200
                    group-hover/chip:bg-blue-100
                    group-hover/chip:text-blue-600
                    group-hover/chip:shadow-[0_0_12px_rgba(59,130,246,0.15)]

                    dark:border-white/[0.06]
                    dark:bg-white/[0.055]
                    dark:text-zinc-400

                    dark:group-hover/chip:border-blue-400/20
                    dark:group-hover/chip:bg-blue-400/10
                    dark:group-hover/chip:text-blue-400
                    dark:group-hover/chip:shadow-[0_0_14px_rgba(59,130,246,0.18)]
                "
            >
                <Icon
                    className="h-[17px] w-[17px]"
                    strokeWidth={1.8}
                />
            </span>

            <span className="whitespace-nowrap">
                {skill.name}
            </span>
        </div>
    );
}


export default function Skills() {
    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                px-5
                py-14
                sm:px-8
                sm:py-16
            "
        >

            {/* =========================================================
                BACKGROUND EFFECTS
            ========================================================== */}

            {/* Left blue ambient glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-44
                    top-16
                    h-[26rem]
                    w-[26rem]
                    rounded-full
                    bg-blue-500/[0.055]
                    blur-[120px]
                    dark:bg-blue-500/[0.10]
                "
                aria-hidden="true"
            />

            {/* Right cyan glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-44
                    bottom-0
                    h-[28rem]
                    w-[28rem]
                    rounded-full
                    bg-cyan-400/[0.045]
                    blur-[130px]
                    dark:bg-cyan-500/[0.075]
                "
                aria-hidden="true"
            />

            {/* Center blue glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[24rem]
                    w-[24rem]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-400/[0.025]
                    blur-[120px]
                    dark:bg-blue-500/[0.045]
                "
                aria-hidden="true"
            />

            {/* Subtle grid */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.018]
                    [background-image:linear-gradient(rgba(59,130,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.8)_1px,transparent_1px)]
                    [background-size:72px_72px]
                    [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]
                    dark:opacity-[0.028]
                "
                aria-hidden="true"
            />


            {/* =========================================================
                CONTENT
            ========================================================== */}

            <div className="relative mx-auto w-full max-w-5xl">

                {/* Section Heading */}
                <div className="mb-10">

                    <div className="flex items-center gap-3">

                        <span
                            className="
                                h-[2px]
                                w-9
                                rounded-full
                                bg-gradient-to-r
                                from-blue-500
                                to-cyan-400
                                shadow-[0_0_10px_rgba(59,130,246,0.45)]
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
                            Skills
                        </h2>

                    </div>

                    {/* Divider */}
                    <div
                        className="
                            relative
                            mt-3
                            h-px
                            w-full
                            overflow-hidden
                            bg-gradient-to-r
                            from-blue-500/40
                            via-blue-200/50
                            to-transparent
                            dark:from-blue-400/45
                            dark:via-blue-400/10
                            dark:to-transparent
                        "
                    >
                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-24
                                bg-gradient-to-r
                                from-blue-500
                                to-transparent
                                blur-[1px]
                            "
                        />
                    </div>

                </div>


                {/* Skill Categories */}
                <div className="grid gap-5 md:grid-cols-2">

                    {skillCategories.map((category, index) => (

                        <div
                            key={category.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-blue-100/70
                                bg-white/55
                                p-5
                                shadow-[0_4px_25px_rgba(37,99,235,0.035)]
                                backdrop-blur-md
                                transition-all
                                duration-500
                                ease-out

                                hover:-translate-y-1.5
                                hover:border-blue-300/80
                                hover:bg-white/70
                                hover:shadow-[0_18px_40px_rgba(37,99,235,0.10)]

                                dark:border-blue-400/[0.09]
                                dark:bg-blue-950/[0.08]

                                dark:hover:border-blue-400/25
                                dark:hover:bg-blue-900/[0.10]
                                dark:hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]
                            "
                        >

                            {/* Top Glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-16
                                    -top-20
                                    h-44
                                    w-44
                                    rounded-full
                                    bg-blue-400/[0.08]
                                    blur-3xl
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                    dark:bg-blue-400/[0.12]
                                "
                                aria-hidden="true"
                            />

                            {/* Corner Shine */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-0
                                    top-0
                                    h-px
                                    w-32
                                    bg-gradient-to-l
                                    from-blue-400/50
                                    to-transparent
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                                aria-hidden="true"
                            />


                            {/* Category Header */}
                            <div
                                className="
                                    relative
                                    mb-5
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        tracking-tight
                                        text-zinc-900
                                        transition-colors
                                        duration-300
                                        group-hover:text-blue-700
                                        dark:text-white
                                        dark:group-hover:text-blue-300
                                    "
                                >
                                    {category.title}
                                </h3>


                                <span
                                    className="
                                        flex
                                        h-7
                                        min-w-7
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-blue-100
                                        bg-blue-50/70
                                        px-1.5
                                        text-[10px]
                                        font-bold
                                        tracking-wider
                                        text-blue-500
                                        shadow-sm
                                        transition-all
                                        duration-300

                                        group-hover:border-blue-300
                                        group-hover:bg-blue-100
                                        group-hover:shadow-[0_0_14px_rgba(59,130,246,0.15)]

                                        dark:border-blue-400/10
                                        dark:bg-blue-400/[0.06]
                                        dark:text-blue-400

                                        dark:group-hover:border-blue-400/25
                                        dark:group-hover:bg-blue-400/10
                                        dark:group-hover:shadow-[0_0_16px_rgba(59,130,246,0.18)]
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            </div>


                            {/* Skills */}
                            <div
                                className="
                                    relative
                                    flex
                                    flex-wrap
                                    gap-2.5
                                "
                            >

                                {category.skills.map((skill) => (

                                    <SkillChip
                                        key={skill.name}
                                        skill={skill}
                                    />

                                ))}

                            </div>


                            {/* Bottom Accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-5
                                    right-5
                                    h-[2px]
                                    origin-left
                                    scale-x-0
                                    rounded-full
                                    bg-gradient-to-r
                                    from-blue-500
                                    via-cyan-400
                                    to-indigo-500
                                    opacity-80
                                    shadow-[0_0_10px_rgba(59,130,246,0.35)]
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-x-100
                                "
                                aria-hidden="true"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}