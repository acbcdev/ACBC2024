import type { ProyectType } from "@/types/proyects";

export const projects: ProyectType[] = [
	{
		description: "A short link generator",
		github: "https://github.com/ACBC-DEV/LinkMinify",
		link: "https://link.acbc.dev/",
		img: "/img/link.webp",
		tags: ["Nextjs", "Tailwindcss", "Mongodb"],
		name: "LinkMinify",
	},
	{
		name: "Trello Clone",
		github: "https://github.com/ACBC-DEV/trello-clone",
		link: "https://trello.acbc.dev/",
		img: "/img/trello.webp",
		tags: ["Angular", "Tailwindcss"],
		description: "Trello Clone with Angular ",
	},
	{
		description: "A set of calculators ",
		github: "https://github.com/ACBC-DEV/SmartMoney",
		link: "https://smart-money-five.vercel.app/",
		img: "/img/smart.webp",
		tags: ["Astro", "SolidJS", "Tailwindcss"],
		name: "SmartMoney",
	},
];
