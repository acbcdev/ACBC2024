/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				caprasimo: "Caprasimo",
			},
			colors: {
				MineShaft: "#333333",
				Mercury: "#e8e8e8",
				Gray: "#8c8c8c",
				Silver: "#bdbdbd",
			},
		},
	},
	plugins: [],
};
