import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teksphire.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/promptforge",
    "/solutions",
    "/industries",
    "/case-studies",
    "/resources",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/promptforge" ? 0.9 : 0.7,
  }));
}
