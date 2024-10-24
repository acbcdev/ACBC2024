import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://acbc.dev:",
	integrations: [
		tailwind({
			nesting: true,
		}),
	],
	output: "hybrid",
	adapter: vercel(),
});
