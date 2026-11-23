import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading, TextLink } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";
import { featuredPractices } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "AACE Recommended Practices, the TCM Framework, Skills & Knowledge of Cost Engineering, the Cost Engineering journal and the Virtual Library.",
};

const publications = [
  {
    tag: "Framework",
    title: "Total Cost Management (TCM) Framework",
    body: "AACE's integrated process for managing the costs of portfolios, programmes, projects and assets across their life cycle.",
  },
  {
    tag: "Reference",
    title: "Skills & Knowledge of Cost Engineering",
    body: "The core text for cost engineering practice and the go-to reference for certification candidates.",
  },
  {
    tag: "Journal",
    title: "Cost Engineering journal",
    body: "Peer-reviewed articles and case studies from practitioners and researchers around the world.",
  },
  {
    tag: "Library",
    title: "Virtual Library",
    body: "A collection of 6,500 technical papers, articles and presentations, free to members.",
  },
  {
    tag: "Standards",
    title: "Recommended Practices",
    body: "More than 120 Recommended Practices covering estimating, scheduling, risk, earned value, claims and more.",
  },
  {
    tag: "Community",
    title: "myAACE Communities",
    body: "Discussion forums, resource libraries and technical subcommittees for specific functional areas.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical resources for cost engineers."
        lead="AACE's body of knowledge is developed, refined and deployed by industry professionals worldwide. Here's where to start, and how the Section helps you apply it on Malaysian projects."
        actions={
          <ButtonLink href={site.aace.resources} target="_blank" rel="noreferrer" variant="light" arrow>
            Browse on aacei.org
          </ButtonLink>
        }
      />

      <Section id="publications">
        <SectionHeading
          title="The AACE body of knowledge."
          intro="Members get access to most of these resources as part of their membership. Some publications are sold through the AACE shop."
          action={
            <TextLink href={site.aace.shop} target="_blank" rel="noreferrer">
              Visit the AACE shop
            </TextLink>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((p) => (
            <article key={p.title} className="card flex flex-col p-7">
              <span className="w-fit rounded-full bg-white px-3 py-1 text-[12.5px] font-semibold text-navy">{p.tag}</span>
              <h3 className="mt-8 font-display text-[23px] leading-tight font-semibold tracking-[-0.015em] text-navy">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="h-section">Recommended Practices to start with.</h2>
            <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-ink">
              These come up again and again in Section talks and study groups. They are a good foundation for anyone
              working on capital projects in Malaysia.
            </p>
            <TextLink href={site.aace.resources} target="_blank" rel="noreferrer" className="mt-6 inline-block">
              All Recommended Practices
            </TextLink>
          </div>
          <ul className="grid gap-3">
            {featuredPractices.map((rp) => (
              <li key={rp.code}>
                <a
                  href={site.aace.resources}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-[18px] bg-white p-5 transition hover:shadow-[0_18px_50px_-30px_rgba(5,36,58,0.5)]"
                >
                  <span className="w-[84px] shrink-0 rounded-lg bg-navy py-1.5 text-center font-mono text-[13px] font-semibold text-white">
                    {rp.code}
                  </span>
                  <span className="flex-1 text-[16px] leading-snug font-medium text-navy">{rp.title}</span>
                  <ArrowUpRight
                    width={18}
                    height={18}
                    className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="From the Malaysia Section."
          intro="Material from our own programme, shared with members after each session."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["Talk recordings & slides", "Recordings and slide decks from past technical talks and webinars."],
            ["Study group notes", "Shared notes, reading lists and practice questions from each exam intake."],
            ["Conference papers", "Papers and presentations from the Section's annual conference."],
          ].map(([t, b]) => (
            <article key={t} className="rounded-[20px] border border-hair p-7">
              <h3 className="font-display text-[21px] font-semibold tracking-[-0.012em] text-navy">{t}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">{b}</p>
              <p className="mt-6 text-[13px] font-semibold text-violet">Members only</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
