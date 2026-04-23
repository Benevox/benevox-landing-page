This blueprint is designed to be stored as a documentation file (e.g., `BENEVOX_BLUEPRINT.md`) within your codebase. It synthesizes the operational, technical, and commercial logic of **Benevox** as a **"software production machine"**.

***

# The Benevox Blueprint: Operational & Technical Framework

## 1. Identity and Vision
Benevox is a **structured software production machine** designed to provide a "plug-in" system for experienced development teams and reliable delivery pipelines. The core operating goal is to build a delivery system that works even when requirements are unclear or timelines shift, moving away from "heroics" toward **disciplined production**.

## 2. Core Engagement Models (Engineering-as-a-Service)
Benevox operates through three distinct value paths to accommodate different business maturities:

*   **Model 1: Fully Scoped (Fixed-Firm):** Best for projects with absolute requirements and high predictability needs (e.g., legacy migrations). Requires a locked **"Blueprint"** and Master Service Agreement (MSA) before work begins.
*   **Model 2: Per-Sprint (Agile-Flow):** The default operating model for high uncertainty. Work is executed in **one-week cycles**. Clients pay per sprint, and only the currently proposed sprint is scoped and validated in detail.
*   **Model 3: The Hybrid Model (80/20):** Strategic visibility via a **directional roadmap** combined with tactical **sprint-validated execution**. Only the current sprint is a hard execution commitment.

## 3. Operational Guardrails (The "Non-Negotiables")
These rules protect the commercial and technical integrity of the business:
1.  **No Idea goes to Engineering Unvalidated:** Technical feasibility must be verified before any commitment.
2.  **No Promise goes to the Client Unverified:** Sales must never promise price, timeline, or delivery until the technical pod completes validation.
3.  **No Milestone is Invented During Execution:** Milestones are designed and validated during the scoping phase, not during the build.
4.  **Team Payout stays inside Paid Milestone Scope:** The team must not work ahead into unpaid future milestones to maintain cash flow control.
5.  **AI Drafts, Humans Approve:** AI is an operational layer for acceleration, but humans remain the sole approval authority and are accountable for all decisions.

## 4. Team Structure: The Delivery Pod
Execution is handled by cross-functional units called **Pods**. A standard pod consists of:
*   **Pod Product Manager:** Coordinates validation, tracks daily progress records, and maintains scope alignment.
*   **Designer:** Responsible for approved UI/UX deliverables.
*   **Frontend Engineer:** Executes scoped frontend implementation.
*   **Backend Engineer:** Executes scoped backend implementation and API logic.
*   **QA Engineer:** Owns quality confirmation and the final release of payout holdbacks.

## 5. Incentive and Payout Model
Benevox uses a **progress-based payout model** rather than a time-based one:
*   **The Pod Pool:** 50% of total project/sprint revenue is allocated to the delivery pod.
*   **Fixed Role Split:** The pod pool is divided as: PM (**30%**), Designer (**10%**), Frontend (**20%**), Backend (**25%**), and QA (**15%**).
*   **Quality Holdback (95/5 Rule):** 95% of validated progress is payable upon completion; the final **5% is held back** until the QA engineer confirms the work meets quality standards.
*   **Validation Payout:** Validators receive a small fixed fee for their time (Small: $10.00, Medium: $11.00, Large: $13.20) if the project does not close, ensuring they are motivated to validate thoroughly.

## 6. AI Operations Layer
AI agents are formally integrated into the business pipeline to reduce manual waste:
*   **AI Intake/Scoping:** Converts messy client requirements into structured pre-scopes and task-linked milestones.
*   **AI Risk/Change Control:** Identifies dependencies and estimates the impact of requested "small updates" on cost and timeline.
*   **AI Delivery Tracking:** Assists with status reporting based on team and PM inputs.

## 7. Technical and Design Standards
*   **Atomic Design:** Interfaces must be built using the Atomic Design methodology (Atoms, Molecules, Organisms, Templates, Pages) for maximum scalability.
*   **The 4-Point Spacing System:** All UI layouts must adhere to a consistent spacing system to ensure visual harmony.
*   **Accessibility (WCAG):** Minimum contrast ratios and non-color-dependent information delivery are mandatory.
*   **Security:** Engineering environments must be **SOC2-compliant**, and all intellectual property remains with Benevox or the client.

***

**Codebase Reference:** Developers and AI agents should refer to this blueprint to ensure any new feature, pull request, or architectural change aligns with the **Benevox Production Machine** logic.