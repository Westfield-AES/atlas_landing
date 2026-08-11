export default function Loading() {
  return (
    <main className="system-page" id="main-content">
      <div aria-live="polite" className="system-card">
        <span className="loading-line loading-line--short" />
        <span className="loading-line" />
        <span className="loading-line" />
        <span className="sr-only">Loading Atlas</span>
      </div>
    </main>
  );
}
