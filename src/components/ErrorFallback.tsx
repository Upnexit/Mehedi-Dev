import { Link, useRouter } from "@tanstack/react-router";

type ErrorFallbackProps = {
  error?: Error;
  reset?: () => void;
};

export function NotFoundFallback() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-4 py-10 text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-3xl" />

      <section className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-border bg-card/70 p-8 text-center shadow-[var(--shadow-elegant)] backdrop-blur-2xl md:p-12">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-destructive shadow-[0_0_18px_var(--destructive)]" />
          ERROR · 404
        </div>
        <h1 className="font-signature text-gradient leading-none" style={{ fontSize: "clamp(5.5rem, 18vw, 10rem)" }}>
          404
        </h1>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">Lost in the void</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          The page you are looking for is not available. Return home or explore the project work.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            ← Back to Home
          </Link>
          <Link to="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/55 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary">
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  if (error) console.error(error);
  const router = useRouter();

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-4 py-10 text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-destructive/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />

      <section className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-border bg-card/70 p-8 text-center shadow-[var(--shadow-elegant)] backdrop-blur-2xl md:p-12">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-destructive shadow-[0_0_18px_var(--destructive)]" />
          SYSTEM · ERROR
        </div>
        <h1 className="font-signature text-gradient leading-none" style={{ fontSize: "clamp(3.6rem, 10vw, 6rem)" }}>
          Oops!
        </h1>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">This page did not load</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Something interrupted the page. Try again, or return to the portfolio home page.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset?.();
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/55 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary">
            Go home
          </a>
        </div>
      </section>
    </main>
  );
}