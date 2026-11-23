import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PathFinder } from "@/components/PathFinder";
import { FaqList } from "@/components/Faq";
import { ButtonLink, CheckList, Section, SectionHeading, TextLink } from "@/components/ui";
import { memberBenefits, membershipFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join AACE International and select the Malaysia Section. Membership benefits, categories and how to join.",
};

const categories = [
  {
    name: "Regular",
    who: "Working professionals in cost engineering, estimating, planning, scheduling and project controls.",
    points: ["Full member benefits", "Member rates on exams", "Voting rights in the Section"],
  },
  {
    name: "Student",
    who: "Full-time students in engineering, quantity surveying, construction or project management.",
    points: ["Reduced dues", "Mentoring circle", "Career talks and site visits"],
  },
  {
    name: "Organisational",
    who: "Companies, owners and contractors developing a project controls capability.",
    points: ["Memberships for your team", "Group study programmes", "In-house technical talks"],
  },
];

const steps = [
  {
    title: "Create your AACE profile",
    body: "Sign up on the AACE portal. It takes a few minutes and you'll use the same login for myAACE.",
    link: { label: "Open the AACE portal", href: site.aace.portal },
  },
  {
    title: "Choose a membership",
    body: "Pick Regular, Student or Organisational membership and pay your dues to AACE International.",
    link: { label: "Membership options", href: site.aace.join },
  },
  {
    title: "Select Malaysia Section",
    body: "In your member profile, choose Malaysia as your local Section. There is no separate section fee.",
    link: { label: "How to select your Section", href: site.aace.selectSection },
  },
  {
    title: "Come and say hello",
    body: "We'll add you to the Section mailing list. Your first technical talk is the best place to start.",
    link: { label: "Upcoming events", href: "/events" },
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Be a leader. Join AACE."
        lead="AACE membership gives you the resources, tools and community to grow your career and your organisation's capability. Select the Malaysia Section and get all of it, locally."
        actions={
          <>
            <ButtonLink href={site.aace.join} target="_blank" rel="noreferrer" variant="light" arrow>
              Join AACE International
            </ButtonLink>
            <ButtonLink href="#how-to-join" variant="outline-light">
              How to join
            </ButtonLink>
          </>
        }
        aside={<PathFinder />}
      />

      <Section>
        <SectionHeading
          title="Experience the difference."
          intro="Members gain access to practical content, essential knowledge and a professional community, plus discounts on AACE products, services, events and certifications."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {memberBenefits.map((b, i) => (
            <article key={b.title} className="card p-7">
              <span className="font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-7 font-display text-[21px] leading-tight font-semibold tracking-[-0.012em] text-navy">
                {b.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">{b.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="Categories of membership."
          intro="AACE offers membership options for individuals and organisations. Dues are set and collected by AACE International."
          action={
            <TextLink href={site.aace.join} target="_blank" rel="noreferrer">
              See current dues on aacei.org
            </TextLink>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <article key={c.name} className="flex flex-col rounded-[20px] bg-white p-8">
              <h3 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-navy">{c.name}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink">{c.who}</p>
              <div className="mt-6 border-t border-hair pt-6">
                <CheckList items={c.points} columns={1} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="how-to-join">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <h2 className="h-section max-w-[15ch]">How to join the Malaysia Section.</h2>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink">
            Please review AACE&apos;s sanctions law compliance notice before you apply. Then four steps and you&apos;re a
            member.
          </p>
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-navy pt-6">
              <span className="font-display text-[40px] leading-none font-semibold tracking-[-0.03em] text-navy">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[21px] font-semibold tracking-[-0.012em] text-navy">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">{s.body}</p>
              <TextLink
                href={s.link.href}
                {...(s.link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-4 inline-block text-[14.5px]"
              >
                {s.link.label}
              </TextLink>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" id="young-professionals">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h-section">Students and young professionals.</h2>
            <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-ink">
              The mentoring circle pairs students and early-career members with experienced certificants. Expect
              practical advice on your first estimate, your first baseline schedule and your first AACE exam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" arrow>
                Ask about mentoring
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["University talks", "Introductions to cost engineering for final-year students."],
              ["Mentor matching", "A certificant mentor for the length of your study plan."],
              ["Site visits", "See project controls in action on live projects."],
            ].map(([t, b]) => (
              <div key={t} className="flex items-start justify-between gap-6 rounded-[20px] bg-white p-6">
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em] text-navy">{t}</h3>
                  <p className="mt-1.5 text-[15px] text-ink">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="h-section">Membership questions.</h2>
            <p className="mt-6 max-w-[40ch] text-[16.5px] leading-relaxed text-ink">
              Billing and renewals are handled by AACE International. For anything about the Section, contact the
              Membership director.
            </p>
            <TextLink href="/contact" className="mt-6 inline-block">
              Contact the Section
            </TextLink>
          </div>
          <FaqList items={membershipFaqs} />
        </div>
      </Section>
    </>
  );
}
