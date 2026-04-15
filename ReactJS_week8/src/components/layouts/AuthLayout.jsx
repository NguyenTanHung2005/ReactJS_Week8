import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { chefifyAssets } from '../../assets/chefifyAssets'

export default function AuthLayout(){
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 24, 40, 0.55), rgba(16, 24, 40, 0.55)), url(${chefifyAssets.hero.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="card border-0"
        style={{
          maxWidth: '980px',
          width: '100%',
          boxShadow: '0 24px 50px rgba(0, 0, 0, 0.24)',
          overflow: 'hidden',
        }}
      >
        <div className="row g-0">
          <div className="col-lg-5 d-none d-lg-flex text-white p-4 align-items-end" style={{ backgroundImage: `url(${chefifyAssets.foods.detailFallback})`, backgroundSize: 'cover', minHeight: '520px' }}>
            <div className="bg-dark bg-opacity-50 rounded-3 p-3">
              <h3 className="text-white mb-2">Embrace the art of cooking</h3>
              <p className="text-white mb-0">Explore recipes, save favorites and build your own recipe box.</p>
            </div>
          </div>

          <div className="col-lg-7 p-4 p-lg-5 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
                <img src={chefifyAssets.logos.primaryPink} alt="Chefify" style={{ height: '28px' }} />
                <span className="fw-bold" style={{ color: 'var(--chefify-primary)' }}>Chefify</span>
              </Link>
              <Link to="/" className="text-muted text-decoration-none">Close</Link>
            </div>

            <Outlet />

            <div className="text-center mt-4 text-muted small">
              <p className="mb-0">
                By continuing, you agree to the updated Terms of Sale, Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
