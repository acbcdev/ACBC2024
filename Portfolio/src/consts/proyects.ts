import type { ProyectType } from "@/types/proyects";

export const projects: ProyectType[] = [
	{
		link: "https://runts.acbc.dev/",
		github: "https://github.com/acbcdev/RunTS",
		img: "/img/runts.webp",
		tags: ["React", "Playground", "WebWorker"],
		name: "RunTS",
		iconTecnology: "/svg/react.svg",
		description:
			"🎯 A TypeScript playground for running typescript code with: 🎨 Themes, 🔄 Auto-refresh, 🚀 Live execution, 💝 Open Source,🤝 Open to contributions",
	},
	{
		name: "Spooky Histories",
		link: "https://hackthon-cloudinary.acbc.dev/",
		github: "https://github.com/acbcdev/hackthon-cloudinary",
		img: "/img/spooky.webp",
		tags: ["Nextjs", "Tailwindcss", "Cloudinary"],
		description:
			"Interactive AI storyteller that generates dynamic spooky tales from your images. Choose your path, modify images, and craft your own haunting adventure 🎬👻",
		iconTecnology: "/svg/nextjs.svg",
	},

	{
		name: "Trello Clone",
		github: "https://github.com/acbcdev/trello-clone",
		link: "https://trello.acbc.dev/",
		img: "/img/trello.webp",
		tags: ["Angular", "Tailwindcss"],
		description:
			"🔗 Trello Clone with Angular: 🚀 A Feature-Rich Task Management App 📝 with Drag-and-Drop Functionality 🤏 and Local Persistence 💾",
		iconTecnology: "/svg/angular.svg",
	},
	{
		description:
			"🔗 Short Link URL Generator: 🚀 Create Compact and Shareable Links Effortlessly ✂️",
		github: "https://github.com/acbcdev/LinkMinify",
		link: "https://link.acbc.dev/",
		img: "/img/link.webp",
		tags: ["Nextjs", "Tailwindcss", "Mongodb"],
		name: "LinkMinify",
		iconTecnology: "/svg/nextjs.svg",
	},
	{
		description:
			"📊 A Set of Financial Calculators: 🧮 Loan Payments, Investment Growth 📈, Savings Tracking 💰, Budget Planning 📝, ROI Calculation 🚀, and Tax Management 💵 ",
		github: "https://github.com/acbcdev/SmartMoney",
		link: "https://smart-money-five.vercel.app/",
		img: "/img/smart.webp",
		tags: ["Astro", "SolidJS", "Tailwindcss"],
		name: "SmartMoney",
		iconTecnology: "/svg/astro_dark.svg",
	},
];
