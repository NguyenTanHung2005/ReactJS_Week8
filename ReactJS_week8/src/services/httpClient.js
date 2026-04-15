import axios from 'axios'

const httpClient = axios.create({
  timeout: 10000,
})

let getToken = () => null
let handleUnauthorized = () => {}

export function configureHttpClient({ getTokenFn, onUnauthorized } = {}) {
  if (typeof getTokenFn === 'function') {
    getToken = getTokenFn
  }

  if (typeof onUnauthorized === 'function') {
    handleUnauthorized = onUnauthorized
  }
}

httpClient.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      handleUnauthorized()
    }

    return Promise.reject(error)
  },
)

export default httpClient