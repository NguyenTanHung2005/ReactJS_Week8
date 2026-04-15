# P201 — Routing specification (Mini Food Ordering System)

## Tóm tắt
Framework đề xuất: React + React Router v6. Router: BrowserRouter. State: Context + useReducer (hoặc Redux khi cần). Auth: JWT (role claim).

## Route tree (key routes)
- /                      — Home (public)
- /auth
  - /auth/login          — Login (public)
  - /auth/register       — Register (public)
- /foods                 — Food list (public view, admin sees controls)
- /foods/new             — Create food (ADMIN only)
- /foods/:id             — Food detail (view)
- /foods/:id/edit        — Edit food (ADMIN only)
- /cart                  — Cart (USER)
- /checkout              — Checkout / Payment (USER)
- /orders                — Order history (USER)
- /orders/:id            — Order detail (USER or ADMIN per role)
- /admin                 — Admin dashboard (ADMIN)
  - /admin/users         — User management (ADMIN)
  - /admin/foods         — Food management (ADMIN)
- /notifications         — Notification center (protected)
- /403                   — Unauthorized
- /*                     — 404 Not Found

## Route protection & behavior
- ProtectedRoute: kiểm tra JWT tồn tại & hợp lệ → nếu không thì redirect → /auth/login.
- RoleGuard (inside ProtectedRoute): nếu role không phù hợp → redirect → /403 hoặc home.
- Data fetching: mỗi route gọi REST API của service tương ứng.
- Lazy-load: các route admin nên lazy-load để giảm bundle size.
- Error handling: ErrorBoundary cho route-level errors; interceptor 401 → logout + redirect to /auth/login.

## Component mapping (ví dụ)
- Pages/
  - HomePage
  - Auth/
    - LoginPage
    - RegisterPage
  - Foods/
    - FoodListPage
    - FoodDetailPage
    - FoodFormPage (create/edit, ADMIN)
  - Cart/
    - CartPage
    - CheckoutPage
  - Orders/
    - OrdersPage
    - OrderDetailPage
  - Admin/
    - AdminDashboard
    - UserManagementPage
    - FoodManagementPage
  - NotificationsPage
  - NotFoundPage
  - UnauthorizedPage

## Example React Router v6 snippet

// example only — place in AppRoutes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import RoleGuard from './components/RoleGuard'
// ...pages

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="foods">
          <Route index element={<FoodListPage />} />
          <Route path="new" element={
            <ProtectedRoute><RoleGuard role="ADMIN"><FoodFormPage/></RoleGuard></ProtectedRoute>
          } />
          <Route path=":id" element={<FoodDetailPage />} />
          <Route path=":id/edit" element={
            <ProtectedRoute><RoleGuard role="ADMIN"><FoodFormPage edit/></RoleGuard></ProtectedRoute>
          } />
        </Route>

        <Route path="cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>} />
        <Route path="checkout" element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>} />
        <Route path="orders" element={<ProtectedRoute><OrdersPage/></ProtectedRoute>} />
        <Route path="orders/:id" element={<ProtectedRoute><OrderDetailPage/></ProtectedRoute>} />

        <Route path="admin" element={<ProtectedRoute><RoleGuard role="ADMIN"><AdminDashboard/></RoleGuard></ProtectedRoute>}>
          <Route path="users" element={<UserManagementPage/>} />
          <Route path="foods" element={<FoodManagementPage/>} />
        </Route>

        <Route path="notifications" element={<ProtectedRoute><NotificationsPage/></ProtectedRoute>} />
        <Route path="403" element={<UnauthorizedPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

## Notes / Integration
- Frontend phải gửi Authorization: Bearer <token> cho các API cần auth.
- Thực hiện kiểm tra role cả frontend và backend.
- Sử dụng mock server (MSW) trong dev để phát triển UI độc lập.
