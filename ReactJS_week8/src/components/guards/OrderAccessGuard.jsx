import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import LoadingSpinner from '../ui/LoadingSpinner'
import { getOrderById } from '../../services/orderApi'

export default function OrderAccessGuard({ children }) {
  const { id } = useParams()
  const { user } = useAuth()
  const [accessState, setAccessState] = useState('checking')

  useEffect(() => {
    let active = true

    async function checkAccess() {
      if (!user) {
        if (active) setAccessState('denied')
        return
      }

      if (user.role === 'ADMIN') {
        if (active) setAccessState('allowed')
        return
      }

      try {
        const order = await getOrderById(id)
        const ownerId = order?.userId ?? order?.customerId ?? order?.user?.id
        if (active) {
          setAccessState(String(ownerId) === String(user.id) ? 'allowed' : 'denied')
        }
      } catch {
        if (active) setAccessState('denied')
      }
    }

    checkAccess()
    return () => {
      active = false
    }
  }, [id, user])

  if (accessState === 'checking') return <LoadingSpinner />
  if (accessState === 'denied') return <Navigate to="/403" replace />

  return children
}
