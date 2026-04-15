import axios from 'axios'

const base = import.meta.env.VITE_USER_SERVICE_URL || 'http://localhost:8082'
export async function login(credentials){
  // demo fallback
  if(!base.includes('localhost')){
    const res = await axios.post(`${base}/api/auth/login`, credentials)
    return res.data
  }
  return { token: 'demo-token', user: { id: 1, name: 'Demo User', role: 'USER' } }
}
