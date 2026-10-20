# DESIGN.md — Fajar Nasrulloh Portfolio

> Design contract for the existing portfolio. This document guides implementation; it is not permission to replace working features, rewrite the stack, or invent project details.

## 1. Product intent

Present Fajar as a software-engineering student focused on frontend and backend web development. The portfolio should feel authored, technically credible, and specific to the work shown—not like a generic startup landing page.

Primary visitor questions, in order:
1. Who is this developer and what does he build?
2. Which real projects can I inspect?
3. What technologies can he explain and use?
4. How can I contact him or verify his work?

## 2. Visual direction: editorial engineering

Use a restrained editorial layout with clear typography, strong alignment, purposeful whitespace, and small technical details. The design may feel like a developer's well-maintained field notebook or project archive—not a SaaS marketing template.

### Visual rules
- Start with a calm neutral canvas and high-contrast text. Use one restrained accent color for links, active states, and important actions.
- Suggested tokens (adapt to existing theme rather than duplicating them):
  - `--background`: `#0B0D10` (dark) / `#F7F7F4` (light)
  - `--surface`: `#12161B` (dark) / `#FFFFFF` (light)
  - `--text`: `#F0F2F4` (dark) / `#17191C` (light)
  - `--muted`: `#9AA3AD` (dark) / `#626A73` (light)
  - `--border`: `#28303A` (dark) / `#E1E3DF` (light)
  - `--accent`: `#78A9FF` (use sparingly; check contrast)
- Use one display/heading family and one readable body family at most. Prefer the fonts already loaded by the project; avoid adding font dependencies without a clear reason.
- Use a consistent spacing scale based on 4px or 8px. Keep the main content width readable (roughly 64–76rem) and align section edges.
- Borders should be subtle and functional. Use shadows only when they communicate layering; avoid glow effects.
- Use real project screenshots, diagrams, or code/product details. Never use random stock imagery as decoration.

## 3. Page hierarchy

### Navigation
- Keep navigation compact and predictable.
- Show the portfolio identity, a small set of section links, and a clear contact action.
- On mobile, prevent wrapping or overflow; use an accessible menu only if necessary.
- Indicate the current theme if dark/light mode exists. Preserve the existing theme behavior.

### Hero
- Lead with the developer's role and a specific, honest statement about the kind of software being built.
- Avoid vague claims such as “revolutionizing the digital world”, “passionate tech enthusiast”, “cutting-edge solutions”, or “pixel-perfect experiences”.
- Use a clear primary action (view projects) and a secondary action (contact or GitHub).
- A small status line or technical annotation is acceptable only if it is true and useful. Do not invent availability, employment status, metrics, or client counts.

### Selected projects
- Projects are the evidence, not decoration. Give each card a consistent structure: project title, one-sentence purpose, relevant stack, meaningful screenshot, and links that work.
- Use a varied but consistent layout when project imagery supports it; do not force every card into identical oversized gradient panels.
- Do not invent features, users, performance figures, dates, or backend architecture. Pull facts from the existing project data and repository.
- Make the demo and source links visually distinct and keyboard accessible. Hide a link when its URL is empty rather than rendering a dead button.
- If filters exist, they must work and have a useful empty state. Do not add filters merely for visual complexity.

### Skills
- Group skills by how they are used (for example: Frontend, Backend & APIs, Databases, Tools) instead of a wall of badges.
- Show only technologies the portfolio owner can reasonably discuss. Avoid proficiency percentages, progress bars, and arbitrary “expert” ratings.

### About and certifications
- Use concise, factual copy. Distinguish learning, coursework, personal projects, and formal work experience.
- Display certification name, issuer, and verification link when available. Never imply a certificate is a job or professional experience.

### Contact and footer
- Keep contact options direct and functional. Validate forms if a form already exists; otherwise prefer clear email/GitHub links over a fake form.
- Footer should be quiet: identity, a few useful links, and current year if already handled dynamically.

## 4. Anti-template / anti-AI-slop rules

