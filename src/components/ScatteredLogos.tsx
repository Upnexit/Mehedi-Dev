import { motion } from "framer-motion";
import {
  VSCodeLogo,
  FigmaLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  TailwindLogo,
  NextLogo,
  GitHubLogo,
} from "@/components/icons/TechLogos";

/**
 * Decorative tech logos scattered (non-orbital) behind the profile photo.
 * Positions are intentionally asymmetric to feel organic / "real desk".
 */
const items = [
  { Icon: ReactLogo,      top: "4%",   left: "6%",   size: 44, delay: 0.0, blur: false },
  { Icon: NextLogo,       top: "12%",  left: "82%",  size: 40, delay: 0.4, blur: true  },
  { Icon: TypeScriptLogo, top: "68%",  left: "2%",   size: 42, delay: 0.8, blur: false },
  { Icon: TailwindLogo,   top: "82%",  left: "78%",  size: 46, delay: 0.2, blur: false },
  { Icon: NodeLogo,       top: "38%",  left: "92%",  size: 38, delay: 1.0, blur: true  },
  { Icon: FigmaLogo,      top: "58%",  left: "88%",  size: 36, delay: 0.6, blur: false },
  { Icon: VSCodeLogo,     top: "28%",  left: "-2%",  size: 40, delay: 1.2, blur: true  },
  { Icon: GitHubLogo,     top: "92%",  left: "44%",  size: 34, delay: 0.5, blur: false },
];

export default function ScatteredLogos() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {items.map(({ Icon, top, left, size, delay, blur }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{
            opacity: blur ? 0.45 : 0.85,
            scale: 1,
            y: [0, -10, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay },
            scale:   { duration: 0.8, delay },
            y:       { duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay },
            rotate:  { duration: 7 + (i % 3), repeat: Infinity, ease: "easeInOut", delay },
          }}
          style={{ top, left, filter: blur ? "blur(1.5px)" : undefined }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="rounded-2xl glass shadow-glow flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <Icon size={Math.round(size * 0.55)} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
