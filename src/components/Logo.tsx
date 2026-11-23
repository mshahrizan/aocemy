import Link from "next/link";
import { cx } from "./ui";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cx("h-9 w-9", className)} aria-hidden>
      <defs>
        <linearGradient id="aace-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f0263f" />
          <stop offset="0.52" stopColor="#8d65fd" />
          <stop offset="1" stopColor="#3aaffe" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#aace-mark)" />
      <path d="M9 28.5 16 20l5 4.5 9.5-12" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30.5" cy="12.5" r="2.6" fill="#fff" />
    </svg>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="AACE Malaysia Section, home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cx("font-display text-[21px] font-bold tracking-[-0.02em]", light ? "text-white" : "text-navy")}>
          AACE
        </span>
        <span className={cx("mt-[3px] text-[9.5px] font-semibold uppercase tracking-[0.16em]", light ? "text-white/70" : "text-muted")}>
          Malaysia Section
        </span>
      </span>
    </Link>
  );
}
