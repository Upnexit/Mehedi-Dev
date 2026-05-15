import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";
import SectionShell from "./SectionShell";

const stats = [
  { value: "3+", label: "Years Building", Icon: Code2, tint: "from-cyan-400/30 to-sky-500/20" },
  { value: "30+", label: "Projects Shipped", Icon: Rocket, tint: "from-violet-500/30 to-fuchsia-500/20" },
  { value: "20+", label: "Clients Served", Icon: Users, tint: "from-emerald-400/30 to-cyan-500/20" },
  { value: "100%", label: "Crafted with Care", Icon: Sparkles, tint: "from-amber-400/30 to-pink-500/20" },
];

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="01 / ABOUT ME"
      title={
        <>
          A developer who <span className="text-gradient">ships</span>{" "}
          <span className="font-signature text-gradient">obsessively</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm <span className="text-foreground font-semibold">Mehedi Hasan</span>,
            a full-stack web developer based in Bangladesh. I help startups and
            founders turn early ideas into polished, production-ready products.
          </p>
          <p>
            My toolkit revolves around{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">Next.js</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span>,{" "}
            <span className="text-primary font-medium">Node.js</span> and a
            modern cloud stack. I care about performance budgets, accessibility,
            type-safety, and pixel-perfect details.
          </p>
          <p>
            I treat every project like my own — questioning the brief, sweating
            the edge cases, and shipping work that makes both users and
            stakeholders proud.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformPerspective: 800 }}
              whileHover={{ y: -6, rotateX: -4, rotateY: 4 }}
              className="relative glass rounded-3xl p-5 md:p-6 overflow-hidden group"
            >
              <div
                className={`absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br ${s.tint} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <s.Icon className="text-primary mb-3" size={20} />
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground font-mono">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
