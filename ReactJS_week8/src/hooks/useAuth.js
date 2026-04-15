import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // load from sessionStorage for demo
    const t = sessionStorage.getItem('token')
    const u = sessionStorage.getItem('user')
    if(t) setToken(t)
    if(u) setUser(JSON.parse(u))
  }, [])

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

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth(){
  return useContext(AuthContext)
}
