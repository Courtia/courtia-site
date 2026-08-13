import type { MetadataRoute } from "next";

/** Le site n'avait AUCUN robots.txt (404) : les moteurs improvisaient. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://courtia.fr/sitemap.xml",
  };
}
