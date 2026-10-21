import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import HomePage from "@/app/(public)/page";

afterEach(cleanup);

describe("HomePage", () => {
  it("keeps the main discovery and business journeys visible", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /where businesses.*meet investors/i,
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: /discover businesses/i }),
    ).toHaveAttribute("href", "#discover");
    expect(
      screen.getByRole("link", { name: /showcase your business/i }),
    ).toHaveAttribute("href", "#for-businesses");
  });

  it("explains the discovery journey and keeps the user in control", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/explore businesses by sector and revenue stage/i),
    ).toBeVisible();
    expect(
      screen.getByText(
        /investors request an introduction.*the business can accept or decline/i,
      ),
    ).toBeVisible();
    expect(
      screen.getByText(
        /professional contact details are shared only after both sides agree/i,
      ),
    ).toBeVisible();
  });

  it("filters the fictional discovery preview and restores all sectors", () => {
    render(<HomePage />);

    expect(
      screen.getAllByRole("button", { name: /view sample profile/i }),
    ).toHaveLength(3);
    const climateFilter = screen.getByRole("button", {
      name: "Climate & energy",
    });
    fireEvent.click(climateFilter);
    expect(climateFilter).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", {
        name: /view sample profile for sola energy/i,
      }),
    ).toBeVisible();
    expect(
      screen.queryByRole("button", {
        name: /view sample profile for waya/i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("1 sample business in Climate & energy"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "All sectors" }));
    expect(
      screen.getAllByRole("button", { name: /view sample profile/i }),
    ).toHaveLength(3);
  });
});
