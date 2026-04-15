# P701 Interaction + Map + FX Specification

## Functional scope
1. Login interactions
- Add interaction handlers for Google/Facebook/Apple buttons.
- Show feedback state while provider flow is being simulated.

2. Card interactions
- Add save/remove actions for featured cards.
- Add user feedback (alerts/status text) when card state changes.

3. Campus map interactions
- Integrate a map component centered at IUH Nguyen Van Bao campus.
- Support click-to-mark interaction and coordinate display.
- Provide quick actions: recenter and open external direction URL.

4. Entertainment API integration
- Integrate at least two public APIs and render dynamic cards.
- Add reload interaction and fallback messages when API fails.

5. Motion and visual polish
- Add route transition animations.
- Add richer background, card, and button effects with accessible motion rules.

## Validation
- Run lint and build after implementation.
- Ensure mobile responsive behavior.

## Execution Status (2026-04-15)
- Login interactions: Completed (Google/Facebook/Apple interaction feedback states added).
- Card interactions: Completed (save/remove interactions for featured cards with user notices).
- Campus map: Completed using React Leaflet, default location set to IUH Nguyen Van Bao campus (10.8229, 106.6865), with click-to-select, recenter, and direction actions.
- Entertainment APIs: Completed with Official Joke API and Advice Slip API (fallback content included).
- Smooth transitions and visual effects: Completed (page transition animation, background gradients, spotlight card effect, enhanced button hover motion).

## Validation Results
- Lint: PASS
- Build: PASS
