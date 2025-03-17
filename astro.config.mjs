// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  output: "server",
  integrations: [alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});