// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercelBuild = process.env.VERCEL === "1" || process.env.npm_lifecycle_event === "build:vercel";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  ...(isVercelBuild ? { cloudflare: false } : {}),
  tanstackStart: {
    server: { entry: "server" },
    ...(isVercelBuild
      ? {
          spa: {
            enabled: true,
            maskPath: "/",
            prerender: {
              outputPath: "/index",
              crawlLinks: false,
            },
          },
        }
      : {}),
  },
});
