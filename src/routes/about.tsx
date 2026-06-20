import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import About from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mehedi Hasan, Full Stack Developer" },
      {
        name: "description",
        content:
          "About Mehedi Hasan — a full-stack web developer based in Bangladesh, building fast, scalable and beautifully crafted web products.",
      },
      { property: "og:title", content: "About — Mehedi Hasan" },
      {
        property: "og:description",
        content: "Get to know Mehedi Hasan, a full-stack web developer crafting production-grade products.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2025 — Present",
    role: "Diploma in Electrical Engineering (Running)",
    org: "Bangladesh Polytechnic Institute",
    Icon: GraduationCap,
    text: "Started the Diploma in Electrical Engineering in November 2025. Currently studying — and sharpening my web development craft every single day alongside the coursework.",
  },
  {
    year: "Oct 2025",
    role: "SSC — Science Group",
    org: "Al Helal Islami Academy & College",
    Icon: GraduationCap,
    text: "Completed SSC in the Science group in October 2025 — this is where my deep love for math, logic and technology truly took shape.",
  },
  {
    year: "2019",
    role: "PSC — Primary School Certificate",
    org: "Sonadanga Gopalpur Government Primary School",
    Icon: GraduationCap,
    text: "Completed PSC in 2019 from my village school — the very first steps of a lifelong learning journey.",
  },
];

const values = [
  { Icon: Heart,    title: "Craft over speed", text: "Quality compounds. I sweat the details others skip." },
  { Icon: Briefcase, title: "Own the outcome", text: "I treat your product like equity — not like a ticket queue." },
  { Icon: MapPin,    title: "Remote-friendly",  text: "Bangladesh-based, working with teams worldwide." },
];

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ABOUT ME"
        title={
          <>
            A developer who treats <br className="hidden md:block" />
            every project like <span className="font-signature text-gradient">his own</span>.
          </>
        }
        description="I'm Mehedi Hasan — a full-stack web developer from Bangladesh, partnering with founders and teams to design, engineer and ship production-grade web products."
      />

      {/* Reuse the homepage About block for continuity */}
      <About />

      {/* Values */}
      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 md:p-7"
            >
              <div className="size-10 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow mb-4">
                <v.Icon size={18} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">{v.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            The <span className="text-gradient">journey</span> so far
          </h2>

          <ol className="relative border-l border-border ml-3 space-y-10">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year + t.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="pl-8 relative"
              >
                <span className="absolute -left-[13px] top-1.5 size-6 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                  <t.Icon size={12} />
                </span>
                <div className="font-mono text-xs text-primary mb-1 tracking-widest">{t.year}</div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {t.role} <span className="text-muted-foreground font-normal">· {t.org}</span>
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{t.text}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              Let's work together →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
