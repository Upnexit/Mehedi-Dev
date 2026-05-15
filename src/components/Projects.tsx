import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/Brand";
import SectionShell from "./SectionShell";

const projects = [
  {
    title: "Nimbus Commerce",
    tagline: "Headless e-commerce platform",
    description:
      "Production-grade storefront with Stripe checkout, real-time inventory, and a custom admin. Tuned for sub-second page loads.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    accent: "from-cyan-400/50 via-sky-500/30 to-violet-500/40",
  },
  {
    title: "PulseBoard",
    tagline: "Realtime analytics SaaS",
    description:
      "Multi-tenant analytics with WebSocket streams, custom charting, and role-based access — currently used by 200+ teams.",
    tech: ["React", "Node.js", "Redis", "D3.js"],
    accent: "from-violet-500/50 via-fuchsia-500/30 to-pink-400/30",
  },
  {
    title: "CodeNest",
    tagline: "Collaborative IDE in the browser",
    description:
      "Browser-based code editor with live collaboration, instant previews and integrated terminals — powered by WebContainers.",
    tech: ["TypeScript", "WebRTC", "Monaco", "Docker"],
    accent: "from-emerald-400/50 via-cyan-500/30 to-sky-500/30",
  },
  {
    title: "Lumen Notes",
    tagline: "AI-first notebook",
    description:
      "Markdown notebook with AI summaries, semantic search and a beautiful focus mode. End-to-end encrypted by default.",
    tech: ["React", "Supabase", "OpenAI", "Tiptap"],
    accent: "from-amber-400/40 via-pink-400/30 to-violet-500/40",
  },
];

export default function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="03 / SELECTED WORK"
      title={
        <>
          Recent projects, <br className="hidden sm:block" />
          shipped with <span className="text-gradient">intent</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 60, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.15 }}
            style={{ transformPerspective: 1200 }}
            whileHover={{ y: -10, rotateY: i % 2 === 0 ? 3 : -3 }}
            className="group relative glass rounded-3xl p-7 md:p-8 overflow-hidden"
          >
            <div
              className={`absolute -top-24 -right-24 size-72 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-95 transition-opacity duration-500`}
            />
            <div
              className={`absolute -bottom-32 -left-24 size-72 rounded-full bg-gradient-to-tr ${p.accent} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  PROJECT / 0{i + 1}
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
                    aria-label="Source code"
                  >
                    <GithubIcon size={14} />
                  </a>
                  <a
                    href="#"
                    className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-1.5">
                {p.title}
              </h3>
              <p className="text-primary font-mono text-xs sm:text-sm mb-4">
                {p.tagline}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[11px] font-mono bg-muted/40 text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
