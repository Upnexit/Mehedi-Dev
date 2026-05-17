import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Company from "@/components/Company";
import Contact from "@/components/Contact";

const Scene3D = lazy(() => import("@/components/Scene3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mehedi Hasan — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mehedi Hasan, a full-stack web developer building fast, beautiful and scalable web experiences.",
      },
      { property: "og:title", content: "Mehedi Hasan — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Mehedi Hasan, a full-stack web developer building fast, beautiful and scalable web experiences.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  // Always start at the top on refresh — never jump to a previous scroll
  // position or a hash like "#contact" on initial load.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </ClientOnly>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Company />
      <Contact />
    </main>
  );
}
