import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atlas: Investor Discovery for Africa",
    short_name: "Atlas",
    description: "A clearer way for investors and African businesses raising capital to find each other.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F1E8",
    theme_color: "#071B17",
    icons: [
      { src: "/icons/atlas-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/atlas-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/atlas-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
