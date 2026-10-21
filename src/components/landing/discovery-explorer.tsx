"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

const sectors = [
  "All sectors",
  "Climate & energy",
  "Financial infrastructure",
  "Commerce & logistics",
] as const;
type Sector = (typeof sectors)[number];

const businesses = [
  {
    name: "Sola Energy",
    image: "/images/businesses/sola-energy.webp",
    imageAlt: "Solar panels installed on the roof of a commercial building",
    sector: "Climate & energy",
    location: "Abuja, Nigeria",
    country: "NG",
    stage: "Early revenue",
    theme: "solar",
    description: "Solar power systems and energy plans for small businesses.",
    detail:
      "This fictional Nigerian business supplies solar systems and energy plans to small businesses. An Atlas profile brings together the business model, team, dated traction, capital needs, and use of funds.",
  },
  {
    name: "Waya",
    image: "/images/businesses/waya-payments.webp",
    imageAlt:
      "A business owner using a card with a contactless payment terminal",
    sector: "Financial infrastructure",
    location: "Lagos, Nigeria",
    country: "NG",
    stage: "Growth and expansion",
    theme: "finance",
    description:
      "Payment and reconciliation tools for businesses trading across borders.",
    detail:
      "This fictional Nigerian business provides payment and reconciliation tools for cross-border trade. An Atlas profile explains where the business operates, how it earns revenue, and what it is raising capital to do.",
  },
  {
    name: "Relay",
    image: "/images/businesses/relay-logistics.webp",
    imageAlt: "A merchant handing a parcel to a local delivery rider",
    sector: "Commerce & logistics",
    location: "Ibadan, Nigeria",
    country: "NG",
    stage: "Early revenue",
    theme: "logistics",
    description:
      "Local delivery services connecting merchants with their customers.",
    detail:
      "This fictional Nigerian logistics business coordinates deliveries for local merchants. An Atlas profile explains its customers, delivery model, dated operating metrics, and plans for using new capital.",
  },
];

type Business = (typeof businesses)[number];

export function DiscoveryExplorer() {
  const [sector, setSector] = useState<Sector>("All sectors");
  const [selected, setSelected] = useState<Business | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filtered = businesses.filter(
    (business) => sector === "All sectors" || business.sector === sector,
  );

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function closeProfile() {
    dialogRef.current?.close();
    setSelected(null);
  }

  return (
    <div className="discovery-explorer">
      <div className="explorer-heading">
        <span className="explorer-wordmark">
          Atlas <span>/ Discover</span>
        </span>
      </div>
      <div className="discovery-toolbar">
        <div
          className="sector-filters"
          role="group"
          aria-label="Filter sample businesses by sector"
        >
          {sectors.map((item) => (
            <button
              aria-pressed={sector === item}
              className={
                sector === item
                  ? "sector-filter sector-filter--active"
                  : "sector-filter"
              }
              key={item}
              onClick={() => setSector(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p aria-live="polite" className="sr-only">
        {filtered.length} sample{" "}
        {filtered.length === 1 ? "business" : "businesses"}
        {sector !== "All sectors" ? ` in ${sector}` : " across all sectors"}
      </p>
      <div className="business-cards">
        {filtered.map((business) => (
          <article
            className={`business-card business-card--${business.theme}`}
            key={business.name}
          >
            <div className="business-card__visual">
              <span className="business-card__sector">{business.sector}</span>
              <Image
                src={business.image}
                alt={business.imageAlt}
                fill
                sizes="(max-width: 700px) 94vw, (max-width: 1440px) 30vw, 424px"
              />
              <span className="business-card__country" aria-hidden="true">
                {business.country}
              </span>
            </div>
            <div className="business-card__body">
              <div className="business-card__identity">
                <h3>{business.name}</h3>
                <p>{business.location}</p>
              </div>
              <p className="business-card__description">
                {business.description}
              </p>
              <div className="business-card__meta">
                <span>Revenue stage</span>
                <span className="raising-tag">{business.stage}</span>
              </div>
              <button
                className="business-card__open"
                onClick={() => setSelected(business)}
                type="button"
                aria-label={`View sample profile for ${business.name}`}
              >
                View sample profile{" "}
                <span className="profile-link" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <dialog
        aria-labelledby="profile-dialog-title"
        aria-describedby="profile-dialog-description"
        className="profile-dialog"
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProfile();
        }}
        onClose={() => setSelected(null)}
        ref={dialogRef}
      >
        {selected && (
          <div
            className={`profile-dialog__content business-card--${selected.theme}`}
          >
            <div className="profile-dialog__top">
              <span className="dialog-label">
                Atlas / Sample business profile
              </span>
              <button
                aria-label="Close business profile"
                autoFocus
                className="profile-dialog__close"
                onClick={closeProfile}
                type="button"
              >
                ×
              </button>
            </div>
            <div className="profile-dialog__image">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 624px) calc(100vw - 5rem), 544px"
              />
            </div>
            <h2 id="profile-dialog-title">{selected.name}</h2>
            <p className="profile-dialog__location">
              {selected.location} · {selected.sector}
            </p>
            <p id="profile-dialog-description">{selected.detail}</p>
            <dl className="profile-dialog__facts">
              <div>
                <dt>Location</dt>
                <dd>{selected.location}</dd>
              </div>
              <div>
                <dt>Revenue stage</dt>
                <dd>{selected.stage}</dd>
              </div>
              <div>
                <dt>Profile type</dt>
                <dd>Fictional example</dd>
              </div>
            </dl>
            <p className="profile-dialog__note">
              <span>
                No checks have been carried out on these fictional examples. On
                Atlas, each completed check states the fact reviewed and the
                date; it does not endorse the business.
              </span>
            </p>
            <a
              className="button button--primary"
              href={ATLAS_APP_PLACEHOLDER}
              onClick={closeProfile}
            >
              About beta access <ArrowIcon />
            </a>
          </div>
        )}
      </dialog>
    </div>
  );
}
