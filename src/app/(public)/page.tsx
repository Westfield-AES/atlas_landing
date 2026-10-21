import type { Metadata } from "next";
import Image from "next/image";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { CheckIcon } from "@/components/icons/check-icon";
import { DiscoveryExplorer } from "@/components/landing/discovery-explorer";
import { ButtonLink } from "@/components/ui/button-link";
import { ATLAS_APP_PLACEHOLDER } from "@/lib/links";

export const metadata: Metadata = {
  title: "Where African businesses and investors connect",
  description:
    "Atlas is a marketplace where African businesses gain visibility and investors discover businesses. Showcase your business, explore profiles, and connect.",
};

const steps = [
  {
    title: "Businesses create a profile.",
    body: "Present your business, team, progress, and fundraising plans. Once reviewed, your profile gives investors a place to discover what you’re building.",
  },
  {
    title: "Investors discover businesses.",
    body: "Explore businesses by sector and revenue stage. Review their profiles, capital needs, and dated checks to find businesses relevant to your investment focus.",
  },
  {
    title: "Both sides choose to connect.",
    body: "Investors request an introduction. The business can accept or decline. Professional contact details are shared only after both sides agree.",
  },
];

const questions = [
  {
    title: "Who is Atlas for?",
    answer:
      "Atlas is a marketplace for African businesses looking for visibility with investors, and for investors looking for businesses to explore. Businesses showcase their work and capital needs; investors discover profiles and request introductions.",
  },
  {
    title: "How can I showcase my business on Atlas?",
    answer:
      "Create a profile covering what your business does, your team, your progress, and your fundraising plans. Profiles are reviewed before appearing in discovery. You choose who can see sensitive information and which introduction requests to accept. Business listing is not available on this website yet.",
  },
  {
    title: "Where is Atlas launching?",
    answer:
      "The first private beta focuses on Nigerian businesses. Business participation in other African markets will depend on future country launches.",
  },
  {
    title: "What does a profile check mean?",
    answer:
      "A check applies to a specific fact, such as business registration or fundraising status. Atlas shows what was checked and when. Business-provided information is distinct from checked facts. A check is not an endorsement or a substitute for your own due diligence.",
  },
  {
    title: "How do introductions work?",
    answer:
      "An investor sends a request explaining why they want to connect. The business can accept or decline. Only the professional contact details both sides agree to share are released after acceptance. Further conversations take place outside Atlas.",
  },
  {
    title: "Can I invest through Atlas?",
    answer:
      "No. Atlas supports business discovery and professional introductions. It does not recommend investments or process investment transactions. Investors conduct their own due diligence; negotiations, agreements, and money transfers take place outside Atlas.",
  },
  {
    title: "Can I join Atlas today?",
    answer:
      "Atlas is preparing a Nigeria private beta for businesses and invited investors. Business listing and account registration are not available on this website yet. Explore the sample profiles to see how businesses can present themselves and how investors can discover them.",
  },
];

