"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { ArrowUpRightIcon } from "@/components/icons/arrow-up-right-icon";
import { MenuIcon } from "@/components/icons/menu-icon";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

const subscribeToClient = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function MobileNavigation({ items }: MobileNavigationProps) {
  const isClient = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        const focusableElements =
          drawerRef.current?.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );

        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!drawerRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          firstElement.focus();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }

        return;
      }

      if (event.key !== "Escape") return;

      setIsOpen(false);
      requestAnimationFrame(() => triggerRef.current?.focus());
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <>
      <div className="mobile-menu">
        <button
          aria-controls="mobile-navigation-drawer"
          aria-expanded={isOpen}
          aria-label="Open navigation"
          className="mobile-menu__trigger"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <MenuIcon />
        </button>
      </div>

      {isClient &&
        createPortal(
          <div
            className={`mobile-menu__layer${isOpen ? " mobile-menu__layer--open" : ""}`}
          >
            <button
              aria-label="Close navigation"
              className="mobile-menu__backdrop"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              type="button"
            />
            <aside
              aria-hidden={!isOpen}
              aria-label="Atlas navigation"
              aria-modal={isOpen ? "true" : undefined}
              className="mobile-menu__drawer"
              id="mobile-navigation-drawer"
              inert={!isOpen}
              ref={drawerRef}
              role="dialog"
            >
              <div className="mobile-menu__topbar">
                <button
                  aria-label="Close navigation"
                  className="mobile-menu__close"
                  onClick={closeMenu}
                  ref={closeButtonRef}
                  type="button"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="mobile-menu__body">
                <p className="mobile-menu__eyebrow">Atlas navigation</p>
                <nav
                  aria-label="Mobile navigation"
                  className="mobile-menu__nav"
                >
                  {items.map((item, index) => (
                    <Link href={item.href} key={item.href} onClick={closeMenu}>
                      <span aria-hidden="true">0{index + 1}</span>
                      <strong>{item.label}</strong>
                      <span aria-hidden="true">
                        <ArrowUpRightIcon />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}
