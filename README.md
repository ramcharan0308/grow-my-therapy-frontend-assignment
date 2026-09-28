# Dr. Maya Reynolds, PsyD — Therapy Practice Website

A modern, accessible, and high-performance digital practice homepage for **Dr. Maya Reynolds, PsyD** (Licensed Clinical Psychologist in Santa Monica, California), built for Stage 2 of the Grow My Therapy Internship Selection Process.

---

## 🌟 Assignment Objective & Deliverables

- **Live Website:** [https://grow-my-therapy-frontend-assignment-one.vercel.app/](https://grow-my-therapy-frontend-assignment-one.vercel.app/)
- **GitHub Repository:** [https://github.com/ramcharan0308/grow-my-therapy-frontend-assignment](https://github.com/ramcharan0308/grow-my-therapy-frontend-assignment)
- **Loom Walkthrough:** `[Pending Loom Video Link]`

### Core Goals Achieved:
1. **UI Layout Accuracy:** 1:1 structural reproduction of the benchmark website layout ([Conejo Valley Counseling](https://www.conejovalleycounseling.com/home)), preserving section order, grid systems, spacing, and responsive behavior.
2. **Creative Redesign:** Completely new cohesive visual design system (Deep Forest Sage `#2D3A34`, Warm Alabaster Cream `#FAF8F5`, `Cormorant Garamond` serif headings, `Inter` body text).
3. **Single Source of Truth:** 100% of therapist copy, services, modalities, client populations (adults only), and location details are derived strictly from the official Dr. Maya Reynolds profile without any invented claims.
4. **New Custom Section:** Added **"Our Santa Monica Office"** (`OfficeSection`), featuring official office photography and practice environment details.

---

## 🛠️ Required Tech Stack

- **Framework:** Next.js `15.5.26` (App Router)
- **Language:** TypeScript `5.7.3`
- **Styling:** Tailwind CSS `3.4.17` + CSS Variable Design Tokens
- **Typography:** `Cormorant Garamond` (Google Fonts) & `Inter`
- **Icons:** `lucide-react`
- **Code Quality:** ESLint (`next/core-web-vitals`)

---

## 🌿 Key Features & Architecture

- **14-Step Structural Homepage Flow:**
  1. Header & Navigation (Sticky bar + accessible mobile drawer)
  2. Hero Section (Headline, value prop, primary/secondary CTAs, dual image composition)
  3. Mission / Empathy Introduction (Validating adult stress, overthinking, and tension)
  4. "Who I Work With" (3 Adult-focused client segments: Anxiety & Panic, Burnout & Stress, Trauma & Past Experiences)
  5. Full-Width Philosophy Banner (Dark contrast statement)
  6. Areas of Expertise (Pill tag cloud separating clinical concerns and evidence-based modalities)
  7. How We Work / About Dr. Maya Reynolds (Therapist bio with official headshot)
  8. Mid-page Image Banner (Visual divider)
  9. Primary Clinical Specialties (4 core service cards)
  10. **Our Santa Monica Office (NEW SECTION)** (Highlighting private, quiet, natural-light environment, in-person Santa Monica care, and California telehealth)
  11. Schedule Consultation CTA (Conversion block)
  12. Frequently Asked Questions (Accessible keyboard-navigable FAQ Accordion with `aria-expanded`)
  13. Practice Footer (Location, navigation, telehealth notice, core specialties)
  14. Sub-Footer Legal Bar (Terms, Privacy Policy, Disclaimer, Copyright)

---

## ♿ Accessibility & Contrast

- **WCAG Contrast:** Deep Charcoal text (`#1F2421`) on Warm Cream (`#FAF8F5`) yields a **15:1 contrast ratio** (surpassing WCAG AAA standards).
- **ARIA Semantics:** Full keyboard navigation support for mobile menu drawer and FAQ accordion toggles with `aria-expanded` and `aria-controls`.
- **Image Optimization:** All image assets served locally from `public/images/` with descriptive `alt` attributes.

---

## 🚀 Local Installation & Development

### 1. Clone the Repository
```bash
git clone https://github.com/ramcharan0308/grow-my-therapy-frontend-assignment.git
cd grow-my-therapy-frontend-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Code Quality Checks & Build
```bash
# Run ESLint
npm run lint

# Build production bundle
npm run build

# Run production server locally
npm run start
```

---

## 📄 Deliverable Documentation

- [`docs/ASSIGNMENT.md`](file:///c:/Users/HP/Documents/Grow%20My%20Therapy_Assignment/docs/ASSIGNMENT.md) — Internship assignment specification.
- [`docs/maya-profile-source.md`](file:///c:/Users/HP/Documents/Grow%20My%20Therapy_Assignment/docs/maya-profile-source.md) — Authoritative Dr. Maya Reynolds profile source.
- [`docs/DEPLOYMENT.md`](file:///c:/Users/HP/Documents/Grow%20My%20Therapy_Assignment/docs/DEPLOYMENT.md) — Deployment & developer guide.
- [`docs/LOOM_SCRIPT.md`](file:///c:/Users/HP/Documents/Grow%20My%20Therapy_Assignment/docs/LOOM_SCRIPT.md) — Loom walkthrough script.

---

&copy; 2026 Dr. Maya Reynolds, PsyD. Built for Stage 2 Grow My Therapy Selection Process.
