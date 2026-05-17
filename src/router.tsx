import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ErrorFallback, NotFoundFallback } from "./components/ErrorFallback";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,
    defaultPreload: "intent",
    defaultPreloadDelay: 30,
    defaultPreloadStaleTime: 30_000,
    defaultErrorComponent: ErrorFallback,
    defaultNotFoundComponent: NotFoundFallback,
  });

  return router;
};
