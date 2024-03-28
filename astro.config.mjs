import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [react()],
  adapter: cloudflare(),
  vite: {
    plugins: [TanStackRouterVite()],
  },
});
