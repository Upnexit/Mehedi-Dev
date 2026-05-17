import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import SectionShell from "./SectionShell";

const groups = [
  {
    title: "Frontend",
    Icon: Layout,
    tint: "from-cyan-400/40 via-sky-500/20 to-transparent",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    Icon: Server,
    tint: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Cloud",
    Icon: Wrench,
    tint: "from-emerald-400/40 via-cyan-500/20 to-transparent",
    items: ["Git & GitHub", "Docker", "AWS", "Vercel", "Supabase", "Figma"],
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="02 / TECH STACK"
      title={
        <>
          Tools I reach for, <br className="hidden sm:block" />
          <span className="font-signature text-gradient inline-block leading-[0.95]" style={{ fontSize: "1.15em" }}>
            every day
          </span>
          .
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: gi * 0.12 }}
            style={{ transformPerspective: 1000 }}
            whileHover={{ y: -8, rotateY: 4 }}
            className="relative glass rounded-3xl p-7 md:p-8 overflow-hidden group"
          >
            <div
              className={`absolute -top-20 -right-20 size-56 rounded-full bg-gradient-to-br ${g.tint} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="size-11 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                  <g.Icon size={20} />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  / 0{gi + 1}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-5">
                {g.title}
              </h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-gradient-primary shrink-0" />
                    <span className="hover:text-foreground transition-colors truncate">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
