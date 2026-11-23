import Link from "next/link";
import { PathFinder } from "@/components/PathFinder";
import { FaqList } from "@/components/Faq";
import { EventCard } from "@/components/Events";
import {
  IndustryVignette,
  MentorVignette,
  NetworkVignette,
  PracticesVignette,
  StudyVignette,
  TalkVignette,
} from "@/components/Illustrations";
import { ButtonLink, CheckList, Container, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { certLevels, disciplines, heroChecklist, homeFaqs, industries, stats } from "@/lib/content";
import { events } from "@/lib/events";
import { site } from "@/lib/site";

const programmes = [
  {
    title: "Technical talks & site visits",
    body: "Monthly evenings in the Klang Valley and online, where practitioners share how they estimate, plan and control real projects.",
    Art: TalkVignette,
  },
  {
    title: "Certification study groups",
    body: "Structured prep for CCP, PSP, EVP and the technician exams, led by Malaysians who already hold the credential.",
    Art: StudyVignette,
  },
  {
    title: "Recommended Practices",
    body: "Put AACE's 120+ Recommended Practices to work, from estimate classification to forensic schedule analysis.",
    Art: PracticesVignette,
  },
  {
    title: "A network that spans sectors",
    body: "Meet planners, cost engineers and QS professionals from energy, infrastructure, manufacturing and the public sector.",
    Art: NetworkVignette,
  },
  {
    title: "Mentoring for young professionals",
    body: "Students and early-career members are matched with experienced certificants for advice on exams and careers.",
    Art: MentorVignette,
  },
  {
    title: "Industry & university outreach",
    body: "Talks for employers and universities that bring total cost management into Malaysian project teams and classrooms.",
    Art: IndustryVignette,
  },
];

const audiences = [
  {
    eyebrow: "Students & graduates",
    title: "Start your career a step ahead",
    body: "Student membership, career talks and a mentor who has been where you are. Learn the language of cost engineering before your first site posting.",
    href: "/membership",
    link: "Student membership",
  },
  {
    eyebrow: "Practising professionals",
    title: "Prove what you know",
    body: "Earn a globally recognised credential, keep it current with CEU-eligible talks, and stay close to the practitioners shaping the profession.",
    href: "/certification",
    link: "Certification paths",
  },
  {
    eyebrow: "Organisations & employers",
    title: "Build a stronger controls team",
    body: "Organisational membership, group study programmes and in-house talks that align your team on AACE's Recommended Practices.",
    href: "/contact",
    link: "Talk to the committee",
  },
];

const journey = [
  {
    title: "Join",
    body: "Become an AACE International member and choose Malaysia as your Section.",
    gets: "Welcome pack, member directory, Virtual Library access.",
  },
  {
    title: "Connect",
    body: "Come to a technical talk or networking evening and meet the community.",
    gets: "Peers across energy, infrastructure and construction.",
  },
  {
    title: "Learn",
    body: "Work through Recommended Practices, workshops and the TCM Framework.",
    gets: "CEU-eligible learning, slides and recordings.",
  },
  {
    title: "Certify",
    body: "Join a study group and sit your exam at a testing centre or online.",
    gets: "Study plans, mock papers and a mentor.",
  },
  {
    title: "Lead",
    body: "Give back as a speaker, mentor or committee volunteer.",
    gets: "Leadership experience and AACE recognition.",
  },
];

export default function Home() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-rings text-white">
        <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="lg:pt-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1.5 text-[13px] font-medium text-white/85 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-brand-gradient" />
              AACE International · {site.region}
            </p>
            <h1 className="h-display mt-6 text-[clamp(2.6rem,1.5rem+3.6vw,3.95rem)] text-white">
              Advancing cost engineering and project controls in Malaysia.
            </h1>
            <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-white/75 md:text-[19px]">
              The AACE Malaysia Section connects estimators, planners, cost engineers, quantity surveyors and project
              controls professionals with AACE International&apos;s body of knowledge, globally recognised certifications
              and a network of 9,500+ members in 100 countries.
            </p>
            <div className="mt-8">
              <CheckList items={heroChecklist} light />
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6 text-[14.5px] text-white/70">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-[15px] font-bold text-white">
                MY
              </span>
              <p>
                Section participation is <span className="font-semibold text-white">included in your AACE membership</span>
                . No separate section fee.
              </p>
            </div>
          </div>
          <PathFinder className="lg:self-start" />
        </Container>
      </section>

      {/* Stats band: navy fades into white like the higglo.io reel band */}
      <section className="bg-[linear-gradient(var(--color-navy)_0,var(--color-navy)_42%,#fff_42%,#fff_100%)]">
        <Container>
          <div className="rounded-[24px] bg-mist p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <h2 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-navy">AACE at a glance</h2>
              <p className="text-[14px] text-muted">The global association behind the Malaysia Section</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-line pt-4">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[clamp(2.1rem,1.6rem+1.6vw,2.9rem)] leading-none font-semibold tracking-[-0.03em] text-navy">
                    {s.value}
                  </dd>
                  <dd className="mt-2 text-[14px] text-ink">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Programmes */}
      <Section id="programmes">
        <SectionHeading
          title="Everything a project controls career needs, close to home."
          intro="Drop in for one talk or take part in the whole programme. Every activity is volunteer-led and grounded in AACE's Recommended Practices."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map(({ title, body, Art }) => (
            <article key={title} className="card flex flex-col p-3">
              <div className="flex h-[210px] items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#e9eef3,#f1f4f7)] px-5">
                <Art />
              </div>
              <div className="px-4 pt-6 pb-5">
                <h3 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.015em] text-navy">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink">{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
          <span className="text-muted">Also:</span>
          <TextLink href="/resources#publications">TCM Framework</TextLink>
          <TextLink href="/resources#publications">Skills &amp; Knowledge of Cost Engineering</TextLink>
          <TextLink href="/resources#publications">Cost Engineering journal</TextLink>
          <TextLink href="/resources#publications">Virtual Library</TextLink>
        </div>
      </Section>

      {/* Audiences */}
      <Section tone="mist">
        <SectionHeading
          title="Built for project professionals at every stage."
          intro="From a final-year student to a head of project controls, the Section has a place for you, and for the organisations you work with."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {audiences.map((a) => (
            <div key={a.title} className="border-t border-line pt-6">
              <Eyebrow>{a.eyebrow}</Eyebrow>
              <h3 className="mt-3 font-display text-[25px] leading-tight font-semibold tracking-[-0.018em] text-navy">
                {a.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink">{a.body}</p>
              <TextLink href={a.href} className="mt-5 inline-block text-[15px]">
                {a.link}
              </TextLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Certification */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="h-section">Globally recognised certifications, earned in Malaysia.</h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink">
              AACE certifications validate your knowledge, skills and abilities in cost engineering and project
              controls. Exams are delivered by Kryterion at testing centres or through online proctoring, so you can
              sit them without leaving Malaysia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/certification" arrow>
                Compare certifications
              </ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                Next study group
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {certLevels.map((lvl) => (
              <article key={lvl.level} className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[24px] font-semibold tracking-[-0.015em] text-navy">
                    {lvl.level} level
                  </h3>
                  <span className="text-[13px] font-semibold text-muted">{lvl.step}</span>
                </div>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{lvl.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {lvl.certs.map((c) => (
                    <li key={c.code}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-3.5 pl-1.5 text-[13.5px] font-medium text-navy shadow-[0_6px_18px_-12px_rgba(5,36,58,0.5)] transition hover:shadow-[inset_0_0_0_1.5px_var(--color-navy)]"
                      >
                        <span className="rounded-full bg-navy px-2 py-0.5 text-[11.5px] font-bold text-white">{c.code}</span>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey */}
      <Section tone="mist">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <h2 className="h-section max-w-[17ch]">From your first talk to your first credential.</h2>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink">
            Most members follow a similar path. Wherever you start, the Section has a programme for the next step.
          </p>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <span aria-hidden className="absolute top-[9px] right-0 left-0 hidden h-[2px] bg-brand-gradient md:block" />
          {journey.map((j, i) => (
            <li key={j.title} className="relative">
              <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-violet bg-mist">
                <span className="h-2 w-2 rounded-full bg-violet" />
              </span>
              <p className="mt-6 text-[13px] font-semibold text-muted">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-[26px] font-semibold tracking-[-0.02em] text-navy">{j.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{j.body}</p>
              <p className="mt-5 text-[12.5px] font-semibold text-violet">What you get</p>
              <p className="mt-1 text-[14.5px] leading-relaxed text-ink">{j.gets}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          title="Where our members work."
          intro="Cost engineering applies wherever capital is put to work. Our members plan, estimate and control projects across Malaysia's major sectors."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white p-6">
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-navy">{ind.name}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{ind.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-[15px] font-semibold text-navy">Disciplines our members practise</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <li key={d} className="rounded-full bg-mist px-3.5 py-1.5 text-[14px] text-navy">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Events */}
      <Section tone="mist">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h-section max-w-[16ch]">Upcoming at the Section.</h2>
          <TextLink href="/events" className="text-[15.5px]">
            See all events
          </TextLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {upcoming.map((e) => (
            <EventCard key={e.slug} event={e} compact />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="h-section">Questions people ask before they join.</h2>
            <p className="mt-6 max-w-[40ch] text-[16.5px] leading-relaxed text-ink">
              Still deciding? Read the{" "}
              <Link href="/membership" className="link-gradient font-semibold text-navy">
                membership guide
              </Link>{" "}
              or ask the committee directly. We reply to every message.
            </p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="hero-rings text-white">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="h-display text-[clamp(2.4rem,1.5rem+3vw,3.6rem)] text-white">
              Ready to grow with the Section?
            </h2>
            <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-white/75 md:text-[18.5px]">
              Tell us where you are in your career and we&apos;ll point you to the right membership, programme and
              people. It takes less than a minute.
            </p>
            <dl className="mt-10 grid max-w-[460px] gap-0">
              {[
                ["9,500+", "AACE members in 100+ countries"],
                ["9", "certifications from technician to expert"],
                ["120+", "Recommended Practices to learn from"],
              ].map(([v, l]) => (
                <div key={l} className="flex items-baseline gap-6 border-t border-white/10 py-4">
                  <dt className="w-24 shrink-0 font-display text-[28px] font-semibold tracking-[-0.02em] text-white">{v}</dt>
                  <dd className="text-[15px] text-white/75">{l}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:gap-3"
            >
              About the Malaysia Section <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <PathFinder className="lg:self-start" />
        </Container>
      </section>
    </>
  );
}
