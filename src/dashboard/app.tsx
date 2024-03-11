import { createRouter, RouterProvider } from "@tanstack/react-router";

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

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
