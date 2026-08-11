import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/env/public";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return [{
    url: siteUrl.toString(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }];
}
