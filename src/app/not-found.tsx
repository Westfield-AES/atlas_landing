import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-page" id="main-content">
      <section className="system-card">
        <p className="eyebrow">
          <span /> 404
        </p>
        <h1>Page not found.</h1>
        <p>
          The address may be incorrect or the page may have moved. Return to the
          Atlas homepage to learn how businesses and investors connect.
        </p>
        <Link className="button button--primary" href="/">
          Return to Atlas
        </Link>
      </section>
    </main>
  );
}
