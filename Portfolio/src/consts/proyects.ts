import type { ProyectType } from "@/types/proyects";

export const proyects: ProyectType[] = [

  {
    descripcion: 'Un conjunto de Calculadores para Aprender Programacion',
    github: 'https://github.com/ACBC-DEV/SmartMoney',
    link: 'https://github.com/ACBC-DEV/SmartMoney',
    img: '/img/smartmoney.avif',
    tags: ['Astro', 'SolidJS', 'Tailwindcss'],
    name: 'SmartMoney'
  },
  {
    descripcion: 'un generador de shortLinks',
    github: 'https://github.com/ACBC-DEV/LinkMinify',
    link: 'https://link-minify.vercel.app/',
    img: '/img/link-minify.avif',
    tags: ['Nextjs', 'Tailwindcss', 'mongodb', 'React'],
    name: 'LinkMinify'
  },
  {
    descripcion: 'un Buscador de Gifs con el cual ',
    github: 'https://github.com/ACBC-DEV/Gifty',
    link: 'https://github.com/ACBC-DEV/Gifty',
    img: '/img/gifty.avif',
    tags: ['Nextjs', 'Tailwindcss', 'React'],
    name: 'Gifty'
  },
]