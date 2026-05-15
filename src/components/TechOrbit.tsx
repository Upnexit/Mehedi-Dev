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
  { Icon: FigmaLogo, label: "Figma" },
  { Icon: ReactLogo, label: "React" },
  { Icon: TypeScriptLogo, label: "TypeScript" },
  { Icon: NodeLogo, label: "Node.js" },
  { Icon: TailwindLogo, label: "Tailwind CSS" },
  { Icon: NextLogo, label: "Next.js" },
  { Icon: GitHubLogo, label: "GitHub" },
];

type Props = {
  /** Orbit ring radius in px */
  radius?: number;
  /** Seconds for one full revolution */
  duration?: number;
  /** Reverse direction */
  reverse?: boolean;
  /** Subset of logos (indices) */
  pick?: number[];
};

/**
 * Orbiting tech-logo ring rendered behind the profile photo.
 * Counter-rotates the inner chip so each logo stays upright.
 */
export default function TechOrbit({
  radius = 180,
  duration = 26,
  reverse = false,
  pick,
}: Props) {
  const items = pick ? pick.map((i) => logos[i]) : logos;
  const dir = reverse ? -360 : 360;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: dir }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      {items.map(({ Icon, label }, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ x, y }}
            // Counter-rotate so logos stay upright
            animate={{ rotate: -dir }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              whileHover={{ scale: 1.25 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 2.4 + (i % 4) * 0.4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="size-12 sm:size-14 rounded-2xl glass flex items-center justify-center shadow-glow pointer-events-auto"
              title={label}
            >
              <Icon size={26} />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
