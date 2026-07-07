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
}

export interface StandardCaseStudy extends CaseStudyBase {
  confidential: false;
  meta: Array<{ label: string; value: string }>;
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
      'Delivered clinical-grade software and clinical-trial systems, with successful Innovate UK grants to the company’s name.',
    confidential: false,
    eyebrow: 'Case study · SaMD & clinical trials',
    title: 'Clinical-grade software, delivered under trial conditions',
    lead: 'Bringing software architecture, quality system, and regulatory pathway into a single technical picture — so a digital therapeutic could progress through clinical trials without the strands pulling apart.',
    meta: [
      { label: 'Client', value: 'Closed Loop Medicine' },
      { label: 'Role', value: 'Technical lead / advisor' },
      { label: 'Stage', value: 'Clinical trials · SaMD' },
      { label: 'Focus', value: 'Architecture · Quality · Evidence' },
    ],
    heroImageLabel: 'case-study hero image / product shot',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'A clinical-grade product had to satisfy trial protocol, regulatory expectations, and a real delivery timeline at once — while the science, software, and regulatory strands were being planned and managed largely in isolation.',
          'Left unmanaged, that separation is exactly where the chain from scientific idea to deployable, regulated product tends to break.',
        ],
      },
      {
        heading: 'The approach',
        paragraphs: ['The strands were worked as one technical picture rather than four separate workstreams:'],
        bullets: [
          'Software architecture and quality system designed together, aligned to the intended regulatory pathway from the start.',
          'Engineering practices set up to generate the evidence that trials and auditors expect — not retrofitted later.',
          'Scope sequenced so the highest-risk technical bets were proven first, de-risking the delivery timeline.',
        ],
      },
      {
        heading: 'The outcome',
        paragraphs: [
          'Software and trial systems delivered to clinical standard, supporting the product’s progress through clinical trials — and contributing to successful Innovate UK grant applications to the company’s name.',
        ],
      },
    ],
    note: 'Illustrative detail — specific figures and artefacts shared directly on request.',
    atGlance: 'A regulated digital therapeutic, delivered under live clinical-trial conditions.',
    servicesDrawn: ['SaMD & Regulated Software', 'Fractional CTO'],
    disciplinesBridged: 'Science · Software · Regulatory',
  },
  {
    slug: 'ofh',
    code: 'OFH',
    cardTitle: 'Platform architecture',
    client: 'Our Future Health',
    cardBody: 'Architecture for a personalised health platform operating at UK population scale.',
    confidential: false,
    eyebrow: 'Case study · Platform architecture',
    title: 'Architecture for a personalised health platform at population scale',
    lead: 'Setting a technical architecture and data strategy able to support a personalised-health platform serving millions of participants — built to be resilient, extensible, and trustworthy from day one.',
    meta: [
      { label: 'Client', value: 'Our Future Health' },
      { label: 'Role', value: 'Technical advisor' },
      { label: 'Stage', value: 'Platform build-out' },
      { label: 'Focus', value: 'Architecture · Data · Scale' },
    ],
    heroImageLabel: 'case-study hero image / product shot',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'A platform intended to operate at UK population scale needed an architecture capable of handling that scale from the outset — without over-engineering ahead of proven need, and without the data strategy becoming an afterthought.',
        ],
      },
      {
        heading: 'The approach',
        paragraphs: ['Architecture and data strategy were treated as one decision, not two:'],
        bullets: [
          'Platform architecture assessed and shaped against realistic population-scale load and growth paths.',
          'Data strategy designed alongside the architecture, not layered on afterwards.',
          'Technical choices weighed against the trust and governance expectations of a population health platform.',
        ],
      },
      {
        heading: 'The outcome',
        paragraphs: [
          'An architecture and data strategy positioned to support the platform’s growth toward UK population scale.',
        ],
      },
    ],
    note: 'Illustrative detail — specific figures and artefacts shared directly on request.',
    atGlance: 'Architecture and data strategy for a personalised-health platform at national scale.',
    servicesDrawn: ['Technology Strategy Sprint', 'Board Technical Advisor'],
    disciplinesBridged: 'Science · Software · Data',
  },
  {
    slug: 'dd',
    code: 'DD',
    cardTitle: 'Technical due diligence',
    client: 'Platform acquisition · Lean Library',
    cardBody: 'Technical, team and architecture evaluation supporting a platform acquisition decision.',
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
