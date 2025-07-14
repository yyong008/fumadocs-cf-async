import { source } from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const { GET } = createSearchAPI("advanced", {
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    id: page.url,
    url: page.url,
    structuredData: {
      headings: [],
      contents: [
        {
          heading: page.data.title,
          content: page.data.description || "",
        },
      ],
    },
  })),
});
