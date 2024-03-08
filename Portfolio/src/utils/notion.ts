import { Client } from "@notionhq/client";

const linkdb = "f7c4bf0c9e044a14a22a0e0d21e94a74";
// Initializing a client
const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

interface ProyectType {
  link: string;
  github: string;
  img: string;
  name: string;
  tags: string[];
}

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
