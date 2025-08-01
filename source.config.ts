import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
	dir: "content/docs",
	docs: {
		async: true
	},
});

export default defineConfig({
	mdxOptions: {
		// MDX options
	},
});
