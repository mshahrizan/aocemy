"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Check } from "./icons";

const topics = ["Membership", "Events & registration", "Certification & study groups", "Speaking or sponsorship", "Volunteering", "Something else"];

const field =
  "mt-2 w-full rounded-[10px] border border-hair bg-white px-4 py-3 text-[15.5px] text-navy outline-none transition placeholder:text-muted/70 focus:border-violet focus:ring-4 focus:ring-[#8d65fd26]";

// No backend: the form composes an email in the visitor's mail app.
// Swap handleSubmit for a server action or form service when one is available.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation: ${data.get("organisation") || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[20px] bg-white p-8 text-navy" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-solid text-white">
          <Check width={22} height={22} strokeWidth={3} />
        </span>
        <h2 className="mt-6 font-display text-[28px] font-semibold tracking-[-0.018em]">Your email is ready to send.</h2>
        <p className="mt-3 text-[15.5px] leading-relaxed text-ink">
          We&apos;ve opened your email app with your message filled in. If nothing opened, write to us directly at{" "}
          <a href={`mailto:${site.email}`} className="link-gradient font-semibold text-navy">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[15px] font-semibold text-muted hover:text-navy"
        >
          ← Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] bg-white p-6 sm:p-8">
      <h2 className="font-display text-[28px] font-semibold tracking-[-0.018em] text-navy">Send the committee a message</h2>
      <p className="mt-2 text-[15px] text-ink">We usually reply within three working days.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block text-[14px] font-semibold text-navy">
          Full name
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block text-[14px] font-semibold text-navy">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="block text-[14px] font-semibold text-navy">
          Organisation <span className="font-normal text-muted">(optional)</span>
          <input name="organisation" autoComplete="organization" className={field} placeholder="Company or university" />
        </label>
        <label className="block text-[14px] font-semibold text-navy">
          Topic
          <select name="topic" required className={field} defaultValue="">
            <option value="" disabled>
              Choose a topic
            </option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-[14px] font-semibold text-navy sm:col-span-2">
          Message
          <textarea name="message" required rows={5} className={field} placeholder="How can we help?" />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-6 text-[15px] font-semibold text-white transition hover:bg-navy-2 sm:w-auto"
      >
        Send message →
      </button>
    </form>
  );
}
