import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
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

      <div className="max-w-7xl w-full grid lg:grid-cols-[1.25fr_1fr] gap-16 lg:gap-10 items-center relative z-10">
        {/* LEFT — text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-xs text-primary mb-7 tracking-widest"
          >
            <Sparkles size={12} /> AVAILABLE FOR FREELANCE & FULL-TIME
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm text-muted-foreground mb-3 tracking-widest"
          >
            // hello, my name is
          </motion.p>

          {/* Signature-style name, single line, auto-fit */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-signature text-gradient leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9.5rem)" }}
          >
            Mehedi Hasan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-2 h-px w-40 mx-auto lg:mx-0 bg-gradient-primary origin-left"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I architect, design and ship production-grade web applications —
            blending pixel-perfect interfaces with rock-solid backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass hover:border-primary transition-all"
            >
              Get in touch →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-4"
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
                className="size-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — profile + orbiting tech logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mx-auto w-full max-w-[28rem] aspect-square flex items-center justify-center"
        >
          {/* Soft glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-primary opacity-25 blur-3xl animate-pulse" />

          {/* Outer dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          />
          {/* Inner solid ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-secondary/30"
          />

          {/* Tech orbits */}
          <TechOrbit radius={170} duration={30} pick={[0, 1, 2, 3]} />
          <TechOrbit radius={120} duration={22} reverse pick={[4, 5, 6, 7]} />

          {/* Profile photo */}
          <div className="relative size-56 sm:size-64 md:size-72 rounded-full p-[3px] bg-gradient-primary shadow-elegant">
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
            className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 font-mono text-xs whitespace-nowrap z-10"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">currently</span>
              <span className="text-primary">building.</span>
            </span>
          </motion.div>
        </motion.div>
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
