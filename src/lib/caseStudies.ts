export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  stat: string;
  link?: string;
  // Fill these in with real details to show the full story sections. Empty ones are hidden.
  challenge?: string;
  solution?: string;
  result?: string;
  quote?: { text: string; by: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bellcrest",
    client: "Bellcrest Family Clinic",
    title: "A digital front door patients actually enjoy using",
    summary: "Re-engineered a clinic's website to make booking and discovery effortless.",
    stat: "Delivered in 14 days",
    link: "https://bellcrestfamilyclinic.ca/",
  },
  {
    slug: "alder",
    client: "Alder Family Clinic",
    title: "A site that never goes down, even under pressure",
    summary: "Built resilient, multi-region infrastructure with instant failover.",
    stat: "Zero downtime, always on",
    link: "https://alderfamilyclinic.ca/",
  },
];
