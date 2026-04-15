import { useState, createContext, useContext, createElement } from 'react'

const AuthContext = createContext(null)

function readStoredUser() {
  const storedUser = sessionStorage.getItem('user')
  if (!storedUser) return null

  try {
    return JSON.parse(storedUser)
  } catch {
    return null
  }
}

export function AuthProvider({ children }){
  const [token, setToken] = useState(() => sessionStorage.getItem('token'))
  const [user, setUser] = useState(readStoredUser)

  function login(t, u){
    setToken(t)
    setUser(u)
    sessionStorage.setItem('token', t)
    sessionStorage.setItem('user', JSON.stringify(u))
  }
  function logout(){
    setToken(null)
    setUser(null)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }

  return createElement(
    AuthContext.Provider,
    { value: { token, user, login, logout } },
    children,
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
