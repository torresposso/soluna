// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import db from "@astrojs/db";

export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  output: "server",
  integrations: [db()],
});