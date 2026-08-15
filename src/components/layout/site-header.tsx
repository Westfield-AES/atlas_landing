import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

import { BrandLogo } from "./brand-logo";
import { MobileNavigation } from "./mobile-navigation";

const primaryNavigation = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#trust", label: "What you’ll see" },
  { href: "/#for-investors", label: "For investors" },
  { href: "/#for-businesses", label: "For businesses" },
];

function NavigationLinks() {
  return primaryNavigation.map((item) => (
    <Link href={item.href} key={item.href}>
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <BrandLogo priority variant="inverse" />
        {/* <nav aria-label="Primary navigation" className="site-header__nav">
          <NavigationLinks />
        </nav> */}
        <div className="site-header__actions">
          {/* <Link className="text-link text-link--quiet desktop-sign-in" href={ATLAS_APP_PLACEHOLDER}>
            Sign in
          </Link> */}
          <ButtonLink className="header-cta" href={ATLAS_APP_PLACEHOLDER} variant="primary">
            Explore Atlas <span aria-hidden="true">↗</span>
          </ButtonLink>
          <MobileNavigation items={primaryNavigation} />
        </div>
      </div>
    </header>
  );
}
