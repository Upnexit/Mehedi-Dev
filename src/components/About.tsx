import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "30+", label: "Projects Shipped" },
  { value: "20+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest">
            ◆ 01 / ABOUT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            A developer who <span className="text-gradient">ships</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a full-stack developer based in Bangladesh. I build web
              applications end-to-end — designing the interface, architecting
              the backend, and shipping production-ready code.
            </p>
            <p>
              My toolkit revolves around <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">Node.js</span>,{" "}
              <span className="text-foreground">TypeScript</span>, and modern
              cloud infra. I care about performance, accessibility, and pixel-
              perfect details.
            </p>
            <p>
              When I'm not coding, I'm exploring new tech, contributing to open
              source, and turning fresh ideas into real products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground font-mono">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
