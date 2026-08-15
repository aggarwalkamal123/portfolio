import {
    Mail,
    MessageCircle,
    Code2,
    ArrowUpRight,
    Camera,
} from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/aggarwalkamal123",
        icon: Code2,
    },
    {
        name: "LinkedIn",
        href: "https://in.linkedin.com/in/kamal-aggarwal-18923127a",
        textIcon: "in",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/+918595457613",
        icon: MessageCircle,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: Camera,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-28 px-5 py-14 sm:px-8 sm:py-16"
        >
            <div className="mx-auto w-full max-w-5xl">

                {/* Section Heading */}
                <div className="mb-12">
                    <div className="flex items-center gap-4">
                        <span
                            aria-hidden="true"
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
                            Contact
                        </h2>
                    </div>

                    {/* Divider */}
                    <div
                        aria-hidden="true"
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

                {/* Contact Content */}
                <div className="flex flex-col items-center text-center">

                    {/* Get In Touch */}
                    <h3
                        className="
                            text-2xl
                            font-bold
                            leading-snug
                            text-zinc-900
                            dark:text-white
                            sm:text-3xl
                        "
                    >
                        Get in Touch
                    </h3>

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-2xl
                            text-[15px]
                            leading-6
                            text-zinc-600
                            dark:text-zinc-300
                            sm:text-base
                        "
                    >
                        Feel free to reach out for collaborations or just a
                        friendly chat!
                    </p>

                    {/* Email */}
                    <a
                        href="mailto:aggarwalkamal782@gmail.com"
                        className="
                            group
                            mt-6
                            inline-flex
                            items-center
                            gap-2.5
                            text-base
                            font-semibold
                            text-zinc-800
                            transition-all
                            duration-300
                            hover:text-blue-600
                            dark:text-zinc-200
                            dark:hover:text-blue-400
                            sm:text-lg
                        "
                    >
                        <Mail
                            size={20}
                            strokeWidth={1.8}
                            aria-hidden="true"
                            className="
                                text-blue-500
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                dark:text-blue-400
                            "
                        />

                        <span>aggarwalkamal782@gmail.com</span>
                    </a>

                    {/* Social Buttons */}
                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit my ${social.name} profile`}
                                    className="
                                        group
                                        relative
                                        inline-flex
                                        items-center
                                        gap-2.5
                                        overflow-hidden
                                        rounded-md
                                        border
                                        border-zinc-200
                                        bg-zinc-50
                                        px-3.5
                                        py-2
                                        text-sm
                                        font-medium
                                        text-zinc-600
                                        transition-all
                                        duration-300

                                        hover:-translate-y-0.5
                                        hover:border-blue-300
                                        hover:bg-blue-50
                                        hover:text-blue-600
                                        hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]

                                        dark:border-white/10
                                        dark:bg-white/[0.04]
                                        dark:text-zinc-400
                                        dark:hover:border-blue-400/30
                                        dark:hover:bg-blue-400/[0.07]
                                        dark:hover:text-blue-400
                                        dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]
                                    "
                                >
                                    {/* Subtle Hover Glow */}
                                    <span
                                        aria-hidden="true"
                                        className="
                                            pointer-events-none
                                            absolute
                                            -left-8
                                            top-1/2
                                            h-16
                                            w-16
                                            -translate-y-1/2
                                            rounded-full
                                            bg-blue-400/10
                                            blur-2xl
                                            opacity-0
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        "
                                    />

                                    {/* Icon */}
                                    {Icon ? (
                                        <Icon
                                            size={17}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                            className="
                                                relative
                                                shrink-0
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                            "
                                        />
                                    ) : (
                                        <span
                                            aria-hidden="true"
                                            className="
                                                relative
                                                flex
                                                h-[17px]
                                                w-[17px]
                                                items-center
                                                justify-center
                                                text-[14px]
                                                font-bold
                                                leading-none
                                            "
                                        >
                                            {social.textIcon}
                                        </span>
                                    )}

                                    {/* Name */}
                                    <span className="relative">
                                        {social.name}
                                    </span>

                                    {/* Arrow */}
                                    <ArrowUpRight
                                        size={13}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                        className="
                                            relative
                                            opacity-40
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                            group-hover:opacity-100
                                        "
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}