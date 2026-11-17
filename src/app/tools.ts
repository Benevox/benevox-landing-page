// Registry of tools offered in the app. Add one entry per skill-turned-tool.
// audience: "internal" = Benevox team only, "external" = customers.
export interface Tool {
  slug: string;
  name: string;
  description: string;
  audience: "internal" | "external";
  status: "planned" | "beta" | "live";
}

export const tools: Tool[] = [
  {
    slug: "closer",
    name: "Closer",
    description: "Find leads, draft outreach and follow-ups, and prepare contracts.",
    audience: "internal",
    status: "planned",
  },
  {
    slug: "founder",
    name: "Founder",
    description: "Stress-test a business idea before launch.",
    audience: "external",
    status: "planned",
  },
];
