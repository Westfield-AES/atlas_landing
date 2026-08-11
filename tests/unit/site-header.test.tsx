import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/layout/site-header";

afterEach(cleanup);

describe("SiteHeader", () => {
  it("exposes the brand, primary navigation, and access actions", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Atlas home" })).toHaveAttribute("href", "/");
    const primaryNavigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(within(primaryNavigation).getByRole("link", { name: "How it works" })).toHaveAttribute(
      "href",
      "/#how-it-works",
    );
    expect(screen.getAllByRole("link", { name: "Sign in" })[0]).toHaveAttribute(
      "href",
      "#early-access",
    );
    expect(screen.getByRole("link", { name: "Explore Atlas" })).toHaveAttribute(
      "href",
      "#early-access",
    );
  });

  it("opens and dismisses the mobile navigation drawer", () => {
    render(<SiteHeader />);

    const trigger = screen.getByRole("button", { name: "Open navigation" });
    const drawer = document.getElementById("mobile-navigation-drawer") as HTMLElement;

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(drawer).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(drawer).toHaveAttribute("aria-hidden", "false");
    expect(screen.getByRole("dialog", { name: "Atlas navigation" })).toBe(drawer);
    expect(within(drawer).getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    expect(within(drawer).queryByLabelText("Atlas home")).not.toBeInTheDocument();
    expect(within(drawer).queryByText("Better context.")).not.toBeInTheDocument();
    expect(within(drawer).queryByRole("link", { name: "Sign in" })).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(drawer).toHaveAttribute("aria-hidden", "true");
  });
});
