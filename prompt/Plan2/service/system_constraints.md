# System Constraints & API mapping — Plan2 P201

## Kiến trúc
- Service-Based Architecture (Spring Boot services), giao tiếp qua REST.
- Services & base paths (suggested):
  - food-service    → /api/foods
  - user-service    → /api/auth, /api/users
  - order-service   → /api/orders
  - payment-service → /api/payments
  - notify-service  → /api/notifications
  - (optional) api-gateway → /api/*

## Auth
- JWT Bearer tokens do user-service phát hành (POST /api/auth/login).
- Roles: USER, ADMIN (role trong claim).
- Frontend gửi Authorization header.

## Dev ports (gợi ý)
- Frontend: 3000
- API Gateway: 8080
- food-service: 8081
- user-service: 8082
- order-service: 8083
- payment-service: 8084
- notify-service: 8085

## API minimal mapping
- Food:
  - GET /api/foods
  - GET /api/foods/{id}
  - POST /api/foods
  - PUT /api/foods/{id}
  - DELETE /api/foods/{id}
- Auth/User:
  - POST /api/auth/register
  - POST /api/auth/login
  - GET /api/users (admin)
  - GET /api/users/me (profile info for logged-in user)
- Orders:
  - POST /api/orders
  - GET /api/orders
  - GET /api/orders/{id}
  - PUT /api/orders/{id}/status
- Payments:
  - POST /api/payments/simulate
- Notifications:
  - POST /api/notifications/send

## Behavior / Integration notes
- On order created: order-service calls notify-service (or logs) to send notification.
- Payment is simulated; do not integrate real payment gateway for this iteration.
- Backend must validate roles and permissions regardless of frontend guards.
- Provide OpenAPI/Swagger contracts for frontend-backend alignment.
- CORS dev origin: http://localhost:3000
- 401 responses → frontend interceptor should redirect to /auth/login
