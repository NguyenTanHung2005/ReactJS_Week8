import React from 'react'
import { Link } from 'react-router-dom'

const publicRoutes = [
  { path: '/', label: 'Home' },
  { path: '/foods', label: 'Food list' },
  { path: '/subscriptions', label: 'Subscriptions' },
  { path: '/auth/login', label: 'Login' },
  { path: '/auth/register', label: 'Register' },
  { path: '/sitemap', label: 'Site map' },
]

const protectedRoutes = [
  { path: '/profile', label: 'User profile' },
  { path: '/cart', label: 'Cart' },
  { path: '/checkout', label: 'Checkout' },
  { path: '/orders', label: 'Orders' },
  { path: '/orders/:id', label: 'Order detail' },
  { path: '/notifications', label: 'Notifications' },
]

const adminRoutes = [
  { path: '/admin', label: 'Admin dashboard' },
  { path: '/admin/users', label: 'User management' },
  { path: '/admin/foods', label: 'Food management' },
  { path: '/foods/new', label: 'Create food' },
  { path: '/foods/:id/edit', label: 'Edit food' },
]

function RouteList({ title, items, mutedText }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 fw-bold mb-2">{title}</h2>
        <p className="small text-muted mb-3">{mutedText}</p>
        <ul className="list-group list-group-flush">
          {items.map((item) => (
            <li key={item.path} className="list-group-item px-0 d-flex justify-content-between align-items-center">
              <span>{item.label}</span>
              {item.path.includes(':') ? (
                <span className="badge text-bg-light border">{item.path}</span>
              ) : (
                <Link to={item.path} className="btn btn-chefify-outline btn-sm">Open</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SiteMapPage() {
  return (
    <div className="py-2">
      <div className="mb-4">
        <h1 className="fw-bold mb-1">Site Map</h1>
        <p className="text-muted mb-0">
          This page summarizes all public, protected, and admin routes available in the project.
        </p>
      </div>

      <div className="row g-3">
        <div className="col-lg-4">
          <RouteList
            title="Public routes"
            items={publicRoutes}
            mutedText="Accessible without login."
          />
        </div>

        <div className="col-lg-4">
          <RouteList
            title="Protected routes"
            items={protectedRoutes}
            mutedText="Require authenticated user session."
          />
        </div>

        <div className="col-lg-4">
          <RouteList
            title="Admin routes"
            items={adminRoutes}
            mutedText="Require ADMIN role with route guard."
          />
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body">
          <h2 className="h6 fw-bold">SEO and crawler map</h2>
          <p className="small text-muted mb-0">
            XML sitemap is available at /sitemap.xml and route summary for developers is recorded in logs/site_map.md.
          </p>
        </div>
      </div>
    </div>
  )
}
