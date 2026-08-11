import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "primary" | "inverse";
  priority?: boolean;
  linked?: boolean;
};

export function BrandLogo({
  variant = "primary",
  priority = false,
  linked = true,
}: BrandLogoProps) {
  const image = (
    <span className="brand-logo__frame">
      <Image
        alt="Atlas"
        fill
        priority={priority}
        sizes="120px"
        src={`/brand/atlas-logo-${variant}.png`}
      />
    </span>
  );

  if (!linked) return <span className="brand-logo">{image}</span>;

  return (
    <Link aria-label="Atlas home" className="brand-logo" href="/">
      {image}
    </Link>
  );
}
