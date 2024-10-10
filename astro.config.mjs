// @ts-check
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [
    expressiveCode({
      themes: ["one-light"],
      frames: {
        // Example: Hide the "Copy to clipboard" button
        showCopyToClipboardButton: false,
      },
      plugins: [pluginLineNumbers()],
    }),
  ],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare(),
});