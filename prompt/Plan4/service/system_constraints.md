# Plan4 System Constraints

## Technical constraints
- Keep existing route guards and auth flow intact.
- Keep axios interceptor behavior for 401 unchanged.
- Maintain lazy loading route strategy.

## UX constraints
- Use Bootstrap5 as base with Chefify tokens.
- Ensure mobile responsiveness for all new sections.
- Keep empty states and alerts accessible with semantic roles.

## Data constraints
- Allow mock fallback where backend data is missing.
- Avoid breaking existing service contracts.

## Build constraints
- ESLint must pass without parsing errors.
- Vite build must complete successfully.
