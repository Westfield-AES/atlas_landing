"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="system-page" id="main-content">
          <section className="system-card">
            <h1>Let’s give Atlas a quick refresh.</h1>
            <p>Something interrupted the page, but anything you already submitted is still safe.</p>
            <button className="button button--primary" onClick={reset} type="button">Try Atlas again</button>
          </section>
        </main>
      </body>
    </html>
  );
}
