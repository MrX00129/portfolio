import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { BLOG_POSTS } from "@/lib/blogData";
import { FREE_TOOLS } from "@/lib/freeToolsData";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";
import { PRODUCTS_DATA } from "@/lib/productsData";
import { SERVICES_DATA } from "@/lib/servicesData";
import { absoluteUrl } from "@/lib/site";

const lastModified = new Date("2026-10-08T00:00:00.000Z");

function sitemapEntry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
) {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = [
    sitemapEntry("/", "weekly", 1),
    sitemapEntry("/about", "monthly", 0.8),
    sitemapEntry("/services", "weekly", 0.9),
    sitemapEntry("/products", "weekly", 0.75),
    sitemapEntry("/portfolio", "monthly", 0.7),
    sitemapEntry("/pricing", "monthly", 0.7),
    sitemapEntry("/blog", "weekly", 0.8),
    sitemapEntry("/resources/free-tools", "weekly", 0.75),
    sitemapEntry("/contact", "monthly", 0.8),
    sitemapEntry("/privacy-policy", "yearly", 0.3),
    sitemapEntry("/terms", "yearly", 0.3),
  ];

  const serviceRoutes = SERVICES_DATA.map((service) =>
    sitemapEntry(`/services/${service.slug}`, "monthly", service.highlight ? 0.85 : 0.75)
  );

  const productRoutes = PRODUCTS_DATA.map((product) =>
    sitemapEntry(`/products/${product.slug}`, "monthly", 0.6)
  );

  const portfolioRoutes = PORTFOLIO_PROJECTS.map((project) =>
    sitemapEntry(`/portfolio/${project.slug}`, "monthly", 0.55)
  );

  const blogRoutes = BLOG_POSTS.map((post) => ({
    ...sitemapEntry(`/blog/${post.slug}`, "monthly", 0.65),
    lastModified: new Date(post.date),
  }));

  const toolRoutes = FREE_TOOLS.map((tool) =>
    sitemapEntry(`/resources/free-tools/${tool.slug}`, "monthly", 0.55)
  );

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
    ...toolRoutes,
  ];
}
