"use client";

import { useState } from "react";
import { events, eventTypes, formatEventDate, type EventType, type SectionEvent } from "@/lib/events";
import { site } from "@/lib/site";
import { cx } from "./ui";
import { ArrowUpRight, Clock, Pin } from "./icons";

export function EventCard({ event, compact }: { event: SectionEvent; compact?: boolean }) {
  const d = formatEventDate(event.date);
  const subject = encodeURIComponent(`Registration: ${event.title}`);
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-hair bg-white p-6 transition hover:border-line hover:shadow-[0_18px_50px_-30px_rgba(5,36,58,0.45)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-2 text-navy">
          <span className="font-display text-[44px] leading-none font-semibold tracking-[-0.03em]">{d.day}</span>
          <span className="text-[15px] font-semibold">
            {d.month} {d.year}
            <span className="block text-[13px] font-medium text-muted">{d.weekday}</span>
          </span>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-[12.5px] font-semibold text-navy">{event.type}</span>
      </div>

      <h3 className="mt-6 font-display text-[21px] leading-snug font-semibold tracking-[-0.012em] text-navy">
        {event.title}
      </h3>
      {!compact && <p className="mt-3 text-[15.5px] leading-relaxed text-ink">{event.summary}</p>}

      <ul className="mt-5 grid gap-1.5 text-[14px] text-muted">
        <li className="flex items-center gap-2">
          <Clock width={16} height={16} /> {event.time}
        </li>
        <li className="flex items-center gap-2">
          <Pin width={16} height={16} /> {event.venue} · {event.format}
        </li>
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        {event.ceu ? (
          <span className="text-[12.5px] font-semibold text-violet">CEU eligible</span>
        ) : (
          <span />
        )}
        <a
          href={`mailto:${site.email}?subject=${subject}`}
          className="inline-flex items-center gap-1 text-[14.5px] font-semibold text-navy"
        >
          <span className="link-gradient">Register interest</span>
          <ArrowUpRight width={15} height={15} />
        </a>
      </div>
    </article>
  );
}

export function EventsBrowser() {
  const [filter, setFilter] = useState<EventType | "All">("All");
  const list = filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by type">
        {(["All", ...eventTypes] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
            className={cx(
              "h-10 rounded-full px-4 text-[14px] font-semibold transition",
              filter === t
                ? "bg-navy text-white"
                : "bg-white text-navy shadow-[inset_0_0_0_1.5px_var(--color-hair)] hover:shadow-[inset_0_0_0_1.5px_var(--color-line)]",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="mt-6 text-[14px] text-muted" aria-live="polite">
        Showing {list.length} {list.length === 1 ? "event" : "events"}
      </p>

      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>
    </div>
  );
}
