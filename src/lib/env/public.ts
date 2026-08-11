const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): URL {
  const candidate = process.env.NEXT_PUBLIC_ATLAS_LANDING_URL ?? DEFAULT_SITE_URL;
  try {
    return new URL(candidate);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}
