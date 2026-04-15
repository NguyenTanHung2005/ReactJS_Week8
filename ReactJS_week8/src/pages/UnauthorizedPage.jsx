import React from 'react'
import { Link } from 'react-router-dom'
import { chefifyAssets } from '../assets/chefifyAssets'

export default function UnauthorizedPage(){
  return (
    <div className="container py-5 text-center">
      <img src={chefifyAssets.profile.avatar} alt="Unauthorized" style={{ width: '120px', borderRadius: '50%' }} className="mb-4" />
      <h1 className="fw-bold mb-3">403 - Unauthorized</h1>
      <p className="text-muted mb-4">You do not have permission to access this page.</p>
      <Link to="/" className="btn btn-chefify">Go to Home</Link>
    </div>
  )
}
