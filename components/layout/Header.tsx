"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { moreNav, primaryNav, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** OAE-style fixed top navbar: white bar, shadow, clear links */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const menuId = useId();
  const moreId = useId();
  const moreRef = useRef<HTMLLIElement>(null);
  const moreActive = moreNav.some((item) => isActive(pathname, item.href));

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [moreOpen]);

  return (
    <>
      <header
        id="main__navbar"
        className="fixed top-0 z-40 w-full bg-[var(--bg-navbar)] text-[var(--text-navbar)] shadow-md"
      >
        <div className="shell flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
            aria-label={`${site.name} home`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-oae-primary text-sm font-bold text-white">
              N
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-[var(--text-navbar)] sm:text-lg">
                {site.name}
              </span>
              <span className="text-[0.65rem] text-nishaan-muted">
                IIT Delhi · {site.year}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm no-underline transition ${
                        active
                          ? "bg-oae-primary font-semibold text-white"
                          : "text-[var(--text-navbar)] hover:bg-oae-mint/60"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="relative" ref={moreRef}>
                <button
                  type="button"
                  className={`rounded-md px-3 py-2 text-sm transition ${
                    moreActive || moreOpen
                      ? "bg-oae-primary font-semibold text-white"
                      : "text-[var(--text-navbar)] hover:bg-oae-mint/60"
                  }`}
                  aria-expanded={moreOpen}
                  aria-controls={moreId}
                  aria-haspopup="true"
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More ▾
                </button>
                {moreOpen ? (
                  <ul
                    id={moreId}
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-1 min-w-[12rem] rounded-md bg-[var(--bg-navbar)] py-1 shadow-lg"
                  >
                    {moreNav.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <li key={item.href} role="none">
                          <Link
                            role="menuitem"
                            href={item.href}
                            className={`block px-4 py-2 text-sm no-underline ${
                              active
                                ? "bg-oae-mint font-semibold text-oae-primary"
                                : "text-[var(--text-navbar)] hover:bg-oae-mint/50"
                            }`}
                            onClick={() => setMoreOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            </ul>
            <Link
              href="/register"
              className="btn-primary ml-2 rounded-md px-4 py-2 text-sm font-semibold no-underline"
            >
              Register
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/register"
              className="btn-primary rounded-md px-3 py-2 text-sm font-semibold no-underline"
            >
              Register
            </Link>
            <button
              type="button"
              className="rounded-md border border-[var(--border)] px-3 py-2 text-sm"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open ? (
          <div id={menuId} className="border-t border-[var(--border)] bg-white lg:hidden">
            <nav className="shell py-3" aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {[...primaryNav, { href: "/register", label: "Register" }, ...moreNav].map(
                  (item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-md px-3 py-2.5 no-underline ${
                          isActive(pathname, item.href)
                            ? "bg-oae-mint font-semibold text-oae-primary"
                            : "text-[var(--text-navbar)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>
      {/* Spacer for fixed navbar — OAE pattern */}
      <div className="h-16 lg:h-[4.25rem]" aria-hidden="true" />
    </>
  );
}
