import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import HomePage from "@/app/(public)/page";

afterEach(cleanup);

describe("HomePage", () => {
  it("keeps the main discovery and business journeys visible", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: /find the businesses.*across africa/i })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /^explore atlas/i })[0]).toHaveAttribute(
      "href",
      "#early-access",
    );
    expect(screen.getByRole("link", { name: /showcase your business/i })).toHaveAttribute(
      "href",
      "#for-businesses",
    );
  });

  it("explains the discovery journey and keeps the user in control", () => {
    render(<HomePage />);

    expect(screen.getByText(/start with what matters to you/i)).toBeVisible();
    expect(screen.getByText(/if they’re interested too/i)).toBeVisible();
    expect(screen.getByText(/every conversation and decision stays/i)).toBeVisible();
  });
});
