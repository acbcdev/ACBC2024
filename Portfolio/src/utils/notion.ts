import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

export interface ProyectType {
  link: string;
  github: string;
  img: string;
  name: string;
  tags: string[];
  descripcion: string;
}

export const getProjects = async () => {
  const query = { database_id: import.meta.env.NOTION_DATABASE_ID };
  const { results } = await notion.databases.query(query);
  return results
    .map((page) => {
      if ("properties" in page) {
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
      } else {
        // return a default object or null when properties does not exist on page
        return null;
      }
    })
    .filter(Boolean); // filter out null values
};
