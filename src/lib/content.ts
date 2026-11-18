export const contact = {
  name: "Olatunbosun Adura Kehinde",
  shortName: "Bosun Kehinde",
  email: "bossykenny@gmail.com",
  linkedin: "https://www.linkedin.com/in/bosun-kehinde-a2b14519/",
  location: "Lagos, Nigeria",
};

export const impact = [
  { value: "$1M", label: "Budget managed", note: "Country Manager · RedPages" },
  { value: "14", label: "Concurrent projects", note: "Service Delivery · RedPages" },
  { value: "99.8%", label: "Service uptime", note: "Service Delivery · RedPages" },
  { value: "20%", label: "Delivery rate improvement", note: "Hybrid framework · Soft Alliance" },
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  industry: string;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: { metric: string; label: string; detail?: string }[];
  tags: string[];
  theme: "sage" | "copper" | "navy" | "clay" | "olive" | "blue";
  featured?: boolean;
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    slug: "revenue-assurance",
    number: "01",
    title: "Revenue assurance at national scale.",
    eyebrow: "Public sector / Financial systems",
    industry: "Financial technology",
    year: "2019–2021",
    role: "Senior project management & Scrum leadership",
    summary: "Supporting a national revenue assurance programme with coordinated Scrum teams, operational leadership and a purpose-built collection solution.",
    challenge: "Complex collection operations needed an effective digital backbone, coordinated teams and reliable oversight to improve revenue outcomes.",
    approach: [
      "Supported delivery by three Scrum teams building the revenue assurance solution.",
      "Led a field operation of 250 revenue assurance collectors using the solution.",
      "Applied iterative delivery and cross-functional coordination across technology and operations."
    ],
    outcomes: [
      { metric: "$1M+", label: "Revenue generated", detail: "Reported in the supplied CV" },
      { metric: "48%", label: "Revenue increase", detail: "Reported in the supplied CV" },
      { metric: "250", label: "Collectors coordinated", detail: "Operational team size" }
    ],
    tags: ["Revenue assurance", "Scrum", "Government", "Delivery"],
    theme: "sage",
    featured: true,
    disclaimer: "Project and achievement details are based on Bosun's supplied CV; figures should be approved for public use."
  },
  {
    slug: "ecowaka-ev",
    number: "02",
    title: "An ecosystem built to keep mobility moving.",
    eyebrow: "Mobility / Digital products",
    industry: "Electric mobility",
    year: "2024–2025",
    role: "Program Consultant · Ecowaka EV / EezeeData",
    summary: "Three connected digital products designed to support electric-vehicle operations, rider experiences and partner workflows.",
    challenge: "A growing electric-mobility operation needed coordinated back-office tools, rider services and a dependable partner interface.",
    approach: [
      "Worked on an Operations Management System supporting CRM, device, sales and back-office management.",
      "Coordinated a rider-facing mobile experience for tracking, payments and device management.",
      "Supported a partner network application and cross-functional delivery using Jira."
    ],
    outcomes: [
      { metric: "03", label: "Connected solutions", detail: "OMS, rider and partner experiences" },
      { metric: "25%", label: "Productivity increase", detail: "Reported programme impact" }
    ],
    tags: ["Product delivery", "Mobility", "Web & mobile", "Jira"],
    theme: "copper",
    featured: true
  },
  {
    slug: "nipex-integration",
    number: "03",
    title: "Connecting complex enterprise systems.",
    eyebrow: "Enterprise / Systems integration",
    industry: "Oil & gas",
    year: "2021",
    role: "Project Manager · NIPEX SOA project",
    summary: "Coordinating Oracle Service-Oriented Architecture integration for an oil and gas e-procurement platform.",
    challenge: "Interdependent enterprise systems required a coordinated integration approach and reliable flow of procurement data.",
    approach: [
      "Coordinated enterprise integration work using Oracle Service-Oriented Architecture.",
      "Supported interoperability between SAP e-Marketplace and related systems.",
      "Aligned technical delivery with the operational needs of an e-procurement environment."
    ],
    outcomes: [{ metric: "SOA", label: "Enterprise integration", detail: "Oracle and SAP-related systems" }],
    tags: ["Oracle", "SOA", "SAP", "Enterprise"],
    theme: "navy",
    featured: true
  },
  {
    slug: "compliance-transformation",
    number: "04",
    title: "Building resilience into operations.",
    eyebrow: "Governance / Transformation",
    industry: "Enterprise compliance",
    year: "2023",
    role: "Program Manager · Soft Alliance",
    summary: "A coordinated compliance programme spanning information security, business continuity, cloud security and cybersecurity.",
    challenge: "Organisational resilience required aligned governance practices and a more mature approach to compliance across critical disciplines.",
    approach: [
      "Led programme coordination across ISMS, BCMS, cloud security and cybersecurity.",
      "Aligned workstreams and delivery processes with organisation-wide governance objectives.",
      "Applied structured programme management to compliance activities."
    ],
    outcomes: [{ metric: "4", label: "Programme workstreams", detail: "ISMS, BCMS, cloud and cybersecurity" }],
    tags: ["Risk", "Compliance", "ISMS", "BCMS"],
    theme: "olive",
    disclaimer: "The CV also mentions a level 2 to level 5 improvement; formal accreditation status has not been independently verified."
  },
  {
    slug: "public-sector-payments",
    number: "05",
    title: "Modernising payments and people systems.",
    eyebrow: "Government / Payments",
    industry: "Public infrastructure",
    year: "2006–2011",
    role: "Implementation Lead · SystemSpecs",
    summary: "Contributing to the implementation and integration of payment, HR and payroll technology for public institutions and financial partners.",
    challenge: "Government and enterprise workflows needed more consistent payment processing and better integration with human capital systems.",
    approach: [
      "Collaborated with banks and switching houses on HumanManager and Remita-related implementations.",
      "Supported integrations between payment solutions and HR software.",
      "Contributed to government e-payment and HR computerisation initiatives."
    ],
    outcomes: [{ metric: "Real-time", label: "Payment processing", detail: "Improvement reported for an HR/payment integration" }],
    tags: ["Payments", "HR technology", "Implementation", "Public sector"],
    theme: "clay"
  },
  {
    slug: "enterprise-hcm",
    number: "06",
    title: "Making enterprise software work in practice.",
    eyebrow: "Enterprise / Human capital",
    industry: "Enterprise technology",
    year: "2011–2016",
    role: "Lead Implementer & Project Manager",
    summary: "Supporting Oracle E-Business Suite R12, human capital solutions and the integrations that make enterprise operations more effective.",
    challenge: "Large organisations needed implementation discipline, integrated systems and effective migration from fragmented workflows.",
    approach: [
      "Led implementers delivering Oracle E-Business Suite R12 and integrating payment solutions.",
      "Coordinated home-grown HR solutions and third-party application integrations.",
      "Improved requirements gathering, project tracking and implementation planning."
    ],
    outcomes: [{ metric: "50%", label: "Faster processing", detail: "Reported HR integration improvement" }],
    tags: ["Oracle EBS", "HCM", "Integration", "Enterprise"],
    theme: "blue"
  }
];

