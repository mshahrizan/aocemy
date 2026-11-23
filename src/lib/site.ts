// Central site configuration. Replace the placeholder contact details and
// social links with the Section's real ones before going live.

export const site = {
  name: "AACE Malaysia Section",
  shortName: "AACE Malaysia",
  tagline: "Cost engineering and project controls, advanced in Malaysia.",
  description:
    "The Malaysia Section of AACE International connects cost engineers, estimators, planners, schedulers and project controls professionals across Malaysia with AACE's global body of knowledge, certifications and network.",
  region: "Region 8 · Asia, Australia & Pacific Rim",
  city: "Kuala Lumpur, Malaysia",
  // TODO: replace with the Section's real mailbox.
  email: "info@aocemy.org",
  social: {
    linkedin: "https://www.linkedin.com/company/aace-international/",
    facebook: "https://www.facebook.com/aace.international",
    instagram: "https://www.instagram.com/aace.international/",
  },
  aace: {
    home: "https://web.aacei.org/",
    join: "https://web.aacei.org/membership/join/individual-membership",
    portal: "https://portal.aacei.org",
    selectSection: "https://web.aacei.org/sections/select-or-change-your-section",
    certification: "https://web.aacei.org/certification",
    communities: "https://communities.aacei.org/home",
    resources: "https://web.aacei.org/resources",
    contact: "https://web.aacei.org/about/about-aace/contact-us",
    phone: "+1.304.296.8444",
    testCenters: "https://www.kryteriononline.com/locate-test-center",
    recertification: "https://web.aacei.org/certification/recertification",
    shop: "https://www.pathlms.com/aace",
  },
} as const;

export type NavItem = { label: string; href: string; description?: string };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Certification", href: "/certification" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
