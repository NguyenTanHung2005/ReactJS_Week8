import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function RegisterPage(){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleRegister(e){
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      // TODO: Integrate with register API
      console.log('Register:', formData)
      navigate('/auth/login')
    } catch {
      setErrorMessage('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="fw-bold mb-4 text-center">Create Your Account</h2>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-600">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-600">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-600">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-chefify w-100 py-2 fw-600">
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <div className="text-center mt-3">
        <p className="text-muted mb-0">
          Already have an account? <Link to="/auth/login" className="text-decoration-none fw-600">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
