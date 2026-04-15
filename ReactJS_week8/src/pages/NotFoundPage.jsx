import React from 'react'
import { Link } from 'react-router-dom'
import { chefifyAssets } from '../assets/chefifyAssets'

export default function NotFoundPage(){
  return (
    <div className="container py-5 text-center">
      <img src={chefifyAssets.icons.emptyState} alt="Not found" style={{ width: '180px', maxWidth: '100%' }} className="mb-4" />
      <h1 className="fw-bold mb-3">404 - Page Not Found</h1>
      <p className="text-muted mb-4">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-chefify">Back to Home</Link>
    </div>
  )
}
