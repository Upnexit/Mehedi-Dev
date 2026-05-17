import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Rocket,
  Users,
  Sparkles,
  Globe,
  ShieldCheck,
} from "lucide-react";
import SectionShell from "./SectionShell";

const stats = [
  { value: "2024", label: "Founded", Icon: Rocket },
  { value: "10+", label: "Team members", Icon: Users },
  { value: "25+", label: "Products shipped", Icon: Sparkles },
  { value: "100%", label: "Client-first", Icon: ShieldCheck },
];

const services = [
  {
    title: "Web & SaaS Development",
    text: "Production-grade web apps, dashboards, and SaaS platforms built with modern stacks.",
  },
  {
    title: "Brand & Product Design",
    text: "Identity systems, UI/UX and design systems crafted to feel premium and stay consistent.",
  },
  {
    title: "Cloud & DevOps",
    text: "Scalable infrastructure, CI/CD, and performance tuning for fast, reliable products.",
  },
  {
    title: "AI Integrations",
    text: "Pragmatic AI features — assistants, automations and data tooling — wired into real workflows.",
  },
];

export default function Company() {
  return (
    <SectionShell
      id="company"
      eyebrow="04 / FOUNDER & COMPANY"
      title={
        <>
          Building <span className="text-gradient">Upnex&nbsp;IT</span> — <br className="hidden sm:block" />
          a studio for ambitious digital products.
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
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-violet-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-400/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14">
          {/* Left — story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-5">
              <Building2 size={12} />
              FOUNDER · UPNEX IT
            </div>

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight mb-5">
              I founded{" "}
              <span className="text-gradient">Upnex&nbsp;IT</span> to ship
              software that actually feels human.
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              Upnex IT is a small but obsessive product studio I started to help
              founders, agencies and growing teams launch web platforms,
              dashboards and SaaS products without the usual chaos. We pair
              clean engineering with thoughtful design — and stay accountable
              from the first call to long after launch.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
              From early-stage MVPs to scale-ready systems, every project we
              touch is built around three things: performance, polish, and a
              long-term partnership with the client.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/search?q=Upnex+IT"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.02] transition-transform"
              >
                <Globe size={16} />
                Visit Upnex IT
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:shadow-glow transition-all"
              >
                Work with the studio
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

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {services.map((srv, i) => (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="glass rounded-2xl p-4 sm:p-5"
                >
                  <div className="text-sm font-semibold mb-1.5">
                    {srv.title}
                  </div>
                  <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                    {srv.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
