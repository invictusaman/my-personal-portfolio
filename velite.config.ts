import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import { type Options } from "rehype-pretty-code";
import { transformerNotationDiff } from '@shikijs/transformers';

// Define collections as needed
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/")
});

const descriptionTransform = (desc: string | undefined) => desc ? desc.replace(/\\n/g, '\n') : '';

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      background: s.string().optional(),
      image: s.string().optional(),
      tags: s.array(s.string()).optional(),
      body: s.mdx()
    })
    .transform(computedFields)
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional().transform(descriptionTransform),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      background: s.string().optional(),
      image: s.string().optional(),
      timeline: s.string().optional(),
      tags: s.array(s.string()).optional(),
      body: s.mdx()
    })
    .transform(computedFields)
});

const prettyCodeOptions: Partial<Options> = {
    theme: 'catppuccin-latte', // Use a single theme
    keepBackground: true, // Keep background colors from the theme
    defaultLang: 'plaintext',
    transformers: [transformerNotationDiff()],
    onVisitLine(element) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (element.children.length === 0) {
        element.children = [{ type: 'text', value: ' ' }];
      }
    },
    onVisitHighlightedLine(element) {
      element.properties.className = ['highlighted'];
    },
    onVisitHighlightedChars(element) {
      element.properties.className = ['word'];
    },
  };

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    remarkPlugins: []
  }
});
