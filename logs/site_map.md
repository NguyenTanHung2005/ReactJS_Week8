# Site Map

Generated on: 2026-04-15
Source: ReactJS_week8/src/routes/AppRoutes.jsx

## Public routes
- /
- /foods
- /foods/:id
- /subscriptions
- /auth/login
- /auth/register
- /403
- /* (NotFound)

## Protected routes (requires login)
- /profile
- /cart
- /checkout
- /orders
- /orders/:id
- /notifications

## Protected + role-based routes (ADMIN)
- /foods/new
- /foods/:id/edit
- /admin
- /admin/users
- /admin/foods

## Notes
- XML sitemap for crawlers is available at public/sitemap.xml.
- robots.txt includes sitemap pointer.
- Protected routes are documented here for system map completeness but excluded from XML SEO sitemap.
