import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/list")({
  component: () => <div>Hello /list!</div>,
});
