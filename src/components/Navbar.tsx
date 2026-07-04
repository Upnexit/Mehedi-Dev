import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/skills",   label: "Skills"   },
  { to: "/projects", label: "Projects" },
  { to: "/contact",  label: "Contact"  },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5 glass" : "py-4 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        <Link to="/" className="font-signature text-gradient text-2xl sm:text-3xl leading-none whitespace-nowrap">
          Mehedi Hasan
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-muted-foreground hover:text-foreground transition-colors relative group data-[status=active]:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px bg-gradient-primary transition-all duration-300 w-0 group-hover:w-full group-data-[status=active]:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass hover:shadow-glow transition-all"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for work
          </Link>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass mt-3 mx-5 rounded-xl p-3 flex flex-col gap-1 text-sm"
        >
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 data-[status=active]:text-foreground data-[status=active]:bg-muted/40"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
