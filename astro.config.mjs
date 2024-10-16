// @ts-check
import { defineConfig } from "astro/config";
//import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  //adapter: cloudflare(),
  site: "https://valenciarb.org",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
