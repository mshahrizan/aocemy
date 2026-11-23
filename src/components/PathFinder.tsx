"use client";

import { useId, useState } from "react";
import { ButtonLink, TextLink, cx } from "./ui";
import { Check } from "./icons";

type Option = { id: string; title: string; detail: string };

const profiles: Option[] = [
  { id: "student", title: "Student or recent graduate", detail: "Engineering, QS, construction or project management" },
  { id: "early", title: "Early-career professional", detail: "Up to five years in estimating, planning or cost control" },
  { id: "experienced", title: "Experienced professional", detail: "Leading cost, schedule or risk on major projects" },
  { id: "org", title: "Organisation or employer", detail: "Building a project controls team" },
];

const goals: Option[] = [
  { id: "certify", title: "Earn a certification", detail: "CCT, CST, CCP, PSP, EVP and more" },
  { id: "network", title: "Grow my network", detail: "Meet peers across Malaysia and Region 8" },
  { id: "skills", title: "Build technical skills", detail: "Talks, workshops and Recommended Practices" },
  { id: "volunteer", title: "Give back", detail: "Mentor, speak or join the committee" },
];

const membership: Record<string, string> = {
  student: "Student membership",
  early: "Regular membership",
  experienced: "Regular membership",
  org: "Organisational membership",
};

function recommendation(profile: string, goal: string) {
  const certFor: Record<string, string> = {
    student: "Start with CCT or CST once you have some field experience, and join a study group early.",
    early: "Aim for CCT or CST now, then work towards CCP or PSP. Join the next study group intake.",
    experienced: "CCP, PSP, EVP or PRMP fit most senior roles. Join a prep workshop to plan your exam.",
    org: "Enrol your team in a group CCP or PSP prep programme run by the Section.",
  };
  const byGoal: Record<string, { step: string; cta: { label: string; href: string } }> = {
    certify: { step: certFor[profile], cta: { label: "Explore certifications", href: "/certification" } },
    network: {
      step: "Come to a monthly technical talk and the year-end networking evening.",
      cta: { label: "See upcoming events", href: "/events" },
    },
    skills: {
      step: "Work through AACE Recommended Practices and the TCM Framework, then attend a workshop.",
      cta: { label: "Browse resources", href: "/resources" },
    },
    volunteer: {
      step: "Tell the committee how you would like to help: speaking, mentoring or organising.",
      cta: { label: "Contact the committee", href: "/contact" },
    },
  };
  return {
    steps: [
      `Join AACE International with ${membership[profile]}.`,
      "Select Malaysia Section in your AACE member profile.",
      byGoal[goal].step,
    ],
    cta: byGoal[goal].cta,
  };
}

export function PathFinder({ className }: { className?: string }) {
  const headingId = useId();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);

  const result = profile && goal ? recommendation(profile, goal) : null;

  return (
    <div
      className={cx(
        "rounded-[20px] bg-white p-6 text-navy shadow-[0_30px_80px_-30px_rgba(5,36,58,0.55)] sm:p-8",
        className,
      )}
      role="region"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="font-display text-[28px] leading-tight font-semibold tracking-[-0.018em] sm:text-[31px]">
        Find your path in AACE
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink">
        Two quick questions, and we&apos;ll point you to the right membership, programme and next step.
      </p>

      <div className="mt-6 flex items-center gap-2" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cx("h-[5px] flex-1 rounded-full transition-colors", i <= step ? "bg-brand-gradient" : "bg-hair")}
          />
        ))}
        <span className="ml-2 text-[13px] whitespace-nowrap text-muted">Step {step + 1} of 3</span>
      </div>

      <div className="mt-6" aria-live="polite">
        {step === 0 && (
          <OptionList
            legend="What best describes you?"
            options={profiles}
            selected={profile}
            onSelect={(id) => {
              setProfile(id);
              setStep(1);
            }}
          />
        )}

        {step === 1 && (
          <OptionList
            legend="What matters most right now?"
            options={goals}
            selected={goal}
            onSelect={(id) => {
              setGoal(id);
              setStep(2);
            }}
          />
        )}

        {step === 2 && result && (
          <div>
            <p className="text-[17px] font-semibold">Your suggested path</p>
            <ol className="mt-4 grid gap-3">
              {result.steps.map((s, i) => (
                <li key={i} className="flex gap-3 rounded-[14px] border border-hair p-4 text-[15px] leading-snug text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-[12px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ButtonLink href={result.cta.href} arrow>
                {result.cta.label}
              </ButtonLink>
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setProfile(null);
                  setGoal(null);
                }}
                className="h-12 rounded-[10px] px-4 text-[15px] font-semibold text-ink hover:text-navy"
              >
                Start again
              </button>
            </div>
          </div>
        )}
      </div>

      {step === 1 && (
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-4 text-[14px] font-semibold text-muted hover:text-navy"
        >
          ← Back
        </button>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-hair pt-5 text-[15px]">
        <span className="text-muted">Rather talk first?</span>
        <TextLink href="/contact">Contact the committee</TextLink>
      </div>
    </div>
  );
}

function OptionList({
  legend,
  options,
  selected,
  onSelect,
}: {
  legend: string;
  options: Option[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[17px] font-semibold">{legend}</legend>
      <ul className="mt-4 grid gap-2.5">
        {options.map((o) => {
          const active = selected === o.id;
          return (
            <li key={o.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(o.id)}
                className={cx(
                  "group flex w-full items-center justify-between gap-4 rounded-[14px] border px-4 py-3.5 text-left transition",
                  active ? "border-violet bg-[#8d65fd0d]" : "border-hair hover:border-line hover:bg-mist/60",
                )}
              >
                <span>
                  <span className="block text-[15.5px] font-semibold text-navy">{o.title}</span>
                  <span className="mt-0.5 block text-[13.5px] text-muted">{o.detail}</span>
                </span>
                <span
                  className={cx(
                    "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition",
                    active ? "border-transparent bg-brand-solid text-white" : "border-line text-transparent group-hover:border-navy",
                  )}
                >
                  <Check width={13} height={13} strokeWidth={3} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
