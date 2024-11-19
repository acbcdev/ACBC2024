import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
export default defineConfig({
	site: "https://acbc.dev:",
	integrations: [
		tailwind({
			nesting: true,
		}),
		vercel({ webAnalytics: { eneble: true } }),
	],
});
