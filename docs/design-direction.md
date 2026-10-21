# Atlas — Where businesses meet investors

Atlas is a marketplace where African businesses gain visibility with investors and investors discover businesses. Both audiences have equal prominence in the copy and primary actions. Its first private beta focuses on Nigeria. The landing page uses an editorial visual direction: warm ivory, forest green, muted olive, restrained sans-serif headlines, and real African city photography. The aim is to make business discovery feel thoughtful, approachable, and grounded in place.

## Visual system

- Manrope is used throughout: headings, body copy, photo captions, navigation, and profile dialogs. Headings use a smaller responsive scale, a consistent weight, and uniform color within each phrase. There are no decorative italic word treatments. The existing font is hosted locally with its licence in `public/fonts/`.
- Ivory `#f8f7f2`, ink green `#183e35`, forest `#244d3f`, and olive accents define the palette. Shared landing tokens live at the top of `src/app/landing.css`.
- Fine rules, small section labels, modest control corners, and restrained hover states connect the sections. Layout changes provide the visual rhythm.
- The original Atlas wordmarks and city photographs are retained. Business cards and profile dialogs use three locally hosted, generated illustrations of solar energy, payments, and delivery. [Assets and exact prompts](generated-card-images.md). No dependencies were added.

## Page narrative

1. A light navigation and shared marketplace proposition introduce two equally styled journeys: showcase a business or discover businesses. The Cape Town panorama establishes the African market context.
2. The business section appears first, explaining how a profile gives a business visibility with investors, alongside the Lagos bridge photograph.
3. A working discovery preview presents three fictional Nigerian businesses and shows investors how to discover and review business profiles.
4. A forest-green section explains the shared workflow: businesses create profiles, investors discover them, and both sides choose whether to connect.
5. A split FAQ and sage beta invitation explain access and next steps without implying public access is available.
6. A compact footer completes the experience with the existing brand and navigation.

## Interaction and accessibility

The design retains sector filtering, live result announcements, native modal dialogs, native FAQ disclosures, anchor navigation, and the existing beta destination. Business profiles remain explicitly fictional. Reduced-motion preferences are respected.

Mobile layouts recompose the hero, stack business profiles, and turn the two-column explanatory sections into a reading sequence. The mobile navigation retains Escape dismissal, scroll locking, focus return, and keyboard containment. Its visibility changes immediately so that initial focus can reach the close control while its position animates.

[Verification record](redesign-verification.md). [Photography credits and licensing](../public/images/CREDITS.md).

[Content audit and product sources](content-audit.md) records the positioning, launch scope, and wording decisions.
