import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqList } from "@/components/Faq";
import { ButtonLink, CheckList, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";
import { certLevels, certificationFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "AACE certification programmes for cost and project controls professionals in Malaysia: CCT, CST, CCP, CEP, EVP, PRMP, PSP, CFCC and DRMP.",
};

const benefits = [
  "Excellence backed by globally recognised quality standards",
  "Global recognition that enhances your credibility in any market",
  "Career advancement through more opportunities and earning potential",
  "Validation of your knowledge, skills and abilities",
];

const support = [
  {
    title: "Study groups",
    body: "Weekly online sessions that work through each exam's blueprint, with a certified lead for every intake.",
  },
  {
    title: "Prep workshops",
    body: "Intensive in-person days with worked problems, technical paper clinics and timed practice.",
  },
  {
    title: "Mentors",
    body: "A certificant who has passed the exam you're preparing for, available for questions throughout.",
  },
  {
    title: "CEU-eligible talks",
    body: "Section technical talks and the annual conference help you earn credits towards recertification.",
  },
];

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="AACE certification for cost and project controls professionals."
        lead="AACE International offers globally recognised certification programmes for professionals at every stage. From newcomers to industry veterans, accredited credentials validate your knowledge, skills and abilities, and open doors to career growth."
        actions={
          <>
            <ButtonLink href={site.aace.portal} target="_blank" rel="noreferrer" variant="light" arrow>
              Apply on the AACE portal
            </ButtonLink>
            <ButtonLink href="#levels" variant="outline-light">
              Explore certifications
            </ButtonLink>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h-section">Why choose AACE certification?</h2>
            <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-ink">
              An AACE certification is more than a credential. It is a mark of excellence in cost engineering and project
              controls. The programmes follow the highest standards of rigour and quality, so your achievement is
              respected wherever your career takes you.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="font-display text-[20px] font-semibold text-navy">Key benefits include</p>
            <div className="mt-6">
              <CheckList items={benefits} columns={1} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist" id="levels">
        <SectionHeading
          title="Explore AACE certifications."
          intro="Nine credentials across three levels. Each links to the full details, eligibility and exam blueprint on aacei.org."
        />
        <div className="mt-14 grid gap-12">
          {certLevels.map((lvl) => (
            <div key={lvl.level} className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
              <div className="border-t-2 border-navy pt-5">
                <p className="text-[13px] font-semibold text-muted">{lvl.step}</p>
                <h3 className="mt-1 font-display text-[30px] font-semibold tracking-[-0.02em] text-navy">{lvl.level}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{lvl.summary}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {lvl.certs.map((c) => (
                  <a
                    key={c.code}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col rounded-[20px] bg-white p-6 transition hover:shadow-[0_18px_50px_-30px_rgba(5,36,58,0.5)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-lg bg-navy px-2.5 py-1 font-display text-[15px] font-bold tracking-[0.02em] text-white">
                        {c.code}
                      </span>
                      <ArrowUpRight
                        width={18}
                        height={18}
                        className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy"
                      />
                    </div>
                    <h4 className="mt-5 font-display text-[20px] leading-snug font-semibold tracking-[-0.01em] text-navy">
                      {c.name}
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink">{c.blurb}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="section-support">
        <SectionHeading
          title="How the Malaysia Section helps you pass."
          intro="Preparing alone is hard. Members get structured support from people who have already earned the credential."
          action={<TextLink href="/events">See study group dates</TextLink>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {support.map((s, i) => (
            <article key={s.title} className="card p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-solid text-[14px] font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-7 font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[20px] bg-white p-8 lg:col-span-2">
            <h2 className="font-display text-[30px] font-semibold tracking-[-0.02em] text-navy">
              Examination delivery
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink">
              The Certification Board of the AACE International Certification Institute has partnered with Kryterion
              Global Testing Solutions to deliver computer-based testing for all AACE certification exams.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-hair pt-5">
                <h3 className="font-display text-[19px] font-semibold text-navy">Testing centres</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">
                  A worldwide network of centres that all follow the same strict standards, so every candidate has a
                  consistent experience.
                </p>
                <TextLink href={site.aace.testCenters} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[14.5px]">
                  Find a testing centre
                </TextLink>
              </div>
              <div className="border-t border-hair pt-5">
                <h3 className="font-display text-[19px] font-semibold text-navy">Online proctoring</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">
                  Sit the exam at home or in the office, as long as your setup meets the minimum technical requirements.
                </p>
                <TextLink href={site.aace.certification} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[14.5px]">
                  Exam policies
                </TextLink>
              </div>
            </div>
          </article>
          <div className="grid gap-5">
            <article className="rounded-[20px] bg-white p-8">
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">Recertification</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">
                Protect your investment for the life of your career. Recertification lets you keep your AACE credential
                until retirement.
              </p>
              <TextLink href={site.aace.recertification} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[14.5px]">
                Learn more
              </TextLink>
            </article>
            <article className="rounded-[20px] bg-white p-8">
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">Accreditation</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink">
                AACE International is accredited by the Council of Engineering and Scientific Specialty Boards (CESB).
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="h-section">Certification questions.</h2>
          <FaqList items={certificationFaqs} />
        </div>
      </Section>

      <section className="bg-white pb-24">
        <Container>
          <div className="hero-rings flex flex-col items-start justify-between gap-8 rounded-[24px] p-8 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <h2 className="h-display text-[clamp(2rem,1.4rem+2vw,2.8rem)]">Start your application.</h2>
              <p className="mt-3 max-w-[48ch] text-[16.5px] text-white/75">
                Create an AACE profile and apply online. Members save on application fees, continuing education and more.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.aace.portal} target="_blank" rel="noreferrer" variant="light" size="lg" arrow>
                Apply now
              </ButtonLink>
              <ButtonLink href="/membership" variant="outline-light" size="lg">
                Membership savings
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
