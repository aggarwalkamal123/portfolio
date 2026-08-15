const experiences = [
    {
        number: "01",
        role: "Intern",
        title: "Software Development Intern",
        organization:
            "AICTE IDEA Lab, Guru Gobind Singh Indraprastha University",
        type: "Internship · Dwarka, Delhi, India · Hybrid",
        date: "Jun 2026 - Jul 2026",
        skills: [
            "Next.js",
            "React.js",
            "FastAPI",
            "Python",
            "SQLite",
            "Tailwind CSS",
            "Recharts",
            "Google Gemini API",
        ],
        description: [
            "Contributed to the development of a full-stack AI-powered decision support system for sustainable agriculture.",
            "Worked on data processing, risk assessment workflows, interactive dashboards, data visualizations, and AI-powered recommendations.",
            "Developed frontend and backend components using Next.js, React, FastAPI, Python, SQLite, and Tailwind CSS.",
        ],
        badge: "IDEA",
    },

    {
        number: "02",
        role: "Intern",
        title: "Data Analytics Intern",
        organization: "IBM SkillsBuild · CSRBOX",
        type: "Internship · India · Remote",
        date: "Jun 2026 - Jul 2026",
        skills: [
            "Python",
            "Tableau",
            "Data Cleaning",
            "EDA",
            "Statistics",
            "Data Visualization",
            "Feature Engineering",
        ],
        description: [
            "Completed the IBM SkillsBuild Academic Internship Program in Big Data & Business Management.",
            "Performed data cleaning, exploratory data analysis, statistical analysis, feature engineering, and visualization on historical datasets.",
            "Created interactive dashboards and visual reports to communicate trends, patterns, and data-driven insights.",
        ],
        badge: "IBM",
    },

    {
        number: "03",
        role: "Intern",
        title: "Machine Learning Intern",
        organization:
            "AICTE IDEA Lab, Guru Gobind Singh Indraprastha University",
        type: "Internship · Dwarka, Delhi, India · Hybrid",
        date: "Jun 2025 - Aug 2025",
        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Transfer Learning",
        ],
        description: [
            "Worked on developing deep learning models for image-based prediction using real RGB dental images.",
            "Performed image preprocessing, segmentation, dataset preparation, analysis, and model experimentation.",
            "Applied transfer learning techniques and evaluated multiple deep learning architectures for prediction performance.",
        ],
        badge: "IDEA",
    },

    {
        number: "04",
        role: "Intern",
        title: "Frontend Development Intern",
        organization: "IBM SkillsBuild · CSRBOX",
        type: "Internship · India · Remote",
        date: "Jun 2025 - Aug 2025",
        skills: [
            "Next.js",
            "React.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Leaflet.js",
            "Recharts",
        ],
        description: [
            "Completed a project-based internship focused on modern frontend web development and responsive application design.",
            "Developed interactive user interfaces with data visualizations, maps, and sustainability-focused features.",
            "Worked with React.js, Next.js, Tailwind CSS, and modern frontend development practices to build responsive web applications.",
        ],
        badge: "IBM",
    },

    {
        number: "05",
        role: "Club Lead",
        title: "Secretary of Web Development",
        organization: "IDEA Club, GGSIPU",
        type: "Student Leadership · Delhi, India",
        date: "Sep 2025 - Present",
        skills: [
            "Web Development",
            "React.js",
            "Next.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitHub",
        ],
        description: [
            "Serve as Secretary of Web Development at IDEA Club, GGSIPU, contributing to the club's web development initiatives.",
            "Lead and coordinate web development activities while working on modern web-based solutions for the club and IDEA Lab.",
            "Collaborate with team members to plan, develop, and maintain responsive and user-focused web experiences.",
        ],
        badge: "IDEA",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="scroll-mt-28 px-5 py-14 sm:px-8 sm:py-16"
        >
            <div className="mx-auto w-full max-w-5xl">

                {/* Section Heading */}
                <div className="mb-12">
                    <div className="flex items-center gap-4">

                        {/* Blue Accent */}
                        <span
                            className="
                                h-[2px]
                                w-12
                                shrink-0
                                rounded-full
                                bg-blue-500
                                shadow-[0_0_10px_rgba(59,130,246,0.7)]
                                dark:bg-blue-400
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
                            Experience
                        </h2>
                    </div>

                    {/* Divider */}
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

                {/* Timeline */}
                <div className="relative">

                    {/* =================================================
                        SOLID TIMELINE LINE
                        ================================================= */}
                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            bottom-0
                            left-6
                            top-0
                            z-0
                            w-[2px]
                            bg-zinc-300
                            dark:bg-zinc-700
                        "
                    />

                    <div className="relative z-10 space-y-10">
                        {experiences.map((experience) => (
                            <article
                                key={experience.number}
                                className="
                                    group
                                    relative
                                    pl-16
                                    sm:pl-[76px]
                                "
                            >

                                {/* =================================================
                                    TIMELINE BADGE
                                    ================================================= */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-4
                                        z-20
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-zinc-300
                                        bg-white
                                        text-[9px]
                                        font-bold
                                        tracking-wider
                                        text-zinc-600
                                        shadow-sm
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:border-blue-400
                                        group-hover:text-blue-500
                                        group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                                        dark:border-white/20
                                        dark:bg-zinc-950
                                        dark:text-zinc-400
                                        dark:group-hover:border-blue-400
                                        dark:group-hover:bg-zinc-950
                                        dark:group-hover:text-blue-400
                                        dark:group-hover:shadow-[0_0_28px_rgba(59,130,246,0.3)]
                                    "
                                >
                                    {experience.badge}
                                </div>

                                {/* Experience Card */}
                                <div
                                    className="
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-zinc-200
                                        bg-white
                                        p-6
                                        shadow-sm
                                        transition-all
                                        duration-500
                                        group-hover:-translate-y-1
                                        group-hover:border-blue-400/50
                                        group-hover:shadow-[0_15px_45px_rgba(59,130,246,0.12)]
                                        dark:border-white/[0.08]
                                        dark:bg-white/[0.035]
                                        dark:group-hover:border-blue-400/40
                                        dark:group-hover:bg-white/[0.045]
                                        dark:group-hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)]
                                        sm:p-7
                                    "
                                >

                                    {/* Top Right Glow */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-24
                                            -top-24
                                            h-48
                                            w-48
                                            rounded-full
                                            bg-blue-500/[0.05]
                                            blur-3xl
                                            opacity-0
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                            dark:bg-blue-400/[0.08]
                                        "
                                    />

                                    {/* Bottom Left Glow */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -bottom-24
                                            -left-24
                                            h-48
                                            w-48
                                            rounded-full
                                            bg-blue-500/[0.035]
                                            blur-3xl
                                            opacity-0
                                            transition-opacity
                                            duration-700
                                            group-hover:opacity-100
                                            dark:bg-blue-400/[0.05]
                                        "
                                    />

                                    {/* Header */}
                                    <div
                                        className="
                                            relative
                                            mb-4
                                            flex
                                            flex-col
                                            gap-3
                                            sm:flex-row
                                            sm:items-start
                                            sm:justify-between
                                        "
                                    >
                                        <div>

                                            {/* Role */}
                                            <p
                                                className="
                                                    mb-1
                                                    text-xs
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.18em]
                                                    text-blue-600
                                                    dark:text-blue-400
                                                "
                                            >
                                                {experience.role}
                                            </p>

                                            {/* Position */}
                                            <h3
                                                className="
                                                    text-xl
                                                    font-bold
                                                    leading-snug
                                                    text-zinc-900
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-blue-600
                                                    dark:text-white
                                                    dark:group-hover:text-blue-400
                                                "
                                            >
                                                {experience.title}
                                            </h3>
                                        </div>

                                        {/* Date */}
                                        <span
                                            className="
                                                shrink-0
                                                text-sm
                                                font-medium
                                                text-zinc-500
                                                dark:text-zinc-400
                                            "
                                        >
                                            {experience.date}
                                        </span>
                                    </div>

                                    {/* Organization */}
                                    <div
                                        className="
                                            relative
                                            mb-5
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-x-2
                                            gap-y-1
                                            text-sm
                                        "
                                    >
                                        <span
                                            className="
                                                font-semibold
                                                text-blue-500
                                                dark:text-yellow-400
                                            "
                                        >
                                            {experience.organization}
                                        </span>

                                        <span
                                            className="
                                                text-blue-500
                                                dark:text-zinc-500
                                            "
                                        >
                                            ·
                                        </span>

                                        <span
                                            className="
                                                text-zinc-500
                                                dark:text-zinc-400
                                            "
                                        >
                                            {experience.type}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <ul
                                        className="
                                            relative
                                            mb-6
                                            space-y-2
                                            pl-5
                                            text-[15px]
                                            leading-6
                                            text-zinc-600
                                            dark:text-zinc-300
                                        "
                                    >
                                        {experience.description.map(
                                            (point, index) => (
                                                <li
                                                    key={index}
                                                    className="
                                                        relative
                                                        before:absolute
                                                        before:-left-4
                                                        before:top-[0.65rem]
                                                        before:h-1.5
                                                        before:w-1.5
                                                        before:rounded-full
                                                        before:bg-blue-500
                                                        dark:before:bg-blue-400
                                                    "
                                                >
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* Skills */}
                                    <div
                                        className="
                                            relative
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >
                                        {experience.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="
                                                    rounded-md
                                                    border
                                                    border-zinc-200
                                                    bg-zinc-50
                                                    px-2.5
                                                    py-1
                                                    text-[11px]
                                                    font-medium
                                                    text-zinc-600
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-0.5
                                                    hover:border-blue-300
                                                    hover:bg-blue-50
                                                    hover:text-blue-600
                                                    hover:shadow-[0_0_12px_rgba(59,130,246,0.12)]
                                                    dark:border-white/10
                                                    dark:bg-white/[0.04]
                                                    dark:text-zinc-400
                                                    dark:hover:border-blue-400/30
                                                    dark:hover:bg-blue-400/[0.07]
                                                    dark:hover:text-blue-400
                                                    dark:hover:shadow-[0_0_12px_rgba(59,130,246,0.12)]
                                                "
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}