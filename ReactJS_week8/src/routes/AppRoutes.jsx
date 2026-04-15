import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ProtectedRoute from '../components/guards/ProtectedRoute'
import RoleGuard from '../components/guards/RoleGuard'
import OrderAccessGuard from '../components/guards/OrderAccessGuard'
import MainLayout from '../components/layouts/MainLayout'
import AuthLayout from '../components/layouts/AuthLayout'
import AdminLayout from '../components/layouts/AdminLayout'
import { useAuth } from '../hooks/useAuth'
import { configureHttpClient } from '../services/httpClient'

const HomePage = lazy(() => import('../pages/home/HomePage'))
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const FoodListPage = lazy(() => import('../pages/foods/FoodListPage'))
const FoodDetailPage = lazy(() => import('../pages/foods/FoodDetailPage'))
const FoodFormPage = lazy(() => import('../pages/foods/FoodFormPage'))
const CartPage = lazy(() => import('../pages/cart/CartPage'))
const CheckoutPage = lazy(() => import('../pages/cart/CheckoutPage'))
const OrdersPage = lazy(() => import('../pages/orders/OrdersPage'))
const OrderDetailPage = lazy(() => import('../pages/orders/OrderDetailPage'))
const UserManagementPage = lazy(() => import('../pages/admin/UserManagementPage'))
const FoodManagementPage = lazy(() => import('../pages/admin/FoodManagementPage'))
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage'))
const NotificationsPage = lazy(() => import('../pages/notifications/NotificationsPage'))
const SubscriptionPage = lazy(() => import('../pages/subscriptions/SubscriptionPage'))
const UserProfilePage = lazy(() => import('../pages/users/UserProfilePage'))
const SiteMapPage = lazy(() => import('../pages/SiteMapPage'))
const UnauthorizedPage = lazy(() => import('../pages/UnauthorizedPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function HttpInterceptorBridge() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    configureHttpClient({
      getTokenFn: () => token,
      onUnauthorized: () => {
        logout()
        if (!location.pathname.startsWith('/auth/')) {
          navigate('/auth/login', { replace: true })
        }
      },
    })
  }, [token, logout, navigate, location.pathname])

  return null
}

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <HttpInterceptorBridge />
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage/>} />

            <Route path='foods'>
              <Route index element={<FoodListPage />} />
              <Route path='new' element={
                <ProtectedRoute>
                  <RoleGuard requiredRole='ADMIN'>
                    <FoodFormPage />
                  </RoleGuard>
                </ProtectedRoute>
              } />
              <Route path=':id' element={<FoodDetailPage />} />
              <Route path=':id/edit' element={
                <ProtectedRoute>
                  <RoleGuard requiredRole='ADMIN'>
                    <FoodFormPage edit />
                  </RoleGuard>
                </ProtectedRoute>
              } />
            </Route>

            <Route path='cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path='checkout' element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path='subscriptions' element={<SubscriptionPage />} />
            <Route path='sitemap' element={<SiteMapPage />} />
            <Route path='profile' element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} />
            <Route path='orders' element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
            <Route path='orders/:id' element={
              <ProtectedRoute>
                <OrderAccessGuard>
                  <OrderDetailPage />
                </OrderAccessGuard>
              </ProtectedRoute>
            } />
            <Route path='notifications' element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
          </Route>

          <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>

          <Route path='admin' element={
            <ProtectedRoute>
              <RoleGuard requiredRole='ADMIN'>
                <AdminLayout />
              </RoleGuard>
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboardPage />} />
            <Route path='users' element={<UserManagementPage />} />
            <Route path='foods' element={<FoodManagementPage />} />
          </Route>

          <Route path='403' element={<UnauthorizedPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
