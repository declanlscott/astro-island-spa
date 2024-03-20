import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useLayoutEffect, useState } from "react";

import { routeTree } from "~/dashboard/routeTree.gen";

const router = createRouter({
  routeTree,
  basepath: "/dashboard",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

type AppProps = { debounceMs?: number };

export function App(props: AppProps) {
  const { debounceMs = 500 } = props;

  const [isVisible, setIsVisible] = useState(false);

  // Debounce the app loading indicator to prevent flickering
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      document
        .getElementById("app-loading-indicator")
        ?.style.setProperty("display", "none");

      setIsVisible(true);
    }, debounceMs);

    return () => clearTimeout(timeout);
  }, [debounceMs]);

  return <>{isVisible && <RouterProvider router={router} />}</>;
}
