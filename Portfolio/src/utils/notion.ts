import { Client } from "@notionhq/client";

const linkdb = "f7c4bf0c9e044a14a22a0e0d21e94a74";
// Initializing a client
const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});
// {
//   github: {
//     id: 'BW%3C%5D',
//     type: 'url',
//     url: 'https://github.com/ACBC-DEV/LinkMinify'
//   },
//   link: { id: 'VFVN', type: 'url', url: null },
//   img: { id: 'uAyx', type: 'files', files: [] },
//   tags: { id: 'x%3E%7Ch', type: 'multi_select', multi_select: [Array] },
//   name: { id: 'title', type: 'title', title: [Array] }
// },
export const getProjects = async () => {
  const query = { database_id: linkdb };
  const { results } = await notion.databases.query(query);
  return results.map((page) => {
    const { properties } = page;
    const { github, link, img, tags, name, descripcion } = properties;

    return {
      descripcion: descripcion.rich_text[0].plain_text,
      github: github.url,
      link: link?.url,
      img: img?.files[0]?.file.url,
      tags: tags.multi_select.map((tag) => tag.name),
      name: name.title[0].plain_text,
    };
  });
};
