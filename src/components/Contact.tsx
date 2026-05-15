import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest">
            ◆ 04 / GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build <br />
            <span className="text-gradient">something great.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open.
          </p>

          <motion.a
            href="mailto:hello@mehedi.dev"
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow"
          >
            <Mail size={18} />
            hello@mehedi.dev
          </motion.a>

          <div className="mt-12 flex items-center justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 pt-8 border-t border-border max-w-7xl mx-auto px-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Mehedi Hasan</span>
          <span>Designed & built with ♥ in Bangladesh</span>
        </div>
      </footer>
    </section>
  );
}
