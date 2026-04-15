import httpClient from './httpClient'

const base = import.meta.env.VITE_USER_SERVICE_URL || 'http://localhost:8082'

const mockUserByEmail = {
  'admin@chefify.local': { id: 99, name: 'Admin User', role: 'ADMIN' },
}

export async function login(credentials){
  try {
    const res = await httpClient.post(`${base}/api/auth/login`, credentials)
    return res.data
  } catch (error) {
    if (error?.response) {
      throw error
    }

    const email = credentials?.email?.toLowerCase() || ''
    const user = mockUserByEmail[email] || { id: 1, name: 'Demo User', role: 'USER' }
    return { token: 'demo-token', user }
  }
}

export async function register(payload) {
  const res = await httpClient.post(`${base}/api/auth/register`, payload)
  return res.data
}
