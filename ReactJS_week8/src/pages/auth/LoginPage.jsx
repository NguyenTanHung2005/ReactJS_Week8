import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function LoginPage(){
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  function handleLogin(e){
    e.preventDefault()
    // demo: fake token and user
    const token = 'demo-token'
    const user = { id: 1, name: 'Demo User', role: 'USER' }
    login(token, user)
    const from = location.state?.from?.pathname || '/'
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}
