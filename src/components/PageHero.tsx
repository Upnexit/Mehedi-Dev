import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

/** Shared sub-page hero used by /about, /skills, /projects, /contact. */
export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative pt-36 md:pt-44 pb-12 md:pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-gradient-primary opacity-15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-5"
        >
          <span className="size-1.5 rounded-full bg-gradient-primary" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
