import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brand";
import TechOrbit from "@/components/TechOrbit";
import profile from "@/assets/mehedi.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="max-w-7xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        {/* PHOTO + ORBIT — order-1 on mobile, order-2 on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] aspect-square flex items-center justify-center order-1 lg:order-2"
        >
          {/* Soft glow */}
          <div className="absolute inset-10 rounded-full bg-gradient-primary opacity-25 blur-3xl animate-pulse" />

          {/* Decorative dashed rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/25"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[18%] rounded-full border border-secondary/25"
          />

          {/* Orbiting tech logos — sit just outside the photo */}
          <TechOrbit radiusRatio={0.46} duration={36} />

          {/* Profile photo */}
          <div className="relative size-44 sm:size-52 md:size-60 rounded-full p-[3px] bg-gradient-primary shadow-elegant">
            <div className="size-full rounded-full overflow-hidden bg-card ring-4 ring-background">
              <img
                src={profile}
                alt="Mehedi Hasan — Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Status chip */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 font-mono text-[10px] sm:text-xs whitespace-nowrap z-10"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">currently</span>
              <span className="text-primary">building.</span>
            </span>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 tracking-widest"
          >
            // hello, my name is
          </motion.p>

          {/* Signature-style name on a single line */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-signature text-gradient leading-[0.9] whitespace-nowrap"
            style={{ fontSize: "clamp(3.25rem, 11vw, 9rem)" }}
          >
            Mehedi Hasan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-3 h-px w-32 mx-auto lg:mx-0 bg-gradient-primary origin-left"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I design, engineer and ship production-grade web products —
            translating ideas into fast, scalable interfaces backed by
            reliable, well-architected systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass hover:border-primary transition-all text-sm sm:text-base"
            >
              Hire Me →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-9 flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            {[
              { icon: GithubIcon, href: "https://github.com" },
              { icon: LinkedinIcon, href: "https://linkedin.com" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="size-10 sm:size-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
