"use client";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="system-page" id="main-content">
          <section className="system-card">
            <h1>Atlas couldn’t load.</h1>
            <p>Refresh the page to try again.</p>
            <button
              className="button button--primary"
              onClick={reset}
              type="button"
            >
              Reload page
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
