# Reference Homepage Layout & Visual Analysis

**Target Benchmark Website:** [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
**Analysis Date:** September 28, 2026  
**Purpose:** Structural breakdown to enable 1:1 layout reproduction for Stage 2 of the Grow My Therapy internship assignment.

---

## Global Design System & Layout Principles

- **Typography System:**
  - **Headings Font:** `Cormorant Infant` (Serif, elegant, high contrast, warm editorial tone)
  - **Body Font:** `Muli` / `Inter` fallback (Clean sans-serif, high legibility, line-height ~1.6)
- **Container & Grid Specifications:**
  - **Max Site Width:** `1800px` (outer boundary)
  - **Content Container Max Width:** `1200px` – `1280px` (`content-width--wide`)
  - **Grid System:** 12-column layout engine with responsive flex/grid stacking on mobile
  - **Vertical Section Padding:** Desktop `5vw` to `6vw` (approx. `80px` – `110px`), Mobile `32px` – `48px`
  - **Horizontal Gutter:** Desktop `5vw` (~`40px`–`80px`), Mobile `16px`–`24px`
- **Identified Theme Palettes (Original Palette for reference only):**
  - `light`: Warm ivory / soft cream background
  - `white`: Pure white background
  - `black`: Deep slate/black background with high contrast white text
  - `bright`: Soft pastel tinted background
  - `dark`: Deep charcoal sub-footer background

---

## Detailed Section-by-Section Analysis

### Section 0: Header & Navigation
- **Position:** Fixed / Sticky top of page
- **Purpose:** Brand recognition, primary site navigation, immediate consultation booking access.
- **Layout Structure:**
  - Full width with contained padding.
  - Left: Practice Logo / Brand Name.
  - Center/Right: Desktop Navigation links (`Home`, `About`, `FAQs`, `Contact`).
  - Right CTA: Primary Action Button (`Book an Appointment`).
- **Responsive Behavior:**
  - **Desktop:** Inline row flex layout.
  - **Mobile:** Hamburger menu toggle icon; nav links collapse into full-screen sliding overlay.
- **Typography:** Sans-serif medium weight, uppercase/capitalized nav links (`14px`–`15px`).
- **Borders & Shadows:** Subtle bottom border or shadow on scroll.

---

### Section 1: Hero Section
- **Position 1** (Top of Page beneath Header)
- **Purpose:** Primary value proposition, emotional connection, immediate CTA.
- **Layout Structure:** 
  - 2-Column Desktop Grid (Text on Left/Center, Hero Image composition on Right/Dual stacked layout).
  - Contained wide wrapper (`1200px`).
- **Typography Hierarchy:**
  - **Eyebrow:** `ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA` (Small, uppercase, wide letter-spacing, muted primary color).
  - **H1 Heading:** `Rebuild your foundation on solid ground and finally begin to thrive.` (Serif, `42px`–`56px`, bold, tight leading).
  - **Body Text:** `Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.` (`18px`–`20px`, leading 1.6).
- **Buttons / Links:** Primary Button `Book an Appointment` (Pill/rounded rectangle, solid fill, hover scale/opacity).
- **Images:** 2 compositional hero images (therapeutically warm imagery, portrait & ambient interior, rounded corners).
- **Responsive Stacking:** Desktop 2-column side-by-side -> Mobile single column (Eyebrow -> H1 -> Body -> CTA -> Hero Images).
- **Theme:** `light` (Warm cream background).

---

### Section 2: Welcome / Mission Statement Section
- **Position 2**
- **Purpose:** Validate client feelings, build empathy, introduce practice philosophy.
- **Layout Structure:**
  - Asymmetric 2-Column layout.
  - Left column: Large empathetic statement & supporting paragraphs.
  - Right column: Accent therapy space image.
- **Typography Hierarchy:**
  - **H2 Heading:** `You’re holding onto hope that life can be better than it is right now.` (Serif, `32px`–`40px`).
  - **Body Text:** 2 supporting paragraphs explaining therapeutic validation and local service availability.
- **Images:** 1 featured image (warm, reassuring context).
- **Responsive Stacking:** Desktop 2-column -> Mobile 1-column (Heading & Body first, Image below).
- **Theme:** `light` (Soft background continuity).

---

### Section 3: "Who We Help" (Target Audience Cards)
- **Position 3**
- **Purpose:** Segment potential clients into core demographic categories (Adults, Couples, Children & Teens).
- **Layout Structure:**
  - Section Header (Center aligned).
  - 3-Column Equal Grid / Card Layout.
  - Each card contains an image header, title (H4), concise paragraph description, and optional link.
- **Typography Hierarchy:**
  - **H2 Heading:** `Who we help` (Center-aligned, serif).
  - **H4 Card Titles:** `Adults`, `Couples`, `Children & Teens` (Serif/sans-serif bold).
  - **Body Text:** 2–3 sentences per card (`15px`–`16px`).
- **Images:** 3 category-specific images (1 per card, consistent aspect ratio ~4:3 or 1:1 square, subtle border-radius).
- **Borders & Cards:** Clean card cards with subtle background contrast or borders.
- **Responsive Stacking:** Desktop 3-column row -> Tablet 2-column / 1-column -> Mobile 3 stacked vertical cards.
- **Theme:** `white` (Clean contrast transition from section 2).

---

### Section 4: Full-Width Empathy Banner / Quote
- **Position 4**
- **Purpose:** Create an emotional pause, reinforce safety and non-judgmental care.
- **Layout Structure:**
  - Full-bleed / Full-width dark contrast banner section.
  - Centered high-impact block text overlay.
- **Typography Hierarchy:**
  - **H2 Quote Heading:** `You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.` (Large serif, center-aligned, white text, `32px`–`44px`).
- **Backgrounds:** `black` / Dark backdrop with subtle background texture/image overlay.
- **Responsive Behavior:** Full bleed across all viewports; font sizes adjust gracefully (`24px` on mobile).

---

### Section 5: Areas of Expertise (Tag / Pill Cloud)
- **Position 5**
- **Purpose:** Highlighting specific clinical conditions and topics in an easily scannable format.
- **Layout Structure:**
  - Centered header followed by a flexible inline wrap container (Pill tag cloud).
- **Typography Hierarchy:**
  - **H3 Heading:** `Our areas of expertise` (Serif, `28px`–`36px`).
  - **Pill Items:** `Dissociation`, `Trauma`, `Family conflict`, `Special needs parenting`, `Depression`, `Marriage`, `Anxiety`, `Relationships`, `Children`, `Teens`, `Intimacy & connection`, `…and more.`
- **Pill Styling:** Rounded pill badges (`border-radius: 9999px`), subtle background fill, hover color transition.
- **Responsive Behavior:** Wraps naturally on mobile and tablet screens without overflowing.
- **Theme:** `white` (Bright background).

---

### Section 6: "How We Work" (Practice Philosophy & Approach)
- **Position 6**
- **Purpose:** Explain the therapeutic approach, client-centered care, and expectations.
- **Layout Structure:**
  - 2-Column Split (Image on Left, Content block on Right).
- **Typography Hierarchy:**
  - **Eyebrow:** `HOW WE WORK` (Uppercase, small, bold).
  - **H2 Heading:** `We’re here to make a difference.` (Serif heading).
  - **Body Copy:** 3 structured paragraphs detailing deep listening, gentle challenge, and collaborative growth.
- **Buttons / Links:** `Learn more about us` (Secondary button / outline or solid).
- **Images:** 1 vertical/portrait image.
- **Responsive Stacking:** Desktop side-by-side -> Mobile stacked (Content -> Image or Image -> Content).
- **Theme:** `bright` (Soft pastel background tint).

---

### Section 7: Mid-Page Transition Banner
- **Position 7**
- **Purpose:** Visual divider providing perspective and forward movement.
- **Layout Structure:** Full-width image banner with centered text overlay or stacked caption.
- **Typography Hierarchy:**
  - **H2 Heading:** `Honoring where you’ve been & helping shape where you’re headed.`
- **Images:** 1 wide landscape image.
- **Theme:** `white`.

---

### Section 8: Core Specialties Grid
- **Position 8**
- **Purpose:** In-depth breakdown of primary clinical service offerings with dedicated CTAs.
- **Layout Structure:**
  - Section Header: `Our specialties include…`
  - 4-Column Grid or 2x2 Grid Layout.
  - Each item includes Title (H4), descriptive paragraph, and a `Learn more` button link.
- **Specialties Offered:** `Trauma`, `Dissociation`, `EMDR`, `Special Needs Parenting`.
- **Typography Hierarchy:**
  - **H3 Title:** `Our specialties include…`
  - **H4 Item Heading:** Specialty names (`20px`–`24px`).
  - **Body Copy:** Specialty details (`15px`–`16px`).
- **Buttons:** 4 individual `Learn more` action links/buttons.
- **Responsive Stacking:** Desktop 4-column row or 2x2 -> Mobile 1-column vertical list.
- **Theme:** `white`.

---

### Section 9: "Schedule an Appointment" CTA Section
- **Position 9**
- **Purpose:** Direct conversion section encouraging visitors to take action.
- **Layout Structure:**
  - 2-Column or Centered composition with dual decorative imagery.
  - Text container with Eyebrow, H2, supporting body copy, and prominent CTA button.
- **Typography Hierarchy:**
  - **Eyebrow:** `SCHEDULE AN APPOINTMENT`
  - **H2 Heading:** `Find a therapist who is the right fit for you.`
  - **Body Copy:** Reassuring copy on taking the first step.
- **Buttons:** `Book now` (High-visibility Primary CTA Button).
- **Images:** 2 supporting practice imagery elements.
- **Theme:** `light` (Ivory/cream background matching hero tone).

---

### Section 10: Main Footer & Practice Info
- **Position 10**
- **Purpose:** Navigation, address, contact information, service area coverage, team listing.
- **Layout Structure:**
  - Multi-column footer layout (4 Columns desktop):
    - **Col 1:** Practice logo & introductory message.
    - **Col 2:** Quick Links (`Home`, `About`, `FAQs`, `Contact`).
    - **Col 3:** Practice Location (`925 Broadbeck Dr...`), Email, Phone, Regional coverage list.
    - **Col 4:** Our Team list.
- **Typography Hierarchy:** Column headings, link lists (`14px`–`15px`).
- **Theme:** `white`.

---

### Section 11: Sub-Footer / Copyright & Legal
- **Position 11 (Bottom)**
- **Purpose:** Copyright, legal disclaimers, credits.
- **Layout Structure:** Single row full-width bar.
- **Typography Hierarchy:** Small legal text (`12px`–`13px`).
- **Links:** `Terms`, `Privacy Policy`, `Disclaimer`, `Website Credits`.
- **Theme:** `dark` (Dark slate/black bar).

---

## 🏗️ Proposed Component Architecture & Hierarchy

Based on our section-by-section analysis, here is the clean, modular React component blueprint for the homepage:

```
src/
├── app/
│   ├── layout.tsx                # Root HTML, Fonts, Global Providers
│   └── page.tsx                  # Composition of Header + Sections + Footer
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky Nav, Logo, Links, Mobile Drawer, CTA
│   │   └── Footer.tsx            # Practice Info, Links, Sub-footer Legal Bar
│   ├── ui/
│   │   ├── Container.tsx         # Reusable max-width wrapper (1200px / 1800px)
│   │   ├── Button.tsx            # Theme-aware primary/secondary buttons
│   │   ├── SectionHeading.tsx    # Eyebrow, H2/H3, Subtitle layout helper
│   │   ├── Card.tsx              # Reusable card container
│   │   └── PillTag.tsx           # Tag cloud badge component
│   └── sections/
│       ├── HeroSection.tsx       # Section 1: Hero title, CTA, dual image grid
│       ├── MissionSection.tsx    # Section 2: Empathy intro & image split
│       ├── WhoWeHelpSection.tsx  # Section 3: 3-column target audience grid
│       ├── EmpathyBanner.tsx     # Section 4: Full-bleed dark quote section
│       ├── ExpertiseSection.tsx  # Section 5: Specialty tag/pill cloud
│       ├── HowWeWorkSection.tsx  # Section 6: Philosophy split layout & CTA
│       ├── DividerBanner.tsx     # Section 7: Mid-page visual banner
│       ├── SpecialtiesGrid.tsx   # Section 8: 4-card core services grid
│       └── ScheduleCtaSection.tsx# Section 9: Final conversion CTA banner
```

---

## ⚠️ Uninspected / Non-Scrapable Elements
1. **Dynamic Mobile Drawer Animation Speeds:** Exact CSS transition curves for the mobile menu drawer. We will implement standard `ease-in-out 300ms` transitions.
2. **Backend Form Handler Actions:** The booking buttons redirect to external scheduling links or modals; we will mock these with accessible button triggers or modal placeholders.

---

## Confirmation Summary

- `docs/REFERENCE_ANALYSIS.md` has been successfully created.
- The 12-part section sequence and header/footer architecture have been fully documented.
- No copyrighted images, text, or Dr. Maya Reynolds data have been generated in code yet.
- Ready for Stage 2B instructions!
