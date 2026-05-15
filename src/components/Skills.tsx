import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "Docker", "AWS", "Vercel", "Supabase", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest">
            ◆ 02 / SKILLS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-14">
            Tech I work <span className="text-gradient">with</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass rounded-3xl p-8 hover:shadow-elegant transition-all hover:-translate-y-2 group"
            >
              <div className="font-mono text-xs text-muted-foreground mb-2">
                / 0{gi + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-gradient transition-all">
                {g.title}
              </h3>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-gradient-primary" />
                    <span className="hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
