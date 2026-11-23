import Link from "next/link";
import type { ReactNode } from "react";
import { Container, cx } from "./ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="hero-rings text-white">
      <Container className={cx("grid gap-12 py-16 md:py-24", aside ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-center" : null)}>
        <div>
          <nav aria-label="Breadcrumb" className="text-[13.5px] font-medium text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{eyebrow}</span>
          </nav>
          <h1 className="h-display mt-6 max-w-[17ch] text-[clamp(2.5rem,1.5rem+3.4vw,4rem)] text-white">{title}</h1>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-white/75 md:text-[18.5px]">{lead}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside}
      </Container>
    </section>
  );
}
