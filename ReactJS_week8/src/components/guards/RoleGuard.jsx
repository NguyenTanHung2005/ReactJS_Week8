import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function RoleGuard({ requiredRole, children }){
  const { user } = useAuth()
  if(!user || user.role !== requiredRole) return <Navigate to="/403" replace />
  return children
}
