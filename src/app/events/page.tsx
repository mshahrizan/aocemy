import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EventsBrowser } from "@/components/Events";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import { events, formatEventDate } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events & Education",
  description:
    "Technical talks, certification workshops, webinars, study groups and the annual conference from the AACE Malaysia Section.",
};

const formats = [
  {
    title: "Technical talks",
    body: "Monthly evening sessions in the Klang Valley, streamed for members elsewhere in Malaysia.",
  },
  {
    title: "Workshops",
    body: "Hands-on days on estimating, scheduling, earned value, risk and claims.",
  },
  {
    title: "Webinars",
    body: "Lunchtime sessions with speakers from across AACE Region 8 and beyond.",
  },
  {
    title: "Annual conference",
    body: "A full day of keynotes, case studies and panels, and the Section's biggest networking event.",
  },
];

export default function EventsPage() {
  const next = events[0];
  const d = formatEventDate(next.date);

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events & education."
        lead="Technical talks, workshops, webinars, study groups and an annual conference. Most talks are open to non-members and count towards continuing education credits."
        aside={
          <div className="rounded-[20px] bg-white p-7 text-navy shadow-[0_30px_80px_-30px_rgba(5,36,58,0.55)]">
            <p className="text-[13px] font-semibold text-muted">Next up</p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-[56px] leading-none font-semibold tracking-[-0.03em]">{d.day}</span>
              <span className="text-[16px] font-semibold">
                {d.month} {d.year}
                <span className="block text-[13.5px] font-medium text-muted">
                  {d.weekday} · {next.time}
                </span>
              </span>
            </div>
            <p className="mt-5 font-display text-[22px] leading-snug font-semibold tracking-[-0.012em]">{next.title}</p>
            <p className="mt-2 text-[14.5px] text-muted">
              {next.venue} · {next.format}
            </p>
            <ButtonLink href="#calendar" className="mt-6 w-full" arrow>
              View the calendar
            </ButtonLink>
          </div>
        }
      />

      <Section id="calendar">
        <SectionHeading
          title="The Section calendar."
          intro="Filter by type. To register, use the link on each event and the organiser will confirm your place by email."
        />
        <div className="mt-12">
          <EventsBrowser />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title="How we learn together." intro="Four formats run through the year so there is always a next session to look forward to." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f) => (
            <article key={f.title} className="rounded-[20px] bg-white p-7">
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">{f.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-mist pb-24">
        <Container>
          <div className="hero-rings flex flex-col items-start justify-between gap-8 rounded-[24px] p-8 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <h2 className="h-display text-[clamp(2rem,1.4rem+2vw,2.8rem)]">Speak, host or sponsor.</h2>
              <p className="mt-3 max-w-[50ch] text-[16.5px] text-white/75">
                Have a project story worth sharing, a venue to offer, or a team you&apos;d like to put in front of
                Malaysia&apos;s project controls community? Talk to the Technical Programmes director.
              </p>
            </div>
            <ButtonLink href="/contact" variant="light" size="lg" arrow>
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
