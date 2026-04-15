import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { chefifyAssets } from '../../assets/chefifyAssets'

export default function UserProfilePage() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="card p-4">
        <h1 className="h4 fw-bold mb-2">User Profile</h1>
        <p className="text-muted mb-3">Please login to view your profile information.</p>
        <Link to="/auth/login" className="btn btn-chefify w-auto">Go to login</Link>
      </div>
    )
  }

  return (
    <section className="row g-4">
      <div className="col-lg-4">
        <div className="card p-4 h-100">
          <div className="text-center">
            <img
              src={chefifyAssets.profile.avatar}
              alt={user.name || 'User avatar'}
              style={{ width: '96px', height: '96px', borderRadius: '50%' }}
            />
            <h2 className="h4 mt-3 mb-1">{user.name || 'Chefify User'}</h2>
            <p className="text-muted mb-2">{user.email || 'No email available'}</p>
            <span className="badge text-bg-light border">Role: {user.role || 'USER'}</span>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card p-4 mb-4">
          <h3 className="h5 fw-bold mb-3">Account information</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label small fw-bold">Full name</label>
              <input className="form-control" value={user.name || ''} readOnly />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold">Email</label>
              <input className="form-control" value={user.email || ''} readOnly />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold">Role</label>
              <input className="form-control" value={user.role || 'USER'} readOnly />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold">Status</label>
              <input className="form-control" value="Active" readOnly />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <h3 className="h5 fw-bold mb-3">Quick actions</h3>
          <div className="d-flex gap-2 flex-wrap">
            <Link to="/orders" className="btn btn-chefify">View orders</Link>
            <Link to="/notifications" className="btn btn-chefify-outline">View notifications</Link>
            <Link to="/foods" className="btn btn-chefify-outline">Explore recipes</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
