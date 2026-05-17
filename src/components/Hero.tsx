import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brand";
import TechOrbit, { type LogoItem } from "@/components/TechOrbit";
import RoleRotator from "@/components/RoleRotator";
import profile from "@/assets/mehedi.jpg";
import {
  VSCodeLogo,
  FigmaLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  TailwindLogo,
  NextLogo,
  GitHubLogo,
  PythonLogo,
  JavaScriptLogo,
  HTML5Logo,
  CSS3Logo,
  GraphQLLogo,
  DockerLogo,
  ViteLogo,
} from "@/components/icons/TechLogos";

// Each main tech has its own satellite — a smaller logo that orbits it
const orbitLogos: LogoItem[] = [
  {
    Icon: VSCodeLogo,
    label: "VS Code",
    satellite: { Icon: ViteLogo, label: "Vite", duration: 5 },
  },
  {
    Icon: ReactLogo,
    label: "React",
    satellite: { Icon: JavaScriptLogo, label: "JavaScript", duration: 6 },
  },
  {
    Icon: FigmaLogo,
    label: "Figma",
    satellite: { Icon: HTML5Logo, label: "HTML5", duration: 5.5, reverse: true },
  },
  {
    Icon: TypeScriptLogo,
    label: "TypeScript",
    satellite: { Icon: CSS3Logo, label: "CSS3", duration: 6.5 },
  },
  {
    Icon: NodeLogo,
    label: "Node.js",
    satellite: { Icon: DockerLogo, label: "Docker", duration: 7, reverse: true },
  },
  {
    Icon: TailwindLogo,
    label: "Tailwind CSS",
    satellite: { Icon: GraphQLLogo, label: "GraphQL", duration: 6 },
  },
  {
    Icon: NextLogo,
    label: "Next.js",
    satellite: { Icon: GitHubLogo, label: "GitHub", duration: 5.5, reverse: true },
  },
  {
    Icon: GitHubLogo,
    label: "GitHub",
    satellite: { Icon: PythonLogo, label: "Python", duration: 6.5 },
  },
];

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
          initial={{ opacity: 0, y: 120, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[26rem] sm:max-w-[32rem] md:max-w-[36rem] aspect-square flex items-center justify-center order-1 lg:order-2"
        >
          {/* Soft glow */}
          <div className="absolute inset-16 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse" />

          {/* Decorative dashed rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/25"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[14%] rounded-full border border-secondary/25"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-6%] rounded-full border border-dashed border-primary/15"
          />

          {/* Orbit — each main logo carries its own satellite */}
          <TechOrbit
            radiusRatio={0.42}
            duration={42}
            logos={orbitLogos}
            chipSize={54}
          />

          {/* Profile photo — bigger, kept crisp, no color filters */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative size-56 sm:size-64 md:size-72 lg:size-80 rounded-full p-[3px] bg-gradient-primary shadow-elegant z-10"
          >
            <div className="size-full rounded-full overflow-hidden bg-card ring-4 ring-background">
              <img
                src={profile}
                alt="Mehedi Hasan — Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                style={{ imageRendering: "auto" }}
                draggable={false}
              />
            </div>
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
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
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

          {/* Rotating "what I'm doing" line for a real, alive feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex justify-center lg:justify-start"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I design, engineer and ship production-grade web products —
            translating ideas into fast, scalable interfaces backed by
            reliable, well-architected systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
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
            transition={{ delay: 1.05 }}
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
