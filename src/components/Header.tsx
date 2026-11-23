"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink, Container, cx } from "./ui";
import { Close, Menu } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx(
                    "rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors",
                    isActive(item.href) ? "text-navy" : "text-ink hover:text-navy",
                  )}
                >
                  <span className={cx(isActive(item.href) && "link-gradient")}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <ButtonLink href="/events" variant="ghost" size="sm">
            Upcoming events
          </ButtonLink>
          <ButtonLink href="/membership" size="sm" arrow>
            Join the Section
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
        </button>
      </Container>

      {/* Gradient accent line under the header. */}
      <div className="h-[3px] bg-brand-gradient" aria-hidden />

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[75px] bottom-0 overflow-y-auto bg-white lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="border-b border-hair py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-navy"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 grid gap-3">
            <ButtonLink href="/membership" size="lg" arrow>
              Join the Section
            </ButtonLink>
            <ButtonLink href="/events" variant="ghost" size="lg">
              Upcoming events
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
