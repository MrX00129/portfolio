export interface Product {
  slug: string;
  title: string;
  description: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    slug: "ai-article-writer",
    title: "AI Article Writer",
    description:
      "Draft structured article outlines and content workflows for reviewed, useful business content.",
  },
  {
    slug: "auto-blog-publisher",
    title: "Auto Blog Publisher",
    description:
      "Plan and automate content publishing workflows for websites and CMS platforms.",
  },
  {
    slug: "social-media-auto-poster",
    title: "Social Media Auto Poster",
    description:
      "Schedule and organize social publishing workflows across business channels.",
  },
  {
    slug: "website-manager",
    title: "Website Manager",
    description:
      "Centralize website updates, maintenance checks, and operational tasks.",
  },
  {
    slug: "seo-automation-tool",
    title: "SEO Automation Tool",
    description:
      "Track technical SEO tasks, metadata checks, and optimization opportunities.",
  },
  {
    slug: "ai-business-assistant",
    title: "AI Business Assistant",
    description:
      "Support customer workflows, internal knowledge access, and routine business automation.",
  },
];
