// Site content. Facts about AACE International (founding year, member counts,
// certifications, publications) are taken from web.aacei.org. Section-specific
// copy is written for the Malaysia Section and is meant to be edited.

export const stats = [
  { value: "1956", label: "AACE International founded" },
  { value: "9,500+", label: "members worldwide" },
  { value: "100+", label: "countries represented" },
  { value: "120+", label: "Recommended Practices" },
  { value: "6,500", label: "Virtual Library resources" },
  { value: "9", label: "professional certifications" },
];

export const heroChecklist = [
  "Monthly technical talks",
  "CCP, PSP and EVP exam prep",
  "Recommended Practices",
  "Mentoring for young professionals",
  "Industry networking",
  "Continuing education credits",
];

export const disciplines = [
  "Asset management",
  "Change management",
  "Claims and dispute resolution",
  "Contract management",
  "Cost engineering and commercial management",
  "Decision and risk management",
  "Estimating",
  "Performance management and control",
  "Planning and scheduling",
  "Portfolio, programme and project management",
  "Project controls",
  "Total cost management",
  "Value improving practices",
];

export const industries = [
  { name: "Oil & gas", detail: "Upstream, LNG and offshore facilities" },
  { name: "Petrochemical & process", detail: "Refining, chemicals and integrated complexes" },
  { name: "Construction", detail: "Building and civil infrastructure" },
  { name: "Transportation", detail: "Rail, highways, ports, airports and urban transit" },
  { name: "Power & utilities", detail: "Generation, grid, water and renewable energy" },
  { name: "Data centres", detail: "Hyperscale and digital infrastructure" },
  { name: "Manufacturing", detail: "Semiconductor, electronics and industrial plants" },
  { name: "Mining & minerals", detail: "Extraction and downstream processing" },
  { name: "Government & public works", detail: "Federal and state development projects" },
  { name: "Real estate", detail: "Property development and township projects" },
  { name: "Aerospace & defence", detail: "Programmes, MRO and procurement" },
  { name: "Pharmaceutical & biotech", detail: "Facilities and capital programmes" },
];

export type CertLevel = {
  level: string;
  step: string;
  summary: string;
  certs: { code: string; name: string; blurb: string; href: string }[];
};

const certBase =
  "https://web.aacei.org/certification/certification-information/certifications-offered";

export const certLevels: CertLevel[] = [
  {
    level: "Technician",
    step: "Level 1",
    summary:
      "Kickstart your career. Designed for entry-level professionals or those transitioning into the field.",
    certs: [
      {
        code: "CCT",
        name: "Certified Cost Technician",
        blurb: "Core skills in estimating, cost control and basic engineering economics.",
        href: `${certBase}/technician-certifications/cct-details`,
      },
      {
        code: "CST",
        name: "Certified Scheduling Technician",
        blurb: "Building, maintaining and reporting on project schedules.",
        href: `${certBase}/technician-certifications/cst-details`,
      },
    ],
  },
  {
    level: "Professional",
    step: "Level 2",
    summary:
      "Take your career to the next level. Ideal for mid-career professionals seeking to demonstrate mastery.",
    certs: [
      {
        code: "CCP",
        name: "Certified Cost Professional",
        blurb: "AACE's flagship credential across the full total cost management cycle.",
        href: `${certBase}/professional-certifications/ccp-details`,
      },
      {
        code: "CEP",
        name: "Certified Estimating Professional",
        blurb: "Estimate preparation, classification and review at a professional level.",
        href: `${certBase}/professional-certifications/cep-details`,
      },
      {
        code: "EVP",
        name: "Earned Value Professional",
        blurb: "Planning, measuring and forecasting performance with earned value.",
        href: `${certBase}/professional-certifications/evp-details`,
      },
      {
        code: "PRMP",
        name: "Project Risk Management Professional",
        blurb: "Identifying, quantifying and responding to project risk.",
        href: `${certBase}/professional-certifications/prmp-details`,
      },
      {
        code: "PSP",
        name: "Planning & Scheduling Professional",
        blurb: "Advanced planning, scheduling and schedule analysis.",
        href: `${certBase}/professional-certifications/psp-details`,
      },
    ],
  },
  {
    level: "Expertise",
    step: "Level 3",
    summary:
      "The ultimate validation. For seasoned professionals with years of experience and a proven track record.",
    certs: [
      {
        code: "CFCC",
        name: "Certified Forensic Claims Consultant",
        blurb: "Forensic analysis of claims, delay and disputes.",
        href: `${certBase}/expertise-certifications/cfcc-details`,
      },
      {
        code: "DRMP",
        name: "Decision & Risk Management Professional",
        blurb: "Decision analysis and enterprise-level risk management.",
        href: `${certBase}/expertise-certifications/drmp-details`,
      },
    ],
  },
];

