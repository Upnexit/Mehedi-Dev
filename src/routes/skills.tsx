import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Skills from "@/components/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Mehedi Hasan" },
      {
        name: "description",
        content:
          "The full toolbox Mehedi Hasan uses to design, build and ship production-grade web products — frontend, backend, infrastructure and tooling.",
      },
      { property: "og:title", content: "Skills & Tech Stack — Mehedi Hasan" },
      {
        property: "og:description",
        content: "Frontend, backend and cloud tools Mehedi Hasan uses every day.",
      },
    ],
  }),
  component: SkillsPage,
});

const proficiency = [
  { label: "React / Next.js",        value: 95 },
  { label: "TypeScript",             value: 92 },
  { label: "Node.js / Express",      value: 88 },
  { label: "Tailwind CSS / Design",  value: 94 },
  { label: "PostgreSQL / Supabase",  value: 85 },
  { label: "AWS / Vercel / Docker",  value: 80 },
];

const services = [
  {
    title: "Web App Development",
    text: "Production-grade SPAs and SSR apps with React, Next.js and TypeScript — built to scale.",
  },
  {
    title: "API & Backend Engineering",
    text: "Type-safe REST and GraphQL APIs with Node.js, Postgres and modern auth.",
  },
  {
    title: "UI / UX Engineering",
    text: "Design-system thinking, accessibility, motion and pixel-perfect implementation in Figma → code.",
  },
  {
    title: "Performance & SEO",
    text: "Core Web Vitals, edge caching, image pipelines and structured data done right.",
  },
];

function SkillsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="SKILLS & STACK"
        title={
          <>
            The <span className="text-gradient">toolbox</span> behind <br className="hidden md:block" />
            every shipped product.
          </>
        }
        description="A modern full-stack toolkit, refined over years of shipping real products — chosen for speed, type-safety and developer experience."
      />

      <Skills />

      {/* Proficiency bars */}
      <section className="relative px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Proficiency at a <span className="text-gradient">glance</span>
          </h2>

          <div className="space-y-5">
            {proficiency.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{p.label}</span>
                  <span className="font-mono text-muted-foreground">{p.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-primary shadow-glow"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            What I can <span className="text-gradient">build for you</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 md:p-7"
              >
                <div className="font-mono text-[10px] text-primary tracking-widest mb-2">
                  / 0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass hover:shadow-glow transition-all"
            >
              See projects in action →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
