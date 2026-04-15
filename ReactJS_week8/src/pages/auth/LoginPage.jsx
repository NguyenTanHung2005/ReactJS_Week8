import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { login as loginApi } from '../../services/authApi'

export default function LoginPage(){
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [socialLoading, setSocialLoading] = useState('')
  const [socialNotice, setSocialNotice] = useState('')

  async function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const data = await loginApi({ email, password })
      login(data.token, data.user)
      const from = location.state?.from?.pathname || '/'
      navigate(from, { replace: true })
    } catch {
      setErrorMessage('Login failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  function handleSocialLogin(provider) {
    setErrorMessage('')
    setSocialNotice('')
    setSocialLoading(provider)

    window.setTimeout(() => {
      setSocialLoading('')
      setSocialNotice(`${provider} login interaction completed. OAuth integration endpoint is ready for backend hookup.`)
    }, 1000)
  }

  return (
    <div>
      <h2 className="fw-bold mb-2">Login</h2>
      <p className="text-muted mb-4">Enter your email to log in.</p>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      {socialNotice && (
        <div className="alert alert-info" role="status">
          {socialNotice}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-600">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-600">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-chefify w-100 py-2 fw-600">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="text-center mt-3">
        <p className="text-muted mb-0">
          Dont have an account? <Link to="/auth/register" className="text-decoration-none fw-600">Sign up</Link>
        </p>
      </div>

      <div className="text-center my-3 text-muted small">OR</div>

      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-light border"
          disabled={Boolean(socialLoading)}
          onClick={() => handleSocialLogin('Google')}
        >
          {socialLoading === 'Google' ? 'Connecting Google...' : 'Continue with Google'}
        </button>
        <button
          type="button"
          className="btn btn-light border"
          disabled={Boolean(socialLoading)}
          onClick={() => handleSocialLogin('Facebook')}
        >
          {socialLoading === 'Facebook' ? 'Connecting Facebook...' : 'Continue with Facebook'}
        </button>
        <button
          type="button"
          className="btn btn-light border"
          disabled={Boolean(socialLoading)}
          onClick={() => handleSocialLogin('Apple')}
        >
          {socialLoading === 'Apple' ? 'Connecting Apple...' : 'Continue with Apple'}
        </button>
      </div>
    </div>
  )
}
