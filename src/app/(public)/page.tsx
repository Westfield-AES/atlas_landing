import type { Metadata } from "next";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { CheckIcon } from "@/components/icons/check-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

export const metadata: Metadata = {
  title: "Discover businesses raising across Africa",
  description:
    "Atlas helps investors discover African businesses that are raising, understand the important details, and start better conversations.",
};

const journeySteps = [
  {
    number: "01",
    label: "Discover",
    title: "Start with what matters to you.",
    body: "Browse by market, sector, stage, and investment range. Atlas keeps the focus on businesses that have recently confirmed they’re raising.",
    detail: "A focused place to begin",
  },
  {
    number: "02",
    label: "Understand",
    title: "Get the story without the scavenger hunt.",
    body: "See what the business does, who is behind it, the numbers that matter, and which details Atlas has checked, all in one clear profile.",
    detail: "The important details together",
  },
  {
    number: "03",
    label: "Connect",
    title: "Reach out with a reason.",
    body: "Send a short introduction request when a business catches your eye. If they’re interested too, Atlas helps both sides connect.",
    detail: "A warmer way to meet",
  },
];

const clarityPoints = [
  {
    title: "Fresh when it matters",
    body: "Raising status and key dates stay visible, so you know how current a profile is.",
  },
  {
    title: "Clear about what was checked",
    body: "Atlas names the exact detail that was reviewed and when the check took place.",
  },
  {
    title: "Made for local markets",
    body: "Currencies, business details, and market context are handled country by country.",
  },
];

