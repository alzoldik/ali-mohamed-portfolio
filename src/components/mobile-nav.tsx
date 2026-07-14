"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (!open) {
      if (restoreFocus.current) {
        triggerRef.current?.focus();
        restoreFocus.current = false;
      }
      return;
    }

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocus.current = true;
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function toggleMenu() {
    if (open) restoreFocus.current = true;
    setOpen((value) => !value);
  }

  function followLink() {
    restoreFocus.current = false;
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-edge text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {open ? (
          <X className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Menu className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-edge bg-surface/95 backdrop-blur-sm"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-5xl px-5 py-3">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={followLink}
                    className="block border-b border-edge/60 py-3 text-sm text-fg transition-colors last:border-b-0 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteConfig.resume.available ? (
                <li>
                  <a
                    href={siteConfig.resume.path}
                    download={siteConfig.resume.fileName}
                    onClick={followLink}
                    className="block py-3 text-sm font-medium text-accent"
                  >
                    Download resume
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