export default function HomePage() {
  return (
    <div className="atlas-home" id="top">
      <section
        className="welcome-section page-shell"
        aria-labelledby="hero-title"
      >
        <p className="section-label welcome-label">
          <span className="status-dot" /> A marketplace for businesses and
          investors
        </p>
        <div className="welcome-layout">
          <h1 id="hero-title">
            Where businesses
            <br />
            meet investors.
          </h1>
          <div className="welcome-copy">
            <p className="welcome-description">
              Put your business in front of investors, or discover businesses
              that fit your investment focus. Atlas brings both sides together
              through business profiles and introductions.
            </p>
          </div>
          <div className="welcome-actions">
            <ButtonLink href="#for-businesses">
              Showcase your business <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="#discover">
              Discover businesses <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
        <figure className="welcome-image">
          <Image
            src="/images/cape-town.webp"
            alt="Cape Town’s businesses, neighbourhoods, and coastline beneath Lion’s Head"
            fill
            preload
            sizes="(max-width: 700px) 100vw, (max-width: 1440px) 92vw, 1320px"
          />
          <figcaption>
            <span className="location-dot" /> Cape Town, South Africa
          </figcaption>
          <div className="welcome-image__message" aria-hidden="true">
            Business visibility.
            <br />
            Investor discovery.
          </div>
          <a
            className="image-discover"
            href="#discover"
            aria-label="View sample business profiles"
          >
            <span aria-hidden="true">↓</span>
          </a>
        </figure>
        <div className="welcome-footnote">
          <span>Visibility for businesses. Discovery for investors.</span>
          <span>Private beta starts in Nigeria.</span>
        </div>
      </section>

      <section
        className="founder-section section-space page-shell"
        id="for-businesses"
        aria-labelledby="business-title"
      >
        <div className="founder-image">
          <Image
            src="/images/lagos-bridge.webp"
            alt="The Lekki–Ikoyi Link Bridge connecting neighbourhoods in Lagos at sunset"
            fill
            sizes="(max-width: 700px) 90vw, 45vw"
          />
          <div className="founder-image__caption">
            <span className="location-dot" /> Lagos, Nigeria
          </div>
          <div className="founder-image__note">
            Show your business.
            <br />
            Tell your story.
          </div>
        </div>
        <div className="founder-copy">
          <p className="section-label">For business owners</p>
          <h2 id="business-title">
            Get your business
            <br />
            seen by investors.
          </h2>
          <p>
            Create a profile that shows what you do, the team behind it, your
            progress, and what you’re raising capital for. Give investors a
            clear place to discover your business and decide whether to connect.
          </p>
          <ul>
            <li>
              <CheckIcon /> Build a profile investors can discover.
            </li>
            <li>
              <CheckIcon /> Share your progress and fundraising plans.
            </li>
            <li>
              <CheckIcon /> Choose what you share and who you connect with.
            </li>
          </ul>
          <ButtonLink href={ATLAS_APP_PLACEHOLDER}>
            About listing your business <ArrowIcon />
          </ButtonLink>
        </div>
      </section>

      <section
        className="discovery-section section-space page-shell"
        id="discover"
        aria-labelledby="discovery-title"
      >
        <div id="for-investors" className="discovery-heading">
          <div>
            <p className="section-label">For investors</p>
            <h2 id="discovery-title">
              Discover businesses
              <br />
              that fit your focus.
            </h2>
          </div>
          <p>
            Explore the profiles businesses use to present their work, progress,
            and capital needs. Filter these sample listings by sector to see how
            investors discover businesses on Atlas.
          </p>
        </div>
        <DiscoveryExplorer />
      </section>

      <section
        className="how-section section-space"
        id="how-it-works"
        aria-labelledby="journey-title"
      >
        <div className="page-shell">
          <div className="how-layout">
            <div className="how-heading">
              <p className="section-label">How Atlas works</p>
              <h2 id="journey-title">
                One marketplace.
                <br />
                Two ways to connect.
              </h2>
              <p>
                Businesses make their work visible. Investors discover profiles
                relevant to their focus. Introduction requests give both sides a
                way to start a conversation.
              </p>
            </div>
            <ol className="how-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="clarity-note" id="trust">
            <p>Visibility with control.</p>
            <ul>
              <li>
                <CheckIcon /> Discoverable business profiles
              </li>
              <li>
                <CheckIcon /> Dated, specific checks
              </li>
              <li>
                <CheckIcon /> Contact shared by agreement
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="questions-section section-space page-shell"
        aria-labelledby="faq-title"
      >
        <div className="questions-heading">
          <p className="section-label">Frequently asked questions</p>
          <h2 id="faq-title">
            Questions
            <br />
            about Atlas.
          </h2>
          <p>Who it’s for, what checks cover, and how access works.</p>
        </div>
        <div className="faq-list">
          {questions.map((question) => (
            <details key={question.title}>
              <summary>
                {question.title}
                <span aria-hidden="true" className="faq-plus" />
              </summary>
              <p>{question.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        className="invitation-section"
        id="early-access"
        aria-labelledby="access-title"
      >
        <div className="page-shell invitation-layout">
          <p className="section-label">
            <span className="status-dot" /> Private beta
          </p>
          <h2 id="access-title">
            Launching first
            <br />
            in Nigeria.
          </h2>
          <div className="invitation-copy">
            <p className="beta-status">
              For businesses raising capital and investors.
            </p>
            <p>
              The Nigeria beta will bring business profiles and invited
              investors onto the marketplace. Listing and registration are not
              available on this website yet. Explore the preview to see how a
              business can be presented.
            </p>
            <ButtonLink href="#discover">
              Preview a business listing <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
