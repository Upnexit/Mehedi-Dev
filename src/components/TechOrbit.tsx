import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";

type IconType = ComponentType<{ size?: number }>;

export type LogoItem = {
  Icon: IconType;
  label: string;
  /** Optional small satellite orbiting around this logo. */
  satellite?: {
    Icon: IconType;
    label: string;
    /** Orbit radius in pixels around the parent chip center. */
    radius?: number;
    /** Seconds per revolution. */
    duration?: number;
    reverse?: boolean;
    size?: number;
  };
};

type Props = {
  radiusRatio?: number;
  duration?: number;
  reverse?: boolean;
  logos: LogoItem[];
  chipSize?: number;
};

export default function TechOrbit({
  radiusRatio = 0.46,
  duration = 32,
  reverse = false,
  logos,
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
        logos.map(({ Icon, label, satellite }, i) => {
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
              {/* Wrapper that holds the main chip + its satellite */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: {
                      duration: 2.4 + (i % 4) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{ width: chipSize, height: chipSize }}
                  className="rounded-2xl flex items-center justify-center pointer-events-auto bg-background/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-primary/20"
                  title={label}
                >
                  <Icon size={Math.round(chipSize * 0.46)} />
                </motion.div>

                {satellite && <Satellite parentSize={chipSize} {...satellite} />}
              </div>
            </motion.div>
          );
        })}
    </motion.div>
  );
}

function Satellite({
  Icon,
  label,
  radius,
  duration = 6,
  reverse = false,
  size = 22,
  parentSize,
}: {
  Icon: IconType;
  label: string;
  radius?: number;
  duration?: number;
  reverse?: boolean;
  size?: number;
  parentSize: number;
}) {
  const r = radius ?? parentSize * 0.95;
  const dir = reverse ? -360 : 360;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: r * 2, height: r * 2 }}
      animate={{ rotate: dir }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      {/* faint orbit guide */}
      <div className="absolute inset-0 rounded-full border border-dashed border-primary/15" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ x: r, y: 0 }}
        animate={{ rotate: -dir }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{ width: size, height: size }}
          className="rounded-full flex items-center justify-center bg-background/90 backdrop-blur-xl border border-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.55)] ring-1 ring-primary/30 pointer-events-auto"
          title={label}
        >
          <Icon size={Math.round(size * 0.62)} />
        </div>
      </motion.div>
    </motion.div>
  );
}
