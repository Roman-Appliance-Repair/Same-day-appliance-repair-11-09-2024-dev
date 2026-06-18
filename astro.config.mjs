import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://samedayappliance.repair",
  redirects: {
    "/services/commercial-dishwasher-repair-los-angeles":        "/commercial/dishwasher-repair",
    "/services/commercial-dryer-repair-los-angeles":             "/commercial/dryer-repair",
    "/services/commercial-freezer-repair-los-angeles":           "/commercial/freezer-repair",
    "/services/commercial-fryer-machine-repair-los-angeles":     "/commercial/fryer-repair",
    "/services/commercial-ice-machine-repair-los-angeles":       "/commercial/ice-machine-repair",
    "/services/commercial-laundry-machine-repair-los-angeles":   "/commercial/laundry-repair",
    "/services/commercial-oven-repair-los-angeles":              "/commercial/oven-repair",
    "/services/commercial-refrigerator-repair-los-angeles":      "/commercial/refrigerator-repair",
    "/services/commercial-showcase-refrigerator-repair-los-angeles": "/commercial/showcase-refrigerator-repair",
    "/services/commercial-slushie-machine-repair-los-angeles":   "/commercial/slushie-machine-repair",
    "/services/commercial-stove-repair-los-angeles":             "/commercial/stove-repair",
    "/services/commercial-walk-in-cooler-repair-los-angeles":    "/commercial/walk-in-cooler-repair",
    "/services/commercial-walk-in-freezer-repair-los-angeles":   "/commercial/walk-in-freezer-repair",
    "/services/commercial-washing-machine-repair-los-angeles":   "/commercial/washer-repair",
    "/services/commercial-and-household-los-angeles":            "/services/commercial-repair",
    "/services/bbq-grill-repair-los-angeles":                    "/services/bbq-grill-repair",
    "/services/fireplace-repair-los-angeles":                    "/services/fireplace-repair",
    "/services/stove-repair-los-angeles":                        "/services/stove-repair",
    "/services/range-repair-los-angeles":                        "/services/stove-repair",
    "/services/pizza-oven-repair-los-angeles":                   "/services/pizza-oven-repair",
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/services/tamplete/") &&
        !page.includes("/services/test/") &&
        !page.includes("/services/ww-") &&
        !page.includes("/services/www-") &&
        !page.includes("/services/commercial-") ,
    }),
  ],
});
