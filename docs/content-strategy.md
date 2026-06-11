# Content Strategy

## Brand Positioning

**IMC (Intelligent Mastery Coaching)** is a technology-enabled ecosystem that bridges the gap between academic education and market reality.

### Core Framework

IMC's methodology integrates three pillars:

1. **Strategic Intellect** — Analytical thinking, business acumen, decision-making frameworks
2. **Digital Mastery** — Technology fluency, AI literacy, gamified learning
3. **Physical & Mental Endurance** — Resilience, discipline, performance optimization

### Brand Voice

- **Professional** — Business-appropriate tone for corporate audiences
- **Aspirational** — Emphasizes growth and transformation
- **Educational** — Clear, informative, jargon-light
- **Inclusive** — Welcoming to all career stages and backgrounds

---

## Business Unit Content

### Corporate & Business Training

**Target audience:** Students, early-career professionals, corporate L&D departments

**Key messages:**
- Bridge the gap between academic education and workplace demands
- Practical, applied learning over theoretical instruction
- Measurable skill development with real-world relevance
- Career readiness as a measurable outcome

**Content pages:**
- `/academy` — Program catalog and course descriptions
- `/assessment` — Career readiness self-evaluation tool

**Tone:** Motivational, professional, results-oriented

### Athletic Performance (OCTRI)

**Target audience:** Endurance athletes, executives seeking performance coaching

**Key messages:**
- Mental toughness as a transferable skill
- Discipline from sport translates to business performance
- Holistic development beyond physical training

**Content:** Referenced throughout ecosystem and about pages

**Tone:** Disciplined, inspiring, performance-driven

### Digital Solutions & Technology

**Target audience:** Healthcare education, EdTech consumers, enterprise clients

**Key messages:**
- Gamification drives engagement and retention
- Mobile-first learning meets learners where they are
- Technology-enabled solutions at scale

**Content pages:**
- `/digital-solutions` — Technology approach and product showcase

**Tone:** Innovative, user-centric, technology-forward

---

## Product Content

### Rx Challenger

**Positioning:** Flagship Digital Solutions product — a gamified prescription interpretation training platform

**Target audience:** Pharmacy students, healthcare professionals

**Key messages:**
- Gamified learning makes clinical training engaging
- Real-world case studies build practical skills
- Available on mobile for on-the-go learning

**Call to action:** Download on Google Play

---

## Site Map Content Hierarchy

```
IMC Hub (Homepage)
├── About
│   ├── Mission & Vision
│   ├── Principles
│   └── Team
├── Business Units
│   ├── Academy (Corporate & Business Training)
│   ├── Digital Solutions & Technology
│   │   └── Rx Challenger
│   └── OCTRI (Athletic Performance) — External
├── Assessment (Career Readiness Quiz)
├── Contact
│   ├── Contact Methods
│   ├── Contact Form
│   └── FAQ
├── FAQ (Full FAQ)
├── Privacy Policy
└── Terms of Service
```

---

## SEO Keyword Themes

### Primary Terms
- Intelligent Mastery Coaching
- IMC Hub
- Corporate training
- Career readiness
- EdTech

### Secondary Terms
- Business transformation
- Workforce development
- Talent development
- Organizational development
- Gamified learning
- Digital solutions
- Athletic performance
- Triathlon training
- Mental toughness

### Product Terms
- Rx Challenger
- Pharmacy education
- Prescription interpretation training
- Healthcare learning platform

---

## Content Maintenance

### Review Cycle

| Content Type | Review Frequency | Owner |
|-------------|-----------------|-------|
| Team bios | Quarterly | About page |
| Course listings | As programs change | Academy page |
| FAQ | Quarterly | FAQ page |
| Testimonials | As collected | Academy, Digital Solutions |
| Legal pages | Annually | Privacy, Terms |
| Sitemap priorities | Per new page addition | sitemap.ts |

### Content Addition Process

1. Create or update the relevant page/component
2. Update `src/app/sitemap.ts` if adding a new route
3. Add structured data to the relevant SEO component
4. Run `npm run build` to verify zero errors
5. Open a pull request with the content change
