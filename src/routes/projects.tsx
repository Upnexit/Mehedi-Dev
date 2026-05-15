import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mehedi Hasan, Full Stack Developer" },
      {
        name: "description",
        content:
          "Selected work and case studies by Mehedi Hasan — production-grade React, Next.js and Node.js products, shipped with intent.",
      },
      { property: "og:title", content: "Projects — Mehedi Hasan" },
      {
        property: "og:description",
        content: "Selected case studies and shipped products by Mehedi Hasan.",
      },
    ],
  }),
  component: ProjectsPage,
});

const caseStudies = [
  {
    name: "Nimbus Commerce",
    role: "Full-stack lead · 2024",
    summary:
      "Re-platformed a legacy Shopify store onto a headless Next.js + Stripe stack. Cut LCP by 62% and lifted conversion by 18%.",
    metrics: [
      { v: "62%", l: "LCP improvement" },
      { v: "18%", l: "Conversion lift" },
      { v: "200k+", l: "MAU at launch" },
    ],
  },
  {
    name: "PulseBoard",
    role: "Founding engineer · 2023",
    summary:
      "Built a multi-tenant realtime analytics dashboard with WebSockets, Postgres and Redis — now used by 200+ teams.",
    metrics: [
      { v: "200+", l: "Teams onboarded" },
      { v: "<100ms", l: "P95 latency" },
      { v: "99.95%", l: "Uptime" },
    ],
  },
  {
    name: "CodeNest",
    role: "Solo build · 2023",
    summary:
      "A browser-based collaborative IDE with WebContainers, Monaco editor and live previews — shipped MVP in 6 weeks.",
    metrics: [
      { v: "6 wk", l: "MVP timeline" },
      { v: "10k+", l: "Sandboxes/mo" },
      { v: "0 ➜ 1", l: "From scratch" },
    ],
  },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="SELECTED WORK"
        title={
          <>
            Projects, shipped <br className="hidden md:block" />
            with <span className="text-gradient">intent</span>.
          </>
        }
        description="A snapshot of recent work — from headless commerce and realtime SaaS to AI-first tools. Each one shipped end-to-end."
      />

      <Projects />

      {/* Case studies */}
      <section className="relative px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Case <span className="text-gradient">studies</span>
          </h2>

          <div className="space-y-5">
            {caseStudies.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass rounded-3xl p-6 md:p-8"
              >
                <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                  <div>
                    <div className="font-mono text-[10px] text-primary tracking-widest mb-2">
                      CASE STUDY / 0{i + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold">{c.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{c.role}</p>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {c.summary}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.l} className="rounded-2xl bg-muted/30 border border-border p-3 md:p-4 text-center">
                        <div className="text-xl md:text-2xl font-bold text-gradient">{m.v}</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              Start your project →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
