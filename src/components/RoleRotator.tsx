import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  { verb: "Building",  what: "production-grade React apps" },
  { verb: "Designing", what: "pixel-perfect interfaces in Figma" },
  { verb: "Shipping",  what: "scalable Node.js & TypeScript APIs" },
  { verb: "Crafting",  what: "delightful, accessible UX" },
  { verb: "Architecting", what: "full-stack systems on the cloud" },
];

export default function RoleRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const r = roles[i];

  return (
    <div
      className="mt-5 inline-flex items-center gap-2 font-mono text-xs sm:text-sm md:text-base text-muted-foreground"
      aria-live="polite"
    >
      <span className="size-1.5 rounded-full bg-primary animate-pulse shrink-0" />
      <span className="text-primary/80">currently:</span>

      <span className="relative inline-block min-h-[1.4em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={r.verb + r.what}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-block whitespace-nowrap"
          >
            <span className="text-foreground font-semibold">{r.verb}</span>{" "}
            <span className="text-gradient font-semibold">{r.what}</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
