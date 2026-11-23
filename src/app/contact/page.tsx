import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/ui";
import { Globe, Mail, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the AACE Malaysia Section committee about membership, events, certification or volunteering.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Section."
        lead="Questions about joining, an upcoming event, study groups or speaking at a talk? Send the committee a message and the right person will get back to you."
      />

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <ContactForm />

          <div className="grid content-start gap-5">
            <div className="rounded-[20px] bg-white p-7">
              <h2 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">Malaysia Section</h2>
              <ul className="mt-5 grid gap-4 text-[15px] text-ink">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-violet" />
                  <a href={`mailto:${site.email}`} className="link-gradient font-semibold text-navy">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Pin className="mt-0.5 shrink-0 text-violet" />
                  {site.city}
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 shrink-0 text-violet" />
                  {site.region}
                </li>
              </ul>
            </div>

            <div className="rounded-[20px] bg-white p-7">
              <h2 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">AACE International</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                For dues, billing, certification applications and exam scheduling, contact AACE headquarters directly.
              </p>
              <ul className="mt-5 grid gap-4 text-[15px] text-ink">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 shrink-0 text-violet" />
                  <a href={`tel:${site.aace.phone.replace(/\./g, "")}`} className="font-semibold text-navy">
                    {site.aace.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-0.5 shrink-0 text-violet" />
                  <a href={site.aace.contact} target="_blank" rel="noreferrer" className="link-gradient font-semibold text-navy">
                    aacei.org contact page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
