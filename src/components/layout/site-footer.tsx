import Link from "next/link";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__grid">
        <div className="site-footer__brand">
          <BrandLogo variant="inverse" />
          <p>A clearer way for investors and African businesses raising capital to find each other.</p>
          <ButtonLink href={ATLAS_APP_PLACEHOLDER} variant="inverse">Explore Atlas <ArrowIcon /></ButtonLink>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#trust">What you’ll see</Link>
        </div>
        <div>
          <h2>Get started</h2>
          <Link href="/#for-investors">For investors</Link>
          <Link href="/#for-businesses">For businesses</Link>
          <Link href={ATLAS_APP_PLACEHOLDER}>Sign in</Link>
        </div>
      </div>
      <div className="page-shell site-footer__legal">
        <p>© {new Date().getUTCFullYear()} Atlas.</p>
        <p>Better context. Better conversations. The decisions stay with you.</p>
      </div>
    </footer>
  );
}
