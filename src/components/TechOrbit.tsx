import { useEffect, useRef, useState } from "react";
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

const logos = [
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
};

/**
 * Orbits 8 tech logos around the parent's center, just outside the profile.
 * Uses ResizeObserver so the radius scales correctly on mobile and desktop.
 */
export default function TechOrbit({
  radiusRatio = 0.46,
  duration = 32,
  reverse = false,
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
                className="size-11 sm:size-12 md:size-14 rounded-2xl glass flex items-center justify-center shadow-glow pointer-events-auto"
                title={label}
              >
                <Icon size={22} />
              </motion.div>
            </motion.div>
          );
        })}
    </motion.div>
  );
}
