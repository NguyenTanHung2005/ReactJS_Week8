# Plan7 System Constraints

## Compatibility constraints
- Keep current auth/routing guards unchanged.
- Keep existing API service contracts intact.

## UX constraints
- Support responsive layout for map and entertainment modules.
- Preserve accessibility: focus-visible styles and reduced-motion support.

## External API constraints
- Use public APIs without secret key where possible.
- Implement fallback content on API error.

## Quality constraints
- Lint must pass.
- Build must pass.
