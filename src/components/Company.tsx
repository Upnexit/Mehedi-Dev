import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Rocket,
  Users,
  Sparkles,
  Globe,
  ShieldCheck,
  MapPin,
  Code2,
  Cloud,
  Smartphone,
  LayoutGrid,
  Cpu,
} from "lucide-react";
import SectionShell from "./SectionShell";
import upnexitLogo from "@/assets/upnexit-logo.png";

const stats = [
  { value: "2024", label: "Founded", Icon: Rocket },
  { value: "10+", label: "Team members", Icon: Users },
  { value: "25+", label: "Products shipped", Icon: Sparkles },
  { value: "100%", label: "Client-first", Icon: ShieldCheck },
];

const services = [
  {
    Icon: Code2,
    title: "Custom Software Development",
    text: "Tailor-made web platforms, ERPs and internal tools engineered around your exact business workflow — no off-the-shelf compromises.",
  },
  {
    Icon: LayoutGrid,
    title: "SaaS & Dashboard Products",
    text: "End-to-end SaaS products with multi-tenant architecture, billing, analytics and admin panels ready for real users from day one.",
  },
  {
    Icon: Smartphone,
    title: "Mobile & Cross-Platform Apps",
    text: "Performant Android, iOS and PWA experiences that share one codebase and a consistent, premium feel.",
  },
  {
    Icon: Cloud,
    title: "Cloud, DevOps & Hosting",
    text: "Scalable cloud infrastructure, CI/CD pipelines and managed hosting — secure, observable and built to grow with you.",
  },
  {
    Icon: Cpu,
    title: "AI & Automation",
    text: "Practical AI integrations, chat assistants and workflow automations that remove repetitive work and unlock new revenue.",
  },
  {
    Icon: Globe,
    title: "Branding & UI/UX Design",
    text: "Identity systems, design systems and pixel-perfect interfaces that make your product feel trustworthy and modern.",
  },
];

export default function Company() {
  return (
    <SectionShell
      id="company"
      eyebrow="04 / FOUNDER & COMPANY"
      title={
        <>
          <span className="text-foreground">Founder of the Company</span>{" "}
          <span className="text-gradient">Upnex&nbsp;IT</span>
        </>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-7 md:p-12 overflow-hidden"
      >
        {/* Ambient brand-tinted glows (orange + green from logo) */}
        <div className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-[radial-gradient(circle,_rgba(255,120,40,0.35),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-[radial-gradient(circle,_rgba(20,120,70,0.35),_transparent_70%)] blur-3xl" />

        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14">
          {/* Left — story + logo */}
          <div>
            {/* Logo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 rounded-2xl bg-white/95 backdrop-blur px-5 py-3 mb-6 shadow-elegant border border-white/20"
            >
              <img
                src={upnexitLogo}
                alt="Upnex IT — Custom Software Solution"
                className="h-12 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest">
                <span className="size-1.5 rounded-full bg-gradient-primary" />
                FOUNDER · CEO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest">
                <MapPin size={11} />
                NAOGAON, BANGLADESH
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight mb-5">
              I founded{" "}
              <span className="text-gradient">Upnex&nbsp;IT</span> to deliver
              <span className="italic"> custom software solutions</span> that
              actually move businesses forward.
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              <span className="text-foreground font-semibold">Upnex IT</span>{" "}
              is a Naogaon-based custom software company building web platforms,
              SaaS products, mobile apps and internal tools for founders,
              agencies and growing enterprises. Every line of code we ship is
              written with one goal — to solve a real business problem,
              elegantly.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
              As founder, I lead product strategy, engineering and design
              direction. Our small but obsessive team pairs clean architecture
              with thoughtful UX — so the software we deliver is fast,
              scalable, secure, and a pleasure to use.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/search?q=Upnex+IT"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.02] transition-transform"
              >
                <Globe size={16} />
                Explore Upnex IT
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:shadow-glow transition-all"
              >
                Hire the studio
              </a>
            </div>
          </div>

          {/* Right — stats + services */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative glass rounded-2xl p-4 sm:p-5 overflow-hidden"
                >
                  <s.Icon size={16} className="text-primary mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-gradient leading-none">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="relative mt-10 md:mt-14">
          <div className="flex items-end justify-between mb-5">
            <h4 className="text-lg md:text-xl font-semibold">
              What we build at{" "}
              <span className="text-gradient">Upnex IT</span>
            </h4>
            <span className="hidden sm:inline font-mono text-[10px] text-muted-foreground tracking-widest">
              SERVICES
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {services.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 group"
              >
                <div className="size-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow mb-3">
                  <srv.Icon size={18} />
                </div>
                <div className="text-sm md:text-base font-semibold mb-1.5">
                  {srv.title}
                </div>
                <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                  {srv.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
