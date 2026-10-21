# Atlas landing

Independent Next.js marketing site for Atlas. It owns the public brand story, landing page, metadata, and search indexing. It has no runtime, build, asset, contract, or API dependency on `atlas_frontend` or `atlas_backend`.

Product-entry links intentionally point to the `#early-access` placeholder until the Atlas application URL and access flow are ready.

The landing page includes a filterable discovery preview with fictional business profiles, keyboard-accessible profile dialogs, and native FAQ disclosures. [Design direction](docs/design-direction.md) documents the redesign and asset credits; the [verification record](docs/redesign-verification.md) covers responsive, interaction, and accessibility checks. The [content audit](docs/content-audit.md) records the product sources behind the copy and the Nigeria beta scope. Photography and fonts are hosted locally.

## Local setup

```bash
npm install
npm run dev
```

The site listens on `http://localhost:3000` by default. Set `NEXT_PUBLIC_ATLAS_LANDING_URL` for canonical production metadata.

## Quality checks

```bash
npm run check
npm run build
```

## Project boundaries

- `src/app/` contains only the standalone marketing experience and system states.
- `assets/brand/` preserves the supplied brand sources; `public/` contains web-ready exports.
- Product authentication, dashboards, discovery data, and backend communication belong to `atlas_frontend`.
- The landing site never imports code, contracts, environment variables, or assets from sibling projects.
