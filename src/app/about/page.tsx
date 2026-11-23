import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { committeeRoles, disciplines, stats } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Section",
  description:
    "Who we are: the Malaysia Section of AACE International, part of Region 8, advancing cost engineering and total cost management in Malaysia.",
};

const pillars = [
  {
    n: "01",
    title: "Advance the practice",
    body: "Promote AACE's Recommended Practices and the Total Cost Management Framework across Malaysian projects, owners and contractors.",
  },
  {
    n: "02",
    title: "Develop people",
    body: "Help members earn and keep AACE certifications through study groups, prep workshops and CEU-eligible talks.",
  },
  {
    n: "03",
    title: "Connect the community",
    body: "Bring planners, estimators, cost engineers and commercial professionals together across sectors and states.",
  },
  {
    n: "04",
    title: "Represent Malaysia",
    body: "Link Malaysian practitioners with AACE International, Region 8 and sections across Asia, Australia and the Pacific Rim.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Malaysia's local home of AACE International."
        lead="AACE International is the premier professional association for cost engineering and total cost management. The Malaysia Section brings its knowledge, certifications and community to professionals across the country."
        actions={
          <>
            <ButtonLink href="/membership" variant="light" arrow>
              Join the Section
            </ButtonLink>
            <ButtonLink href="#committee" variant="outline-light">
              Meet the committee
            </ButtonLink>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h-section">Who we are</h2>
            <div className="mt-6 grid gap-5 text-[17px] leading-relaxed text-ink">
              <p>
                AACE International brings together professionals worldwide who are passionate about cost engineering and
                total cost management. Its members span diverse industries and disciplines, united by a shared commitment
                to technical excellence, continuous learning and collaborative innovation.
              </p>
              <p>
                The Malaysia Section is AACE&apos;s local network in Malaysia and part of{" "}
                <strong className="font-semibold text-navy">{site.region}</strong>. We run technical talks, study groups,
                mentoring and an annual conference, all led by volunteers from the local project community.
              </p>
              <p>
                Participation in the Section is included in your AACE International membership dues. Select Malaysia as
                your Section in your member profile and you&apos;re in.
              </p>
            </div>
          </div>
          <div className="card p-8 sm:p-10">
            <Eyebrow>What is cost engineering?</Eyebrow>
            <p className="mt-4 font-display text-[23px] leading-snug font-semibold tracking-[-0.012em] text-navy">
              The application of scientific principles and techniques to problems of estimation, cost control, business
              planning and management science, profitability analysis, project management, and planning and scheduling.
            </p>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink">
              Combined with the Total Cost Management Framework, it makes up the AACE International body of knowledge,
              developed, refined and deployed by industry professionals worldwide.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="What the Section sets out to do."
          intro="Four commitments shape our programme each year. They are set by the committee and reviewed at the AGM."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.n} className="rounded-[20px] bg-white p-7">
              <span className="font-mono text-[13px] text-muted">{p.n}</span>
              <h3 className="mt-8 font-display text-[23px] leading-tight font-semibold tracking-[-0.015em] text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="h-section">Part of a global association since 1956.</h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink">
              Established in 1956, AACE stands for the Association for the Advancement of Cost Engineering. Together
              with the AACE International Certification Institute, it serves members and certificants in more than 100
              countries.
            </p>
            <TextLink href={site.aace.home} target="_blank" rel="noreferrer" className="mt-6 inline-block">
              Visit AACE International
            </TextLink>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-t border-line pt-4">
                <dt className="mt-2 text-[14px] text-ink">{s.label}</dt>
                <dd className="font-display text-[clamp(2rem,1.6rem+1.4vw,2.7rem)] leading-none font-semibold tracking-[-0.03em] text-navy">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="mist" id="committee">
        <SectionHeading
          title="The Section committee."
          intro="The committee is elected by members at the Annual General Meeting. Names for the current term are published after each AGM."
          action={<TextLink href="/contact">Write to the committee</TextLink>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {committeeRoles.map((c) => (
            <article key={c.role} className="flex flex-col rounded-[20px] bg-white p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient font-display text-[17px] font-bold text-white">
                {c.role
                  .split(/[\s&-]+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.01em] text-navy">{c.role}</h3>
              <p className="mt-1 text-[13.5px] font-semibold text-muted">To be announced</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{c.focus}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="h-section max-w-[14ch]">Our community includes professionals in:</h2>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {disciplines.map((d) => (
              <li key={d} className="border-b border-hair py-4 text-[16.5px] font-medium text-navy">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-white pb-24">
        <Container>
          <div className="hero-rings flex flex-col items-start justify-between gap-8 rounded-[24px] p-8 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <h2 className="h-display text-[clamp(2rem,1.4rem+2vw,2.8rem)]">Want to get involved?</h2>
              <p className="mt-3 max-w-[48ch] text-[16.5px] text-white/75">
                Volunteer as a speaker, mentor or organiser. It&apos;s the fastest way to build your network and your
                leadership skills.
              </p>
            </div>
            <ButtonLink href="/contact" variant="light" size="lg" arrow>
              Volunteer with us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
