import Link from "next/link";

export default function NotFound() {
  return (
    <main className="system-page" id="main-content">
      <section className="system-card">
        <p className="eyebrow"><span /> 404</p>
        <h1>Looks like this page wandered off.</h1>
        <p>It may have moved or the link may be out of date. The Atlas homepage is a good place to pick things up again.</p>
        <Link className="button button--primary" href="/">Return home</Link>
      </section>
    </main>
  );
}
