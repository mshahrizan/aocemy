// Small UI-style vignettes used inside the programme cards, in the spirit of
// the product mock-ups on higglo.io. Purely decorative.

import type { ReactNode } from "react";
import { cx } from "./ui";
import { Calendar, Check } from "./icons";

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={cx(
        "rounded-[14px] bg-white p-4 text-[12.5px] text-ink shadow-[0_14px_40px_-22px_rgba(5,36,58,0.45)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TalkVignette() {
  return (
    <Frame className="w-full max-w-[290px]">
      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-muted">
        <Calendar width={14} height={14} /> Technical talk · Hybrid
      </div>
      <p className="mt-2 text-[14px] leading-snug font-semibold text-navy">Estimate classification on EPCC projects</p>
      <div className="mt-3 flex gap-1.5">
        <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-semibold text-navy">Kuala Lumpur</span>
        <span className="rounded-full bg-[#8d65fd14] px-2 py-0.5 text-[11px] font-semibold text-violet">CEU eligible</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-hair pt-3">
        <div className="flex -space-x-1.5">
          {["#f0263f", "#8d65fd", "#3aaffe", "#05243a"].map((c) => (
            <span key={c} className="h-5 w-5 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </div>
        <span className="rounded-md bg-navy px-2.5 py-1 text-[11px] font-semibold text-white">Register</span>
      </div>
    </Frame>
  );
}

export function StudyVignette() {
  const rows = [
    { m: "Cost estimating", p: 100 },
    { m: "Planning & scheduling", p: 100 },
    { m: "Earned value", p: 62 },
    { m: "Risk & contingency", p: 18 },
  ];
  return (
    <Frame className="w-full max-w-[290px]">
      <div className="flex items-center justify-between">
        <p className="text-[13.5px] font-semibold text-navy">CCP study group</p>
        <span className="text-[11px] font-semibold text-muted">Week 6 of 10</span>
      </div>
      <ul className="mt-3 grid gap-2.5">
        {rows.map((r) => (
          <li key={r.m}>
            <div className="flex items-center justify-between text-[11.5px]">
              <span>{r.m}</span>
              {r.p === 100 ? (
                <Check width={13} height={13} strokeWidth={3} className="text-violet" />
              ) : (
                <span className="text-muted">{r.p}%</span>
              )}
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-hair">
              <div className="h-1.5 rounded-full bg-brand-gradient" style={{ width: `${r.p}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function PracticesVignette() {
  const rps = [
    ["17R-97", "Cost Estimate Classification"],
    ["29R-03", "Forensic Schedule Analysis"],
    ["57R-09", "Integrated Cost & Schedule Risk"],
  ];
  return (
    <Frame className="w-full max-w-[290px]">
      <div className="rounded-lg bg-mist px-3 py-2 text-[11.5px] text-muted">Search Recommended Practices…</div>
      <ul className="mt-3 grid gap-2">
        {rps.map(([code, title]) => (
          <li key={code} className="flex items-center gap-2.5">
            <span className="rounded-md bg-navy px-1.5 py-0.5 font-mono text-[10.5px] font-semibold text-white">{code}</span>
            <span className="truncate text-[12px] text-navy">{title}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function NetworkVignette() {
  const people = [
    { i: "AR", c: "#f0263f", t: "Planner · Oil & gas" },
    { i: "SL", c: "#8d65fd", t: "Cost engineer · Rail" },
    { i: "NH", c: "#3aaffe", t: "QS · Data centres" },
  ];
  return (
    <Frame className="w-full max-w-[290px]">
      <p className="text-[13.5px] font-semibold text-navy">Members near you</p>
      <ul className="mt-3 grid gap-2">
        {people.map((p) => (
          <li key={p.i} className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-[10.5px] font-bold text-white"
              style={{ background: p.c }}
            >
              {p.i}
            </span>
            <span className="text-[12px]">{p.t}</span>
            <span className="ml-auto rounded-md px-2 py-0.5 text-[10.5px] font-semibold text-navy shadow-[inset_0_0_0_1px_var(--color-line)]">
              Connect
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function MentorVignette() {
  return (
    <div aria-hidden className="grid w-full max-w-[290px] gap-2.5">
      <div className="ml-auto max-w-[220px] rounded-[14px] rounded-br-sm bg-navy px-3.5 py-2.5 text-[12px] text-white">
        How should I prepare for my first CST attempt?
      </div>
      <div className="max-w-[240px] rounded-[14px] rounded-bl-sm bg-white px-3.5 py-2.5 text-[12px] text-ink shadow-[0_14px_40px_-22px_rgba(5,36,58,0.45)]">
        <span className="mb-1 block text-[11px] font-semibold text-violet">Mentor · PSP, 12 yrs</span>
        Start with the exam blueprint, then join the Thursday study group. I&apos;ll share my notes.
      </div>
    </div>
  );
}

export function IndustryVignette() {
  const tags = ["Oil & gas", "Rail", "Power", "Data centres", "Petrochemical", "Semiconductor", "Public works"];
  return (
    <div aria-hidden className="flex w-full max-w-[300px] flex-wrap justify-center gap-1.5">
      {tags.map((t, i) => (
        <span
          key={t}
          className={cx(
            "rounded-full px-3 py-1.5 text-[11.5px] font-semibold",
            i % 3 === 0 ? "bg-navy text-white" : "bg-white text-navy shadow-[0_8px_24px_-16px_rgba(5,36,58,0.6)]",
          )}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
