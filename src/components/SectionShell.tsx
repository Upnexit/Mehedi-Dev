import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Wraps a section with a 3D-feeling scroll reveal:
 * the heading rotates on X and lifts as it enters the viewport,
 * and a soft floating glow follows scroll progress.
 */
export default function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -40],
  );
  const headerRotate = useTransform(scrollYProgress, [0, 0.5], [18, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0.5]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-28 md:py-36 px-6 overflow-hidden ${className}`}
    >
      {/* Floating section glow */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-gradient-primary opacity-15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.header
          style={{
            y: headerY,
            rotateX: headerRotate,
            opacity: headerOpacity,
            transformPerspective: 1000,
          }}
          className="mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-5">
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            {title}
          </h2>
        </motion.header>

        {children}
      </div>
    </section>
  );
}
