import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/Brand";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="size-[40rem] rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-6">
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            04 / GET IN TOUCH
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Have an idea? <br />
            <span className="font-signature text-gradient text-5xl sm:text-6xl md:text-8xl">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a new product, a redesign, or a tricky engineering
            challenge — I&apos;d love to hear about it. My inbox is always open.
          </p>

          <motion.a
            href="mailto:hello@mehedi.dev"
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-flex items-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow text-sm sm:text-base"
          >
            <Mail size={18} />
            hello@mehedi.dev
          </motion.a>

          <div className="mt-12 flex items-center justify-center gap-3 sm:gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter / X" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-11 sm:size-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="relative mt-16 pt-4 border-t border-border/60 max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-3 text-[11px] sm:text-xs text-muted-foreground/80 font-mono">
          <span>© {new Date().getFullYear()} Mehedi Hasan</span>
          <span>Crafted with care.</span>
        </div>
      </footer>
    </section>
  );
}
