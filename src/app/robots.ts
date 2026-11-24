import { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thanks"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/thanks"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/thanks"],
      },
    ],
    sitemap: `${site.seo.siteUrl}/sitemap.xml`,
    host: site.seo.siteUrl,
  };
}
