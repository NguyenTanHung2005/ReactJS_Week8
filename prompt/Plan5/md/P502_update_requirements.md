# P502 Update Requirements from Debug/Test

## Inputs
- P501_debug_test_report.md

## Required Updates
1. [P0] Modernize global CSS tokens for maintainability: add spacing, radius, shadow, and motion tokens.
2. [P0] Improve accessibility: enforce visible keyboard focus style using `:focus-visible`.
3. [P1] Add reduced-motion fallback using `@media (prefers-reduced-motion: reduce)` to avoid motion discomfort.
4. [P1] Upgrade typography to fluid scale via `clamp()` for better responsiveness.
5. [P1] Improve platform hints: add `color-scheme: light` and tune form controls for modern browsers.
6. [P2] Prepare future testing uplift: note missing unit/e2e test framework and recommend adding Vitest + React Testing Library in a later plan.

## Priority
- P0: Items 1-2
- P1: Items 3-5
- P2: Item 6

## Handover to Plan6
- Plan6 must implement all P0/P1 items.
- Plan6 should include modern CSS updates and measurable validation.
