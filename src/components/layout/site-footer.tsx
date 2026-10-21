import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <BrandLogo variant="inverse" />
            <p>Visibility for businesses. Discovery for investors.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#for-businesses">For businesses</Link>
            <Link href="/#discover">For investors</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#early-access">Private beta</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getUTCFullYear()} Atlas.</p>
          <p>You choose what to share and who to connect with.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
