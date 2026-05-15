import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-background/60 p-10 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-4 py-1.5 text-xs font-mono tracking-widest text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-destructive animate-pulse" />
          ERROR · 404
        </div>
        <h1 className="font-signature text-gradient leading-none" style={{ fontSize: "clamp(5rem, 18vw, 9rem)" }}>
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Lost in the void
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
          The page you're looking for has drifted off the grid. Let's get you back to familiar territory.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            ← Back to Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-destructive/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-background/60 p-10 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-4 py-1.5 text-xs font-mono tracking-widest text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-destructive animate-pulse" />
          SYSTEM · ERROR
        </div>
        <h1 className="font-signature text-gradient leading-none" style={{ fontSize: "clamp(3rem, 10vw, 5rem)" }}>
          Oops!
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "A 3D animated developer portfolio website showcasing projects and skills." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "A 3D animated developer portfolio website showcasing projects and skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "A 3D animated developer portfolio website showcasing projects and skills." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
