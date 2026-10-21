"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Atlas route error", { digest: error.digest });
  }, [error]);

  return (
    <main className="system-page" id="main-content">
      <section className="system-card" aria-labelledby="route-error-title">
        <p className="eyebrow">
          <span /> Page unavailable
        </p>
        <h1 id="route-error-title">We couldn’t load this page.</h1>
        <p>Please try loading the page again.</p>
        <button
          className="button button--primary"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
        {error.digest ? (
          <p className="correlation">Reference: {error.digest}</p>
        ) : null}
      </section>
    </main>
  );
}
