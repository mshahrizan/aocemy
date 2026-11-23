// SAMPLE EVENT LISTINGS. These entries show how the events pages render.
// Replace them with the Section's confirmed programme before publishing.

export type EventType = "Technical talk" | "Workshop" | "Webinar" | "Study group" | "Conference" | "Networking";

export type SectionEvent = {
  slug: string;
  title: string;
  type: EventType;
  date: string; // ISO date
  time: string;
  venue: string;
  format: "In person" | "Online" | "Hybrid";
  summary: string;
  ceu?: boolean;
};

export const events: SectionEvent[] = [
  {
    slug: "estimate-classification-epcc",
    title: "Applying estimate classification (18R-97) on EPCC projects",
    type: "Technical talk",
    date: "2026-12-03",
    time: "6:30 pm – 8:30 pm",
    venue: "Kuala Lumpur",
    format: "Hybrid",
    summary:
      "How owners and contractors use AACE's classification system to set expectations on accuracy, contingency and funding gates.",
    ceu: true,
  },
  {
    slug: "year-end-networking-2026",
    title: "Year-end members' networking evening",
    type: "Networking",
    date: "2026-12-12",
    time: "7:00 pm – 10:00 pm",
    venue: "Kuala Lumpur",
    format: "In person",
    summary: "Close out the year with members, certificants and friends of the Section.",
  },
  {
    slug: "ccp-prep-workshop-2027",
    title: "CCP certification prep workshop",
    type: "Workshop",
    date: "2027-01-16",
    time: "9:00 am – 5:00 pm",
    venue: "Petaling Jaya",
    format: "In person",
    summary:
      "A four-Saturday programme covering the CCP exam blueprint, worked problems and a timed technical paper clinic.",
    ceu: true,
  },
  {
    slug: "forensic-schedule-analysis-webinar",
    title: "Forensic schedule analysis under Malaysian standard forms",
    type: "Webinar",
    date: "2027-02-05",
    time: "12:30 pm – 1:30 pm",
    venue: "Online",
    format: "Online",
    summary:
      "Choosing a delay analysis method from 29R-03 and presenting it under local contract conditions.",
    ceu: true,
  },
  {
    slug: "psp-study-group-2027",
    title: "PSP study group – March intake",
    type: "Study group",
    date: "2027-03-11",
    time: "8:00 pm – 9:30 pm, weekly",
    venue: "Online",
    format: "Online",
    summary: "Ten weekly sessions working through planning, scheduling and schedule analysis topics.",
  },
  {
    slug: "malaysia-conference-2027",
    title: "AACE Malaysia Cost Engineering Conference 2027",
    type: "Conference",
    date: "2027-05-20",
    time: "Full day",
    venue: "Kuala Lumpur",
    format: "In person",
    summary:
      "Keynotes, case studies and panels on project controls across energy, infrastructure and data centres.",
    ceu: true,
  },
];

export const eventTypes: EventType[] = [
  "Technical talk",
  "Workshop",
  "Webinar",
  "Study group",
  "Conference",
  "Networking",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Formatted by hand (not toLocaleDateString) so server and browser output match.
export function formatEventDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return {
    day: String(d).padStart(2, "0"),
    month: MONTHS[m - 1],
    year: y,
    weekday: WEEKDAYS[date.getUTCDay()],
  };
}
