import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const menuItems = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/users', label: 'User management' },
  { to: '/admin/foods', label: 'Food management' },
]

export default function AdminLayout(){
  return (
    <div className="admin-shell d-flex">
      <aside className="admin-sidebar p-3 p-lg-4">
        <div className="d-flex align-items-center gap-2 mb-4">
          <span className="admin-logo-mark" aria-hidden="true"></span>
          <h3 className="h6 fw-bold mb-0 text-dark">Logo</h3>
        </div>

        <nav className="d-flex flex-column gap-1 mb-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/admin'}
              className={({ isActive }) => `admin-menu-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-promo-card mt-auto">
          <p className="fw-semibold mb-1">V2.0 is available</p>
          <p className="small text-muted mb-2">
            Upgrade dashboard modules to unlock deeper analytics and quicker reporting workflows.
          </p>
          <button type="button" className="btn btn-chefify btn-sm w-100">Try now</button>
        </div>
      </aside>

      <main className="flex-grow-1 p-3 p-lg-4 admin-main-content">
        <Outlet />
      </main>
    </div>
  )
}
