# Ali Family Logistics — Localization-Ready Website

A portfolio site for a fictional, family-owned third-party logistics (3PL) provider, built to switch between English and Spanish instantly — no page reload, no change in layout or structure.

In first week, i worked as a backend in Freelancer Portfolio Builder for a Real Estate Agency where i used node and express JS. Second week project was Premium 3D Consumer Products Business Website in which we have to make a five 5 pages website with some animations. The technologies used were HTML,CSS,JS. GSAP is used for animations and Locomotive scroll for smooth scrolling. This week mainly focuses on JavaScript. This week mainly focuses on a website that switches between two languages and if page loads there is no change in layout or structure of webpage.

**Project:** SDC Internship, Week 3 — Professional/Advanced Practical Build

**Role:** Individual contributor

**Primary tool:** JavaScript

## Research: Professional Examples

I looked at three real, family-owned logistics companies to see what makes a site in this space professional-grade:

- **[Barrett Distribution](https://www.barrettdistribution.com/)** — US 3PL, family-owned since 1941. Homepage leads with three clearly scoped services, real client stats, and customer case studies that use the family-ownership angle as a trust signal.
- **[Gebrüder Weiss](https://www.gw-world.com/)** — the world's oldest transport/logistics company, still family-owned. Its language menu opens a country list where every option is written in its own script (e.g. 日本語, Polski) — but each language lives at its own URL rather than switching in place.
- **[Dachser](https://www.dachser.com/en/)** — German family-owned 3PL since 1930. Uses the same one-site-per-country pattern as Gebrüder Weiss, with a couple of countries offering more than one language per site.

What I borrowed: a clean service breakdown, the family-ownership story as a trust signal, and stats on the homepage. What I did differently: these companies use a separate URL per language for SEO reasons; my build uses one URL with instant JavaScript switching instead, since that's what this assignment specifically asks for.

---

## 1. What I Built and Why

A family-owned 3PL is a good fit for a localization demo because it's realistic, not decorative: a company moving freight across borders genuinely deals with clients and partners who don't all read English, so language switching solves a real business problem instead of being a feature for its own sake.

Live features:
- One-page site: Home, Services, About, Contact
- English/Spanish switch — no reload, structure stays identical
- Remembers the visitor's chosen language across refreshes
- Falls back to English automatically if a translation key is ever missing, instead of showing a blank or "undefined"
- Contact form with client-side validation, error messages shown in the active language
- Locale-aware number formatting on the stats (correct thousands separators per language)
- Responsive layout with a collapsible mobile nav

## 2. Scope

**In scope:**
- Single-page marketing site (Home / Services / About / Contact)
- Two fully translated languages (English, Spanish)
- Client-side only — no backend, no build tools, no frameworks
- Responsive across desktop, tablet, and mobile widths

**Out of scope (a deliberate boundary, not a gap):**
- Server-side rendering or a separate URL per language (see section 7)
- A CMS/admin panel for editing translations
- Payments, quoting, or account systems — this is a marketing site, not a client portal
- Right-to-left language support (not needed for EN/ES; the architecture supports adding it later)

## 3. Tools & Key Decisions

| Decision | What I chose | Why |
|---|---|---|
| Framework | Vanilla JavaScript, no framework | Matches the assignment's JavaScript requirement directly and keeps the project reviewable with no build step |
| Translation storage | A JS object (`translations.js`), not JSON loaded via `fetch()` | `fetch()` of local JSON files is blocked by CORS when a page is opened directly (`file://`) instead of through a server. A reviewer should be able to double-click `index.html` and have it work — embedding the data as a JS object guarantees that |
| Text lookup | Dot-path keys (e.g. `contact.form.errors.email`) resolved against nested objects | Keeps `translations.js` organized by section, and made a clean fallback rule possible |
| Missing translation handling | Falls back to English, then to the raw key — never to "undefined" | Deliberate, not accidental — see Testing below |
| Language persistence | `localStorage`, not cookies | No backend to read cookies server-side; `localStorage` is the simpler fit for a pure front-end site |
| Number formatting | `Intl.NumberFormat` | Native browser API — no library needed, and it automatically uses the right separators per language |

## 4. Project Structure

```
brennan-family-logistics/
├── index.html          — page structure, data-i18n hooks
├── css/
│   └── styles.css      — layout, theme, responsive rules
└── js/
    ├── translations.js — all English/Spanish text
    └── app.js          — switching logic, form validation, formatting
```

## 5. How to Run It

No install, no server, no dependencies. Open `index.html` in any modern browser.

## 6. Testing

This table is intentionally blank in the "Result" column — fill it in as you actually run each scenario yourself. Don't submit it unfilled; the point of this section is proof you tested it, not just a checklist.

| # | Scenario | Expected | Result | Fix (if needed) |
|---|---|---|---|---|
| 1 | Switch EN → ES → EN a few times | All text changes, layout doesn't shift | | |
| 2 | Refresh the page after picking Spanish | Page loads in Spanish | | |
| 3 | Click the language buttons rapidly | No visual glitches or stuck state | | |
| 4 | Submit the contact form empty | Error messages appear in the active language | | |
| 5 | Submit with an invalid email (`test@test`) | Email-specific error shown | | |
| 6 | Delete a key from `translations.es` in the code, reload in Spanish | That one piece of text shows in English — nothing breaks or shows "undefined" | | |
| 7 | Open at a narrow/mobile width | Nav collapses into a toggle menu, nothing overlaps | | |
| 8 | Open in a second browser | Behaves identically | | |

## 7. What I'd Improve With More Time

Keep only what you'd actually say in the video — don't list all of these if you don't mean it:

- **Separate URLs per language** (`/en/`, `/es/`) instead of one URL that swaps content with JavaScript. Google's own guidance on multilingual sites recommends this for SEO, since crawlers don't reliably see JS-driven language switches.
- **An automated test suite** (e.g. Playwright) instead of testing the scenarios above by hand every time the code changes.
- **A third language**, ideally a right-to-left one like Urdu or Arabic, to prove "localization-ready" goes beyond just English/Spanish.

## 8. AI Assistance Disclosure


