import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ErrorFallback, NotFoundFallback } from "@/components/ErrorFallback";
import { LanguageProvider } from "@/lib/language";
import { ThemeProvider } from "@/lib/theme";


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mehedi Hasan — Full Stack Developer & Founder of Upnex IT" },
      { name: "description", content: "Personal portfolio of Mehedi Hasan — full-stack web developer and founder of Upnex IT, building fast, scalable and beautifully engineered digital products." },
      { name: "author", content: "Mehedi Hasan" },
      { property: "og:site_name", content: "Mehedi Hasan" },
      { property: "og:title", content: "Mehedi Hasan — Full Stack Developer & Founder of Upnex IT" },
      { property: "og:description", content: "Personal portfolio of Mehedi Hasan — full-stack web developer and founder of Upnex IT, building fast, scalable and beautifully engineered digital products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mehedi Hasan — Full Stack Developer & Founder of Upnex IT" },
      { name: "twitter:description", content: "Personal portfolio of Mehedi Hasan — full-stack web developer and founder of Upnex IT." },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Caveat:wght@600;700&family=Hind+Siliguri:wght@300;400;500;600;700&family=Baloo+Da+2:wght@500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundFallback,
  errorComponent: ErrorFallback,
});

const NO_FLASH_THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(t);d.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
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
      <ThemeProvider>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
