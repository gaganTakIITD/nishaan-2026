"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { moreNav, primaryNav, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

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
        className="fixed top-0 z-40 w-full border-b border-fest-rule bg-white/95 text-fest-ink shadow-[0_1px_0_rgba(28,26,23,0.04)] backdrop-blur-md"
      >
        <div className="shell flex h-14 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4 lg:h-[5rem]">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3 lg:gap-5">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2.5 no-underline sm:gap-3"
              aria-label={`${site.name} home`}
            >
              <Image
                src="/brand/nishaan-mark.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
                priority
              />
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="truncate font-display text-lg font-semibold tracking-tight text-fest-ink sm:text-xl">
                  {site.name}
                  <span className="ml-1.5 text-sm font-medium text-fest-warm sm:text-base" lang="hi">
                    {site.nameHi}
                  </span>
                </span>
                <span className="hidden truncate text-xs font-medium text-fest-muted sm:block">
                  Inclusive cultural fest · IIT Delhi {site.year}
                </span>
              </span>
            </Link>

            <a
              href={site.oaeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-fest-rule bg-fest-paper px-2.5 py-1.5 transition-colors hover:border-oae-primary/30 hover:bg-fest-field md:flex"
              title="Office of Accessible Education"
            >
              <Image
                src="/brand/oae-logo-header.png"
                alt="Office of Accessible Education, IIT Delhi"
                width={160}
                height={151}
                className="h-10 w-auto object-contain sm:h-11"
                priority
              />
            </a>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`rounded-xl px-3.5 py-2 text-sm no-underline transition-all duration-300 ${
                        active
                          ? "bg-oae-primary font-semibold text-white shadow-sm"
                          : "text-fest-ink hover:bg-fest-field"
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
                  className={`rounded-xl px-3.5 py-2 text-sm transition-all duration-300 ${
                    moreActive || moreOpen
                      ? "bg-fest-field font-semibold text-oae-primary"
                      : "text-fest-ink hover:bg-fest-field"
                  }`}
                  aria-expanded={moreOpen}
                  aria-controls={moreId}
                  aria-haspopup="true"
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More
                  <span className="ml-1 text-[0.65rem]" aria-hidden="true">
                    ▾
                  </span>
                </button>
                {moreOpen ? (
                  <ul
                    id={moreId}
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 min-w-[15rem] overflow-hidden rounded-2xl border border-fest-rule bg-white py-2 shadow-xl"
                  >
                    {moreNav.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <li key={item.href} role="none">
                          <Link
                            role="menuitem"
                            href={item.href}
                            className={`block px-4 py-2.5 text-sm no-underline transition-colors ${
                              active
                                ? "bg-fest-field font-semibold text-oae-primary"
                                : "text-fest-ink hover:bg-fest-warm-soft/70"
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
              className="btn-primary ml-3 rounded-xl px-5 py-2.5 text-sm no-underline"
            >
              Register
            </Link>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/register"
              className="btn-primary rounded-xl px-3 py-2 text-xs no-underline sm:px-3.5 sm:py-2 sm:text-sm"
            >
              Register
            </Link>
            <button
              type="button"
              className="rounded-xl border border-fest-rule bg-white px-3 py-2 text-sm text-fest-ink transition-colors hover:bg-fest-field"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open ? (
          <div id={menuId} className="border-t border-fest-rule bg-white xl:hidden">
            <nav className="shell py-4" aria-label="Mobile">
              <div className="mb-3 flex items-center gap-3 rounded-2xl border border-fest-rule bg-fest-paper p-3 md:hidden">
                <Image
                  src="/brand/oae-logo-header.png"
                  alt="Office of Accessible Education, IIT Delhi"
                  width={160}
                  height={151}
                  className="h-11 w-auto object-contain"
                />
                <p className="text-xs leading-relaxed text-fest-muted">
                  Organised by the Office of Accessible Education
                </p>
              </div>
              <ul className="flex flex-col gap-1">
                {[
                  ...primaryNav,
                  { href: "/register", label: "Register" },
                  ...moreNav,
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-3 no-underline transition-colors ${
                        isActive(pathname, item.href)
                          ? "bg-fest-field font-semibold text-oae-primary"
                          : "text-fest-ink hover:bg-fest-warm-soft/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>
      <div className="h-14 sm:h-[4.5rem] lg:h-[5rem]" aria-hidden="true" />
    </>
  );
}