Do not use these as default design moves:
- Purple/blue gradient backgrounds across the entire page.
- Blurred glass cards, neon glows, floating blobs, decorative orbs, and random abstract 3D shapes.
- Repeated pill badges for every noun or skill.
- Oversized headline + three identical feature cards + logo cloud + fake statistics as a default section recipe.
- Emoji as primary interface icons.
- Scroll-jacking, cursor-following effects, typewriter text that hurts readability, or animations on every element.
- Generic marketing copy or invented numbers (“10+ projects”, “99% satisfaction”, “100k users”) without evidence.
- Stock photos unrelated to software work.

Every decorative element must serve hierarchy, context, or interaction. If removing an element improves clarity, remove it.

## 5. Motion and interaction

- Prefer small transitions for color, opacity, underline, and slight elevation.
- Keep common transitions around 120–220ms and use consistent easing.
- Do not animate layout continuously or delay access to content.
- Respect `prefers-reduced-motion`.
- Hover effects must have keyboard-focus equivalents. Focus indicators must remain visible.
- Interactive controls need visible hover, focus, active, disabled, and error states where relevant.

## 6. Responsive behavior

Design mobile-first and test at approximately 360px, 768px, 1024px, and 1440px widths.
- No horizontal page overflow.
- Body text should remain comfortable to read; avoid tiny muted text for essential information.
- Project cards stack naturally on narrow screens; screenshots retain useful proportions.
- Tap targets should be comfortably sized (aim for about 44px where practical).
- Avoid fixed heights that clip text or images. Use fluid sizing and sensible max-widths.

## 7. Accessibility and semantics

- Use semantic landmarks and a logical heading order.
- Every meaningful image needs appropriate alt text; decorative images use empty alt text.
- Maintain readable contrast in both themes.
- Ensure keyboard navigation, visible focus, descriptive link names, and labels for form fields.
- Do not rely on color alone to communicate status.
- Use Lucide icons already in the project where helpful; pair ambiguous icons with text or accessible labels.

## 8. Engineering constraints

- Preserve the existing Next.js App Router, TypeScript, Tailwind CSS, project data model, routes, and current integrations unless a change is explicitly required.
- Inspect existing components, styles, package versions, and design tokens before editing. Extend existing patterns instead of creating a second design system.
- Prefer small reusable components when they remove real duplication; avoid abstraction for one-off markup.
- Do not install dependencies for effects that can be implemented cleanly with existing CSS and libraries.
- Keep content/data separate from presentation where the repository already does so.
- Never replace real content with placeholder copy or remove working features to make a mockup easier.
- Avoid broad rewrites. Make the smallest coherent change and explain which files changed.

## 9. Quality gate before calling the design complete

- [ ] The result has a recognizable visual point of view, not a generic template composition.
- [ ] Content is factual and tied to the developer's real projects.
- [ ] All links and buttons work; empty URLs do not create dead actions.
- [ ] Dark and light themes are readable if both are supported.
- [ ] Layout works at 360px, 768px, 1024px, and 1440px.
- [ ] Keyboard focus, semantic headings, image alt text, and reduced motion are handled.
- [ ] No horizontal overflow, clipped content, console errors, or obvious layout shifts.
- [ ] Existing routes, project data, and features remain intact.
- [ ] `pnpm lint` and `pnpm build` pass, or any pre-existing failure is documented accurately.

## 10. Instructions for coding agents

Before coding:
1. Inspect `AGENTS.md`, `CLAUDE.md`, `package.json`, `app/`, `components/`, and `data/`.
2. Identify the current page structure and existing theme implementation.
3. State a concise implementation plan and the exact files that need changes.
4. Do not modify files unrelated to the design task.

While coding:
1. Follow this design contract and preserve the existing architecture.
2. Use real project data and assets already present in the repository.
3. Prefer intentional spacing and typography over decorative effects.
4. Keep changes incremental and TypeScript-safe.

After coding:
1. Run lint and production build using the package manager configured by the repository.
2. Report the files changed, what changed visually, tests run, and anything not verified.
3. Do not claim the design is responsive or production-ready unless it has been checked.