export const memberBenefits = [
  {
    title: "Recommended Practices",
    body: "Access to technical resources, tools and more than 120 AACE Recommended Practices.",
  },
  {
    title: "Virtual Library",
    body: "A collection of 6,500 technical papers, articles and presentations.",
  },
  {
    title: "Career growth programmes",
    body: "The salary survey, mentor programme and job board, free to members.",
  },
  {
    title: "Certification savings",
    body: "Discounts on certification exams and preparation materials.",
  },
  {
    title: "Local and global networking",
    body: "Malaysia Section activities plus a network of members in 100+ countries.",
  },
  {
    title: "Webinars and workshops",
    body: "Invitations to member-only webinars, workshops and thought-leadership events.",
  },
  {
    title: "Core publications",
    body: "The TCM Framework, Skills & Knowledge of Cost Engineering and the Cost Engineering journal.",
  },
  {
    title: "Conferences",
    body: "AACE events and conferences throughout the year, where the profession meets.",
  },
];

export const featuredPractices = [
  { code: "10S-90", title: "Cost Engineering Terminology" },
  { code: "17R-97", title: "Cost Estimate Classification System" },
  {
    code: "18R-97",
    title: "Cost Estimate Classification System – As Applied in EPC for the Process Industries",
  },
  {
    code: "56R-08",
    title: "Cost Estimate Classification System – As Applied for Building and General Construction",
  },
  { code: "29R-03", title: "Forensic Schedule Analysis" },
  {
    code: "57R-09",
    title: "Integrated Cost and Schedule Risk Analysis Using Monte Carlo Simulation of a CPM Model",
  },
];

export const committeeRoles = [
  { role: "Chair", focus: "Leads the Section and represents Malaysia within AACE Region 8." },
  { role: "Vice-Chair", focus: "Supports the Chair and drives the annual programme." },
  { role: "Honorary Secretary", focus: "Meetings, records, communications and the AGM." },
  { role: "Honorary Treasurer", focus: "Section accounts, budgets and sponsorship." },
  { role: "Technical Programmes", focus: "Technical talks, site visits and the annual conference." },
  { role: "Certification & Education", focus: "Study groups, prep workshops and CEU tracking." },
  { role: "Membership", focus: "Recruitment, onboarding and member engagement." },
  { role: "Young Professionals & Students", focus: "University outreach and the mentoring circle." },
];

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What is cost engineering?",
    a: "Cost engineering is the application of scientific principles and techniques to problems of estimation, cost control, business planning and management science, profitability analysis, project management, and planning and scheduling. Together with the Total Cost Management Framework, it forms the AACE International body of knowledge.",
  },
  {
    q: "What does AACE stand for?",
    a: "AACE stands for the Association for the Advancement of Cost Engineering. Founded in 1956, AACE International and its Certification Institute serve more than 10,000 members and certificants in over 100 countries.",
  },
  {
    q: "How do I join the Malaysia Section?",
    a: "Join AACE International as an individual member, then select the Malaysia Section in your member profile. Section participation is included in your AACE membership dues, so there is no separate section fee.",
  },
  {
    q: "Are AACE certifications recognised outside the United States?",
    a: "Yes. AACE certifications are recognised worldwide and are held by professionals in more than 100 countries. Employers in construction, energy, government and infrastructure value them as a mark of technical competence.",
  },
  {
    q: "Can I sit AACE exams in Malaysia?",
    a: "Yes. AACE exams are delivered by Kryterion, either at a Kryterion testing centre or through online proctoring from your home or office, as long as you meet the technical requirements.",
  },
  {
    q: "Do I need to be a member to attend Section events?",
    a: "Most technical talks are open to non-members, so you can see what the Section is about before you join. Members receive priority registration and member rates for paid workshops and the annual conference.",
  },
];

export const membershipFaqs: Faq[] = [
  {
    q: "Which membership category should I choose?",
    a: "Most working professionals join as Regular members. Full-time students can join at the Student rate. Companies that want to support several employees should look at Organisational membership.",
  },
  {
    q: "How do I select Malaysia as my Section?",
    a: "Sign in to your AACE profile, open your membership details and choose Malaysia Section. AACE's step-by-step guide is linked on this page.",
  },
  {
    q: "Is there a separate fee for the Malaysia Section?",
    a: "No. Participation in AACE local sections is included in your AACE International membership dues.",
  },
  {
    q: "When do I renew?",
    a: "Membership runs on the calendar year. Renew with AACE International by 31 December to keep uninterrupted access to member benefits.",
  },
];

export const certificationFaqs: Faq[] = [
  {
    q: "Which certification should I start with?",
    a: "If you are new to the field, start with CCT or CST. Mid-career professionals usually aim for CCP, or for a specialist credential such as PSP, CEP, EVP or PRMP. CFCC and DRMP are for seasoned experts.",
  },
  {
    q: "Does the Section run study groups?",
    a: "Yes. The Section runs study groups and prep workshops for the most popular exams. Check the Events page for the next intake, or contact the Certification & Education director.",
  },
  {
    q: "How do I keep my certification current?",
    a: "Certificants recertify by earning continuing education credits. Section technical talks, workshops and conferences can count towards them.",
  },
  {
    q: "Who accredits AACE certifications?",
    a: "AACE International is accredited by the Council of Engineering and Scientific Specialty Boards (CESB).",
  },
];