export const experience = [
  { period: "2026 — Present", title: "Advisory Board Member", org: "MyDreamConnect Academy for Change & Development Foundation", summary: "Strategic advice on partnerships, donor engagement, resource mobilisation and organisational sustainability." },
  { period: "2024 — 2025", title: "Country Manager", org: "RedPages Solutions Engineering", summary: "Business operations and service delivery across South Africa and Nigeria, including budget and stakeholder management." },
  { period: "2024 — 2025", title: "Program Consultant", org: "Ecowaka EV by EezeeData", summary: "Connected digital-product delivery for electric mobility operations, riders and partners." },
  { period: "2023 — 2024", title: "Service Delivery Manager", org: "RedPages Solutions Engineering", summary: "Led project management teams and coordinated multiple client programmes with service reliability improvements." },
  { period: "2021 — 2023", title: "Program Manager", org: "Soft Alliance & Resources", summary: "Agile transformation, enterprise compliance and hybrid programme delivery." },
  { period: "2020 — 2021", title: "Senior Scrum Master", org: "Soft Alliance & Resources", summary: "Scrum adoption, retrospective tooling and complex revenue assurance delivery." },
  { period: "2016 — 2020", title: "Project Manager", org: "Soft Alliance & Resources", summary: "Software delivery, enterprise integration, infrastructure modernisation and public-sector platforms." },
  { period: "2011 — 2015", title: "Lead Implementer", org: "Soft Alliance & Resources", summary: "Oracle E-Business Suite and enterprise HR/payments implementation programmes." },
  { period: "2006 — 2011", title: "Implementation Lead", org: "SystemSpecs", summary: "Payment and human capital technology with banking and public-sector partners." }
];

export const expertise = [
  { number: "01", name: "Programme leadership", description: "Connecting business priorities to achievable plans, accountable teams and measurable results." },
  { number: "02", name: "Agile & hybrid delivery", description: "Finding the right blend of Scrum, iterative delivery and structured governance for each initiative." },
  { number: "03", name: "Enterprise transformation", description: "Bringing clarity to systems implementation, integration, financial technology and digital change." },
  { number: "04", name: "People & partnerships", description: "Building trust across stakeholders, enabling teams and strengthening organisational outcomes." }
];

export const speaking = [
  {
    year: "2024", category: "Conference keynote session",
    title: "Agile Education: Transforming Learning in Developing Countries",
    host: "Agile Nigeria Conference",
    description: "A discussion about applying Agile approaches to learning and education in developing contexts.",
    url: "https://apaon.org/agilenigeriaconference2024/agenda/",
    number: "01"
  },
  {
    year: "2024", category: "Community webinar",
    title: "Tech Upskill Webinar",
    host: "The Elevation Church, Ibeju-Lekki",
    description: "An upskilling session discussing digital work, virtual assistance and generative AI for business.",
    url: "https://www.linkedin.com/in/bosun-kehinde-a2b14519/",
    number: "02"
  },
  {
    year: "2023", category: "Agile community series",
    title: "My Agile Experience",
    host: "Agile Nigeria Meet-Up Series",
    description: "Sharing practical experiences of applying Agile and supporting teams through delivery.",
    url: "https://www.linkedin.com/in/bosun-kehinde-a2b14519/",
    number: "03"
  },
  {
    year: "2023", category: "Agile community series",
    title: "Scrum: Getting It Done",
    host: "Agile Nigeria Meet-Up Series",
    description: "Exploring hands-on Scrum practices, teamwork and delivery discipline.",
    url: "https://www.linkedin.com/in/bosun-kehinde-a2b14519/",
    number: "04"
  }
];

export const testimonialEvidence = [
  {
    name: "Sarah El-Hagagi",
    role: "Agile Coach",
    excerpt: "Thank you, Bosun Kehinde for guiding us through the enlightening session...",
    context: "Public response to Agile Education session",
    url: "https://www.linkedin.com/posts/sarah-el-hagagi_agilenigeriaconference-agility-volunteer-activity-7171495979991326722-Ah83"
  },
  {
    name: "Amira Bebars",
    role: "QA & Testing Automation Manager",
    excerpt: "Thanks Bosun Kehinde for your useful talk...",
    context: "Public response to an Agile learning session",
    url: "https://www.linkedin.com/posts/activity-7171495914144948224-0xfA"
  }
];
