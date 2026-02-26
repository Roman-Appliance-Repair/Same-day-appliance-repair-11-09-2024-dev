import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://samedayappliance.repair",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/services/tamplete/") &&
        !page.includes("/services/test/") &&
        !page.includes("/services/ww-") &&
        !page.includes("/services/www-"),
    }),
  ],
});





