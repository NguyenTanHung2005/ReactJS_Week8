# Plan3 System Constraints

## Routing constraints
- Keep BrowserRouter and existing guard layers unchanged.
- /admin must support index child route for dashboard summary.

## Asset constraints
- Use module imports from src/assets instead of raw absolute public paths when possible.
- Keep image bundles reasonable by reusing shared assets.

## Security constraints
- Existing 401 interceptor behavior must remain active.
- Do not bypass ProtectedRoute or RoleGuard.

## UX constraints
- Maintain Bootstrap5 responsive behavior.
- Preserve Chefify color tokens defined in index.css.

## Build constraints
- ESLint must pass with zero parsing errors.
- Vite production build must complete successfully.