export default function HomePage() {
  return (
    <div className="atlas-home">
      <section className="atlas-hero">
        <div className="page-shell atlas-hero__shell">
          <div className="atlas-hero__grid">
            <div className="atlas-hero__copy">
              <p className="atlas-kicker">Better discovery starts with better context</p>
              <h1>
                <span>Find the businesses</span>
                <span>shaping what’s next.</span>
                <em>Across Africa.</em>
              </h1>
              <p className="atlas-hero__lead">
                Atlas brings together African businesses raising capital and investors looking for their
                next opportunity, with clear profiles, up-to-date details, and thoughtful introductions.
              </p>
              <div className="atlas-hero__actions">
                <ButtonLink href={ATLAS_APP_PLACEHOLDER}>Explore Atlas <ArrowIcon /></ButtonLink>
                <ButtonLink href="#for-businesses" variant="secondary">Showcase your business</ButtonLink>
              </div>
            </div>

            <div className="atlas-preview" aria-label="Illustration of an Atlas business profile">
              <div className="atlas-preview__topline">
                <span>Atlas profile preview</span>
                <span>Clear at a glance</span>
              </div>
              <div className="atlas-preview__heading">
                <div className="atlas-preview__mark" aria-hidden="true"><span /></div>
                <div>
                  <p>Business snapshot</p>
                  <h2>A business worth a closer look</h2>
                </div>
                <span className="atlas-preview__status"><i /> Raising now</span>
              </div>
              <p className="atlas-preview__summary">
                What the business is building, who it serves, where it operates, and what it plans to do next.
              </p>
              <dl className="atlas-preview__facts">
                <div><dt>Market</dt><dd>Fits your focus</dd></div>
                <div><dt>Sector</dt><dd>Worth exploring</dd></div>
                <div><dt>Stage</dt><dd>In your range</dd></div>
              </dl>
              <div className="atlas-preview__checks">
                <div><CheckIcon /><span>Raising status</span><strong>Recently confirmed</strong></div>
                <div><CheckIcon /><span>Registration details</span><strong>Checked + dated</strong></div>
              </div>
              <div className="atlas-preview__match">
                <span>Why it’s here</span>
                <p>It fits the markets, sectors, and stages you want to explore.</p>
              </div>
            </div>
          </div>

          <div className="atlas-hero__foot">
            <p>Current fundraising profiles</p>
            <p>Useful details in one place</p>
            <p>Introductions with context</p>
            <a href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="atlas-journey" id="how-it-works">
        <div className="page-shell">
          <div className="atlas-section-heading">
            <p className="atlas-section-label">How Atlas works</p>
            <h2>From a first look<br />to a <em>real conversation.</em></h2>
            <p>
              Atlas gives you a focused place to discover businesses, understand what makes them
              interesting, and take the next step with confidence.
            </p>
          </div>

          <ol className="atlas-journey__grid">
            {journeySteps.map((step) => (
              <li key={step.number}>
                <div className="atlas-journey__top"><span>{step.number}</span><i /></div>
                <p className="atlas-journey__label">{step.label}</p>
                <h3>{step.title}</h3>
                <p className="atlas-journey__body">{step.body}</p>
                <p className="atlas-journey__detail">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="atlas-clarity" id="trust">
        <div className="page-shell atlas-clarity__grid">
          <div className="atlas-clarity__copy">
            <p className="atlas-section-label atlas-section-label--light">Clarity built in</p>
            <h2>See the story and the details behind it.</h2>
            <p className="atlas-clarity__lead">
              Businesses tell their story in their own words. Alongside it, Atlas shows which details
              were checked, when they were reviewed, and how recently the business confirmed it is raising.
            </p>
            <ol className="atlas-clarity__points">
              {clarityPoints.map((point, index) => (
                <li key={point.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{point.title}</h3><p>{point.body}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="profile-guide">
            <div className="profile-guide__header">
              <div><p>What you’ll see on Atlas</p><span>A guide to each profile</span></div>
              <div className="profile-guide__icon" aria-hidden="true"><CheckIcon /></div>
            </div>
            <ul>
              <li><span>Business overview</span><strong>Shared by the business</strong></li>
              <li><span>Raising status</span><strong>Recently confirmed</strong></li>
              <li><span>Registration details</span><strong>Check and date shown</strong></li>
              <li><span>Key numbers</span><strong>Reporting period included</strong></li>
              <li><span>Introduction preference</span><strong>Clear before you ask</strong></li>
            </ul>
            <p className="profile-guide__note">Clear labels help you decide what to explore next.</p>
          </div>
        </div>
      </section>

      <section className="atlas-audience" id="for-businesses">
        <div className="page-shell">
          <div className="atlas-section-heading atlas-section-heading--audience">
            <p className="atlas-section-label">Built for both sides</p>
            <h2>One better introduction.<br /><em>Two ways in.</em></h2>
            <p>
              Whether you’re looking for your next opportunity or the right people to understand your
              business, Atlas helps you begin with better context.
            </p>
          </div>

          <div className="atlas-audience__grid">
            <article className="atlas-audience-card atlas-audience-card--investor" id="for-investors">
              <div className="atlas-audience-card__top"><span>For investors</span><span>01</span></div>
              <div className="atlas-audience-card__content">
                <p className="atlas-audience-card__eyebrow">Follow your curiosity</p>
                <h3>Find businesses that fit how you invest.</h3>
                <p>
                  Choose the markets, sectors, stages, and investment ranges you care about. Atlas brings
                  together the businesses that fit and explains why they appeared.
                </p>
                <ul>
                  <li>Browse current opportunities</li>
                  <li>Compare the details that matter</li>
                  <li>Save businesses for another look</li>
                </ul>
                <ButtonLink href={ATLAS_APP_PLACEHOLDER} variant="inverse">Start exploring <ArrowIcon /></ButtonLink>
              </div>
            </article>

            <article className="atlas-audience-card atlas-audience-card--business">
              <div className="atlas-audience-card__top"><span>For businesses</span><span>02</span></div>
              <div className="atlas-audience-card__content">
                <p className="atlas-audience-card__eyebrow">Make the first look count</p>
                <h3>Help the right investors understand you sooner.</h3>
                <p>
                  Create one clear profile, show what makes your business interesting, and choose how each
                  new conversation begins.
                </p>
                <ul>
                  <li>Tell your story in one place</li>
                  <li>Choose what different visitors can see</li>
                  <li>Review every introduction request</li>
                </ul>
                <ButtonLink href={ATLAS_APP_PLACEHOLDER}>Start your profile <ArrowIcon /></ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="atlas-closing" id="early-access">
        <div className="page-shell atlas-closing__grid">
          <p className="atlas-section-label atlas-section-label--light">Private beta</p>
          <div>
            <h2>Good things start with<br /><em>the right introduction.</em></h2>
            <p>
              Atlas is preparing its first collection of businesses and investors. We’re starting small so
              every profile is useful, every detail is clear, and every introduction has a reason behind it.
            </p>
            <div className="atlas-closing__actions">
              <ButtonLink href={ATLAS_APP_PLACEHOLDER} variant="inverse">Explore Atlas <ArrowIcon /></ButtonLink>
              <ButtonLink href={ATLAS_APP_PLACEHOLDER} variant="secondary">Private beta access</ButtonLink>
            </div>
          </div>
          <p className="atlas-closing__note">
            Atlas gives both sides the context and connection. Every conversation and decision stays in
            the hands of the people involved.
          </p>
        </div>
      </section>
    </div>
  );
}
