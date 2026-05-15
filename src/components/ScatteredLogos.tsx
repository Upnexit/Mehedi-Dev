import { motion } from "framer-motion";
import {
  PythonLogo,
  JavaScriptLogo,
  HTML5Logo,
  CSS3Logo,
  GraphQLLogo,
  DockerLogo,
  ViteLogo,
} from "@/components/icons/TechLogos";

/**
 * A tight cluster of programming-language / tooling logos that hug the photo,
 * peeking out from just behind its edge. Distinct from the orbit set (which
 * uses VS Code, React, Figma, TS, Node, Tailwind, Next, GitHub) — no
 * duplicates. Positions are polar (around the center) at a small radius so
 * each chip nestles close to the profile.
 */
const items = [
  { Icon: PythonLogo,     angle: -110, radius: 38, size: 38, delay: 0.0 },
  { Icon: JavaScriptLogo, angle: -55,  radius: 36, size: 36, delay: 0.15 },
  { Icon: HTML5Logo,      angle: -10,  radius: 40, size: 38, delay: 0.3 },
  { Icon: CSS3Logo,       angle: 35,   radius: 37, size: 36, delay: 0.45 },
  { Icon: GraphQLLogo,    angle: 80,   radius: 39, size: 38, delay: 0.6 },
  { Icon: DockerLogo,     angle: 135,  radius: 38, size: 40, delay: 0.75 },
  { Icon: ViteLogo,       angle: 180,  radius: 37, size: 36, delay: 0.9 },
];

export default function ScatteredLogos() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {items.map(({ Icon, angle, radius, size, delay }, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = `calc(50% + ${Math.cos(rad) * radius}% - ${size / 2}px)`;
        const y = `calc(50% + ${Math.sin(rad) * radius}% - ${size / 2}px)`;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: 0.95,
              scale: 1,
              y: [0, -6, 0],
              rotate: [0, i % 2 === 0 ? 4 : -4, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay },
              scale: { duration: 0.7, delay, type: "spring", stiffness: 140 },
              y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay },
            }}
            style={{ left: x, top: y, width: size, height: size }}
            className="absolute"
          >
            <div
              className="rounded-2xl glass shadow-glow flex items-center justify-center w-full h-full"
            >
              <Icon size={Math.round(size * 0.6)} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
