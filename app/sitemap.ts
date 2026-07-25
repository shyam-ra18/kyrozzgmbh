import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kyrozz.de";

  const staticRoutes = [
    "",
    "/3d-printing",
    "/about",
    "/assembly-services",
    "/contact",
    "/datenschutz",
    "/impressum",
    "/imprint",
    "/industries",
    "/injection-molding",
    "/materials",
    "/privacy-policy",
    "/products",
    "/quote",
    "/terms-conditions"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
