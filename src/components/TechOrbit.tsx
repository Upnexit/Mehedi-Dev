import { useEffect, useRef, useState, type ComponentType } from "react";
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

type LogoItem = { Icon: ComponentType<{ size?: number }>; label: string };

const defaultLogos: LogoItem[] = [
  { Icon: VSCodeLogo, label: "VS Code" },
  { Icon: ReactLogo, label: "React" },
  { Icon: FigmaLogo, label: "Figma" },
  { Icon: TypeScriptLogo, label: "TypeScript" },
  { Icon: NodeLogo, label: "Node.js" },
  { Icon: TailwindLogo, label: "Tailwind CSS" },
  { Icon: NextLogo, label: "Next.js" },
  { Icon: GitHubLogo, label: "GitHub" },
];

type Props = {
  /** Orbit radius as a fraction of the parent's smaller dimension (0–0.5). */
  radiusRatio?: number;
  /** Seconds for one full revolution. */
  duration?: number;
  /** Reverse direction. */
  reverse?: boolean;
  /** Override the orbiting set. */
  logos?: LogoItem[];
  /** Chip size in pixels (responsive will scale via clamp). */
  chipSize?: number;
};

/**
 * Orbits tech logos around the parent's center.
 * Uses ResizeObserver so the radius scales correctly on mobile and desktop.
 */
export default function TechOrbit({
  radiusRatio = 0.46,
  duration = 32,
  reverse = false,
  logos = defaultLogos,
  chipSize = 52,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize(Math.min(width, height));
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const radius = size * radiusRatio;
  const dir = reverse ? -360 : 360;

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: dir }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      {size > 0 &&
        logos.map(({ Icon, label }, i) => {
          const angle = (i / logos.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y }}
              animate={{ rotate: -dir }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  y: { duration: 2.4 + (i % 4) * 0.4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ width: chipSize, height: chipSize }}
                className="rounded-2xl flex items-center justify-center pointer-events-auto bg-background/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-primary/20"
                title={label}
              >
                <Icon size={Math.round(chipSize * 0.46)} />
              </motion.div>
            </motion.div>
          );
        })}
    </motion.div>
  );
}
