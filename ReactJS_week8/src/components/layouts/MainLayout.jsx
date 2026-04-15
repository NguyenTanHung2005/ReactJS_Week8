import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { chefifyAssets } from '../../assets/chefifyAssets'

export default function MainLayout(){
  const { user, logout } = useAuth()
  const location = useLocation()

  function handleLogout() {
    logout()
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="navbar navbar-expand-lg bg-white border-bottom" style={{ borderBottomColor: 'var(--chefify-border)' }}>
        <div className="container-xl">
          <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/" style={{ color: 'var(--chefify-primary)' }}>
            <img src={chefifyAssets.logos.primaryPink} alt="Chefify" style={{ height: '24px', width: 'auto' }} />
            <span className="h6 mb-0">Chefify</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex me-lg-3 my-2 my-lg-0" role="search">
              <input
                className="form-control form-control-sm"
                type="search"
                placeholder="What would you like to cook?"
                aria-label="Search recipes"
                style={{ minWidth: '260px' }}
              />
            </form>

            <ul className="navbar-nav me-auto small">
              <li className="nav-item">
                <Link className="nav-link" to="/foods">
                  What to cook
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">
                  Ingredients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">
                  Occasions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              {user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/orders">
                      Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/notifications">
                      Notifications
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  {user.role === 'ADMIN' && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  )}
                </>
              )}
            </ul>

            <div className="ms-lg-3 d-flex gap-2 align-items-center">
              {user ? (
                <>
                  <Link to="/notifications" className="btn btn-sm btn-chefify-outline">
                    Your Recipe Box
                  </Link>
                  <Link to="/profile" title="Open profile">
                    <img
                      src={chefifyAssets.profile.avatar}
                      alt={user.name}
                      style={{ width: '34px', height: '34px', borderRadius: '50%' }}
                    />
                  </Link>
                  <button
                    className="btn btn-sm btn-chefify"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/auth/login" className="btn btn-sm btn-chefify-outline">Login</Link>
                  <Link to="/subscriptions" className="btn btn-sm btn-chefify">Subscribe</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow-1">
        <div className="container-xl py-4">
          <div key={location.pathname} className="chefify-page-transition">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="mt-auto text-white" style={{ backgroundColor: 'var(--chefify-dark)' }}>
        <div className="container-xl py-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <p>Welcome to Chefify, a wonderful place to explore and learn how to cook like a pro.</p>
              <div className="d-flex gap-2">
                <input type="email" className="form-control form-control-sm bg-white" placeholder="Enter your email" />
                <button className="btn btn-chefify btn-sm">Send</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Learn More</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Our Cooks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    See Our Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Recipes</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    What to Cook This Week
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Pasta
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Dinner
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Healthy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Vegan
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="bg-white-50 my-4" />

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 text-white-50 small">
            <div className="d-flex align-items-center gap-2">
              <img src={chefifyAssets.logos.primaryWhite} alt="Chefify" style={{ height: '24px' }} />
              <span>© 2026 Chefify Company</span>
            </div>
            <span>
              <Link to="/sitemap" className="text-white-50 text-decoration-none">Site map</Link>
              {' | '}Terms of Service | Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
