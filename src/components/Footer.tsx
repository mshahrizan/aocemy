import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./ui";
import { Facebook, Instagram, LinkedIn } from "./icons";

const programmes = [
  { n: "0.01", label: "Technical talks", href: "/events" },
  { n: "0.02", label: "Certification prep", href: "/certification" },
  { n: "0.03", label: "Study groups", href: "/certification#section-support" },
  { n: "0.04", label: "Mentoring circle", href: "/membership#young-professionals" },
  { n: "0.05", label: "Annual conference", href: "/events" },
  { n: "0.06", label: "Recommended Practices", href: "/resources" },
];

const section = [
  { label: "About the Section", href: "/about" },
  { label: "Committee", href: "/about#committee" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const international = [
  { label: "AACE International", href: site.aace.home },
  { label: "Join AACE", href: site.aace.join },
  { label: "Certification portal", href: site.aace.portal },
  { label: "myAACE Communities", href: site.aace.communities },
  { label: "AACE Shop", href: site.aace.shop },
];

export function Footer() {
  return (
    <footer className="border-t border-hair bg-white text-ink">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed">
            The Malaysia Section of AACE International: technical talks, certification support and a professional
            network for cost engineering and project controls in Malaysia.
          </p>
          <ul className="mt-6 flex gap-2.5" aria-label="Social media">
            {[
              { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
              { href: site.social.facebook, label: "Facebook", Icon: Facebook },
              { href: site.social.instagram, label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-navy shadow-[inset_0_0_0_1.5px_var(--color-hair)] transition hover:shadow-[inset_0_0_0_1.5px_var(--color-navy)]"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterCol title="Programmes" className="md:col-span-3">
          {programmes.map((p) => (
            <li key={p.n}>
              <Link href={p.href} className="hover:text-navy">
                <span className="mr-2 font-mono text-[12.5px] text-muted">{p.n}</span>
                {p.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Section" className="md:col-span-2">
          {section.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-navy">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="AACE International" className="md:col-span-3">
          {international.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </FooterCol>
      </Container>

      <div className="border-t border-hair">
        <Container className="flex flex-col gap-3 py-6 text-[13.5px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {site.name}. Part of AACE International {site.region}.
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-navy">
              {site.email}
            </a>
            <span className="mx-2">·</span>
            {site.city}
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h3 className="font-display text-[15px] font-semibold text-navy">{title}</h3>
      <ul className="mt-4 grid gap-2.5 text-[15px]">{children}</ul>
    </div>
  );
}
