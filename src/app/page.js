import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f1f5fb]
        text-zinc-900
        transition-colors
        duration-500
        dark:bg-[#080d18]
        dark:text-zinc-100
      "
    >
      <Navbar />

      <main
        className="
          relative
          overflow-hidden
          bg-[#f1f5fb]
          transition-colors
          duration-500
          dark:bg-[#080d18]
        "
      >
        {/* ================================================== */}
        {/* GLOBAL AMBIENT BACKGROUND */}
        {/* ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {/* ------------------------------------------------ */}
          {/* TOP LEFT BLUE GLOW */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              -left-[180px]
              top-[40px]
              h-[620px]
              w-[620px]
              rounded-full
              bg-blue-500/[0.075]
              blur-[130px]
              dark:bg-blue-500/[0.11]
            "
          />

          {/* ------------------------------------------------ */}
          {/* TOP RIGHT BLUE GLOW */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              -right-[220px]
              top-[80px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-blue-400/[0.06]
              blur-[140px]
              dark:bg-blue-400/[0.085]
            "
          />

          {/* ------------------------------------------------ */}
          {/* CENTER BLUE GLOW */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              left-1/2
              top-[38%]
              h-[700px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.035]
              blur-[160px]
              dark:bg-blue-500/[0.055]
            "
          />

          {/* ------------------------------------------------ */}
          {/* PURPLE / BLUE SECONDARY GLOW */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              -right-[120px]
              top-[55%]
              h-[550px]
              w-[550px]
              rounded-full
              bg-violet-500/[0.035]
              blur-[150px]
              dark:bg-violet-500/[0.05]
            "
          />

          {/* ------------------------------------------------ */}
          {/* BOTTOM LEFT BLUE GLOW */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              -left-[180px]
              bottom-[2%]
              h-[550px]
              w-[550px]
              rounded-full
              bg-blue-500/[0.045]
              blur-[140px]
              dark:bg-blue-600/[0.065]
            "
          />

          {/* ------------------------------------------------ */}
          {/* SUBTLE BLUE HORIZONTAL ATMOSPHERE */}
          {/* ------------------------------------------------ */}

          <div
            className="
              absolute
              left-1/2
              top-[18%]
              h-[1px]
              w-[75%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-400/20
              to-transparent
              blur-[1px]
              dark:via-blue-400/25
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[72%]
              h-[1px]
              w-[65%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-400/15
              to-transparent
              blur-[1px]
              dark:via-blue-400/20
            "
          />
        </div>

        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}