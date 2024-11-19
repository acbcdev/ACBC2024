import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
export default defineConfig({
	site: "https://acbc.dev:",
	output: "server",
	integrations: [
		tailwind({
			nesting: true,
		}),
		vercel({ webAnalytics: { eneble: true } }),
	],
});
