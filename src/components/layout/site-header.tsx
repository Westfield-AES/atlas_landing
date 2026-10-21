import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/arrow-up-right-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

import { BrandLogo } from "./brand-logo";
import { MobileNavigation } from "./mobile-navigation";

const primaryNavigation = [
  { href: "/#for-businesses", label: "For businesses" },
  { href: "/#discover", label: "For investors" },
  { href: "/#how-it-works", label: "How it works" },
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
        <BrandLogo priority />
        <nav aria-label="Primary navigation" className="site-header__nav">
          <NavigationLinks />
        </nav>
        <div className="site-header__actions">
          <ButtonLink
            className="header-cta"
            href={ATLAS_APP_PLACEHOLDER}
            variant="primary"
          >
            Private beta <ArrowUpRightIcon />
          </ButtonLink>
          <MobileNavigation items={primaryNavigation} />
        </div>
      </div>
    </header>
  );
}
