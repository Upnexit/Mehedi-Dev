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
      className="mt-5 w-full max-w-xl font-mono text-xs sm:text-sm md:text-base text-muted-foreground"
      aria-live="polite"
    >
      {/* Static label — never moves */}
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-primary animate-pulse shrink-0" />
        <span className="text-primary/80">currently:</span>
      </div>

      {/* Rotating text — confined to its own row, fixed height, no layout shift */}
      <div className="relative mt-1 h-[1.6em] sm:h-[1.5em] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={r.verb + r.what}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0 flex items-center"
          >
            <span className="truncate">
              <span className="text-foreground font-semibold">{r.verb}</span>{" "}
              <span className="text-gradient font-semibold">{r.what}</span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
