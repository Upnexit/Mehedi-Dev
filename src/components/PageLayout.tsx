import { lazy, Suspense, type ReactNode } from "react";
import Navbar from "@/components/Navbar";

const Scene3D = lazy(() => import("@/components/Scene3D"));

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Navbar />
      {children}
    </main>
  );
}
