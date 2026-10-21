# Atlas website content audit

Reviewed 21 October 2026. This audit covers the landing page, navigation, calls to action, sample profiles and dialogs, FAQ, beta section, footer, search/social metadata, app manifest, accessibility labels, and loading/error/not-found messages.

## Product basis

Atlas is a two-sided marketplace: African businesses create profiles to gain visibility with investors, and investors discover businesses relevant to their investment focus. Business visibility and investor discovery have equal prominence in the public positioning, as clarified by the product owner. Its useful distinctions are current fundraising status, structured business information, dated checks with a specific scope, and introduction requests controlled by both participants. It does not recommend investments or handle investment transactions.

The first private beta is Nigeria-focused, with investor access by invitation. Local implementation and synthetic acceptance are distinct from live beta readiness. The landing site has no registration, application, or waitlist flow; its access buttons lead to information about the beta.

Read-only product sources consulted:

- [Product requirements: summary and principles](../../atlas_backend/docs/product/01-prd.md).
- [Executive discovery: investor/business jobs, positioning and messaging](../../atlas_backend/docs/product/00-executive-discovery.md).
- [Approved Nigeria beta decisions](../../atlas_backend/docs/product/20-nigeria-iam-implementation-plan.md). These approved decisions supersede the older proposed first-market ADR in the frontend repository.
- [Current beta implementation and remaining launch inputs](../../atlas_backend/BETA_IMPLEMENTATION.md).
- [Launch taxonomy](../../atlas_backend/migrations/versions/20260815_0005_onboarding_roots.py): example revenue stages now use Early revenue and Growth and expansion rather than Seed and Series A. Short sector labels describe the relevant taxonomy categories.

These sources inform copy only. No sibling application code, contracts, or assets are imported into the landing site, and no sibling files were modified.

## Changes

| Surface | Wording decision |
| --- | --- |
| Hero | Introduce the marketplace with “Where businesses meet investors.” Give businesses and investors equally styled actions. |
| Investor section | Describe sector filtering and reviewing business information. Label the working demonstration as sample profiles, not live fundraising inventory. |
| Workflow | Explain both sides in order: businesses create profiles, investors discover businesses, and both choose whether to connect. |
| Business section | Place the business section first. Lead with visibility to investors, then explain the profile, progress, fundraising information, and sharing controls. |
| Photography captions | Retain factual locations. Replace abstract ambition/possibility slogans with discovery, profiles, and controlled access. A Cape Town photograph illustrates the broader African-market focus, not beta availability. |
| FAQ | Clarify the audience, Nigeria launch scope, limits of checks, consented introductions, transactions outside Atlas, and present access restrictions. |
| Beta and CTAs | Name the Nigeria beta and invitation-only investor access. Use “Private beta” and “About listing your business” for informational destinations; use “Discover businesses” for the investor preview and “Showcase your business” for the business section. |
| Footer and metadata | Describe a marketplace serving business visibility and investor discovery, rather than addressing investors alone. |
| System messages | Give a direct explanation and recovery action. Remove unsupported assurances about account state or the safety of submitted data. |

No customer claims, results, endorsements, launch dates, pricing, application flows, or promised funding outcomes were added. The existing sans-serif typography and uniform heading treatment are retained.
