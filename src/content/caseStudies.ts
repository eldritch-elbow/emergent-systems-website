interface CaseStudyBase {
  slug: string;
  code: string;
  cardTitle: string;
  client: string;
  cardBody: string;
  eyebrow: string;
  title: string;
  lead: string;
  servicesDrawn: string[];
  /** Filename under public/uploads/case-studies/ */
  image: string;
}

export interface StandardCaseStudy extends CaseStudyBase {
  confidential: false;
  meta: Array<{ label: string; value: string }>;
  /** Filename under public/uploads/case-studies/, shown as the detail-page hero banner */
  heroImage: string;
  heroImageLabel: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  note?: string;
  atGlance: string;
  disciplinesBridged: string;
}

export interface ConfidentialCaseStudy extends CaseStudyBase {
  confidential: true;
  whatCanBeShared: string;
}

export type CaseStudy = StandardCaseStudy | ConfidentialCaseStudy;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clm',
    code: 'CLM',
    cardTitle: 'SaMD & clinical trials',
    client: 'Closed Loop Medicine',
    cardBody:
      'Built CLM’s software engineering function from scratch, delivering its first certified digital treatment from inception through clinical trial.',
    image: 'closed-loop-medicine.png',
    confidential: false,
    eyebrow: 'Case study · SaMD & clinical trials',
    title: 'Building a certified medical device software function, from zero to clinical trial',
    lead: 'As VP of Technology, built Closed Loop Medicine’s core software engineering capability from scratch — recruiting and managing the technical team, establishing delivery rituals and procedures fit for medical device development, and defining the technology strategy and product architecture behind the company’s first certified SaMD.',
    meta: [
      { label: 'Client', value: 'Closed Loop Medicine' },
      { label: 'Role', value: 'VP of Technology' },
      { label: 'Stage', value: '2018–2023 (4+ years)' },
      { label: 'Focus', value: 'Team building · Architecture · Compliance' },
    ],
    heroImage: 'clm-hero.jpg',
    heroImageLabel: 'A smartphone medication app alongside a connected pill dispenser',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'CLM needed a software engineering function built from the ground up — one capable of designing and delivering certified medical device software (SaMD) for Insomnia and Hypertension dose management, to IEC 62304 and ISO 13485, while running live clinical trials.',
        ],
      },
      {
        heading: 'The approach',
        paragraphs: [
          'Recruited and managed the technical team, and established the delivery rituals, policies, and procedures required for medical device development — then defined the technology strategy and product architecture underpinning CLM’s regulated software products.',
        ],
        bullets: [
          'Established, managed, and oversaw the software engineering function, including procedures for developing software to meet regulatory requirements for medical devices (IEC 62304, ISO 13485).',
          'Led creation of an innovative technology platform for drug dose optimisation, resulting in the submission of several technology patents.',
          'Successfully managed the operation of three clinical studies, including one of the few UK studies to continue through the COVID-19 pandemic.',
        ],
      },
      {
        heading: 'The outcome',
        paragraphs: [
          'Drove successful delivery of CLM’s first digital treatment for Insomnia dose management, from inception through to clinical trial deployment — meeting applicable Medical Device standards (ISO 13485, IEC 62304) throughout.',
        ],
      },
    ],
    atGlance: 'CLM’s software engineering function and its first certified digital treatment for dose management, built from the ground up.',
    servicesDrawn: ['SaMD & Regulated Software Advisory', 'Fractional CTO — Digital Health'],
    disciplinesBridged: 'Engineering leadership · Architecture · Compliance',
  },
  {
    slug: 'ofh',
    code: 'OFH',
    cardTitle: 'Regulatory strategy & platform delivery',
    client: 'Our Future Health',
    cardBody:
      'Regulatory strategy, architecture, and hands-on delivery behind Health Insights — OFH’s first participant health-feedback platform, live to over 1.5 million participants.',
    image: 'our-future-health.jpg',
    confidential: false,
    eyebrow: 'Case study · Regulatory strategy & platform delivery',
    title: 'Executive-ready decisions and a live participant platform, at population scale',
    lead: 'Our Future Health is the UK’s largest-ever health research programme, working to recruit and genetically characterise millions of UK adults. As it moved toward returning genomic insights to participants, Emergent Systems supported three connected pieces of work — regulated-software advisory, structured strategy work, and hands-on principal-engineer delivery.',
    meta: [
      { label: 'Client', value: 'Our Future Health' },
      { label: 'Role', value: 'Software Architect (Digital Health) / MedTech Consultant' },
      { label: 'Stage', value: '2024–2026 (2 years)' },
      { label: 'Focus', value: 'Regulatory strategy · Architecture · Delivery' },
    ],
    heroImage: 'ofh-hero.jpg',
    heroImageLabel: 'A rendered visualisation of a DNA double helix',
    sections: [
      {
        heading: 'The context',
        paragraphs: [
          'As the programme moved toward returning genomic insights to participants, it encountered unresolved questions at the intersection of regulation, software, and clinical responsibility — where the right path wasn’t owned by any one team.',
        ],
      },
      {
        heading: 'Phase 1 — Regulatory strategy enablement',
        paragraphs: [
          'Led a cross-functional discovery into whether OFH should return Type-2 diabetes polygenic risk scores within a grace window ahead of EU Medical Device Regulations coming fully into effect. Working with Regulatory Affairs, Product, and engineering leads, the discovery mapped regulatory routes, SaMD boundaries, architecture options, and confirmatory testing pathways — structured around a conceptual framework developed to shape the options space.',
          'The resulting presentation informed the executive decision to focus on near-term delivery of non-clinical health feedback, avoiding premature regulatory and clinical exposure.',
        ],
      },
      {
        heading: 'Phase 2 — Engineering leadership: the Health Insights platform',
        paragraphs: [
          'Acted as principal engineer and architect for Health Insights, a new OFH capability to deliver health reports to participants, launched to the first participant cohort and now serving over 1.5 million study participants.',
        ],
        bullets: [
          'Led end-to-end delivery across service architecture (Python / FastAPI, Next.js, PostgreSQL, Keycloak-based OIDC).',
          'Designed a SaMD-aligned delivery pattern enabling third-party distribution without PII exfiltration, deployed on OFH’s internal cloud platform.',
          'Delivered the programme’s first production multi-factor authentication flow.',
          'Oversaw the first-cohort launch, including operational runbooks and QC, and engaged closely with the security team to ensure ISO 27001 compliance.',
          'Delivered lightweight “epic” templates adopted by the team for cross-cutting oversight by security, clinical, and product.',
        ],
      },
      {
        heading: 'Phase 3 — Regulatory discovery: the minimum-viable path for genetic risk scores',
        paragraphs: [
          'Following launch of non-clinical Health Insights, led the discovery, analysis, and writing of a strategic report on the regulatory path for returning medically-actionable reports to participants.',
          'The approach defined candidate use cases (e.g. direct-to-participant, recontact, and others), then took a single use case through user-journey mapping, hypothetical architecture, applicable regulations, and responsibility mapping — surfacing regulatory impacts, laboratory compliance requirements (ISO 15189), and potential SaMD / IVD components. The report opened with structured context for executive and board readers, before presenting prioritised conclusions and recommendations across regulatory, implementation, organisational impact, cost, and risk.',
        ],
      },
      {
        heading: 'Outcomes',
        paragraphs: [],
        bullets: [
          'Conceptual framework adopted to shape the executive decision on the T2D regulatory path.',
          'Health Insights launched to the first participant cohort, including OFH’s first production MFA flow.',
          'ISO 27001-aligned delivery evidence and process improvements.',
          'Regulatory discovery report reshaped strategy on medically-actionable participant feedback and informed subsequent executive and board discussion.',
        ],
      },
    ],
    atGlance: 'Regulatory strategy, architecture, and hands-on delivery behind Health Insights — OFH’s first participant-facing health feedback platform.',
    servicesDrawn: ['SaMD & Regulated Software Advisory', 'Fractional CTO — Digital Health'],
    disciplinesBridged: 'Regulatory strategy · Software architecture · Delivery',
  },
  {
    slug: 'dd',
    code: 'DD',
    cardTitle: 'Technical due diligence',
    client: 'Platform acquisition',
    cardBody: 'Technical, team and architecture evaluation supporting a platform acquisition decision.',
    image: 'confidential-placeholder.svg',
    confidential: true,
    eyebrow: 'Case study · Technical due diligence',
    title: 'Technical due diligence on a platform acquisition',
    lead: 'In brief: a technical, team and architecture evaluation supporting an acquisition decision. The specifics of this engagement are held under confidentiality.',
    whatCanBeShared: 'Engagement type, methods, and the shape of the outcome — without naming the parties.',
    servicesDrawn: ['Technical Due Diligence'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length];
}
