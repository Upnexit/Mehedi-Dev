import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Nimbus Commerce",
    tagline: "Headless e-commerce platform",
    description:
      "A full-featured e-commerce stack with Stripe payments, real-time inventory, and a custom admin dashboard. Built for speed.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    accent: "from-cyan-400/40 to-violet-500/40",
  },
  {
    title: "PulseBoard",
    tagline: "Realtime analytics SaaS",
    description:
      "A multi-tenant analytics dashboard with WebSocket streams, custom charting, and role-based access. Used by 200+ teams.",
    tech: ["React", "Node.js", "Redis", "D3.js"],
    accent: "from-violet-500/40 to-cyan-400/40",
  },
  {
    title: "CodeNest",
    tagline: "Collaborative IDE in the browser",
    description:
      "A browser-based code editor with live collaboration, instant previews, and integrated terminals — powered by WebContainers.",
    tech: ["TypeScript", "WebRTC", "Monaco", "Docker"],
    accent: "from-cyan-400/30 to-emerald-400/30",
  },
  {
    title: "Lumen Notes",
    tagline: "AI-first notebook",
    description:
      "A markdown notebook with AI summaries, semantic search, and beautiful focus mode. End-to-end encrypted.",
    tech: ["React", "Supabase", "OpenAI", "Tiptap"],
    accent: "from-violet-500/30 to-pink-400/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest">
            ◆ 03 / SELECTED WORK
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-14">
            Things I've <span className="text-gradient">built</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all hover:shadow-elegant"
            >
              <div
                className={`absolute -top-20 -right-20 size-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50 group-hover:opacity-90 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs text-muted-foreground">
                    PROJECT / 0{i + 1}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
                      aria-label="Source"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href="#"
                      className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
                      aria-label="Live site"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                  {p.title}
                </h3>
                <p className="text-primary font-mono text-sm mb-4">
                  {p.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-muted/50 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
