// Registry of tools offered in the app. Add one entry per skill-turned-tool.
// audience: "internal" = Benevox team only, "external" = customers.
export interface Tool {
  slug: string;
  name: string;
  description: string;
  audience: "internal" | "external";
  status: "planned" | "beta" | "live";
  fields: ToolField[];
}

export interface ToolField {
  key: string; // must match the field name the bvx-ops API expects
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[]; // renders a select instead of a textarea
}

export const tools: Tool[] = [
  {
    slug: "closer",
    name: "Closer",
    description: "Find leads, draft outreach and follow-ups, and prepare contracts.",
    audience: "internal",
    status: "beta",
    fields: [
      { key: "prospect", label: "Prospect and company details", placeholder: "Name, role, company, website, what you know about them" },
      { key: "offer", label: "Offer", options: [{ value: "launchpad", label: "LaunchPad" }, { value: "pod", label: "Team pod" }] },
    ],
  },
  {
    slug: "founder",
    name: "Founder",
    description: "Stress-test a business idea before launch.",
    audience: "external",
    status: "beta",
    fields: [
      { key: "idea", label: "Your business idea", placeholder: "What it is, who it is for, how it makes money" },
    ],
  },
];
