import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage(){
  const navigate = useNavigate()
  function handleRegister(e){
    e.preventDefault()
    // For demo, redirect to login
    navigate('/auth/login')
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
