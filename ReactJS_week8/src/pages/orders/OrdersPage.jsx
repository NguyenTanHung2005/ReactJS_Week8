import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { getOrders } from '../../services/orderApi'

export default function OrdersPage(){
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let active = true

    async function loadOrders() {
      try {
        const data = await getOrders(user)
        if (active) {
          setOrders(data)
        }
      } catch {
        if (active) {
          setErrorMessage('Unable to load your orders.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadOrders()
    return () => {
      active = false
    }
  }, [user])

  function getStatusBadgeClass(status) {
    switch (status) {
      case 'CREATED':
        return 'bg-warning'
      case 'PAID':
        return 'bg-success'
      case 'SHIPPED':
        return 'bg-info'
      case 'COMPLETED':
        return 'bg-success'
      default:
        return 'bg-secondary'
    }
  }

  return (
    <div>
      <h1 className="fw-bold mb-4">Your Orders</h1>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      {!loading && orders.length === 0 && !errorMessage && (
        <div className="alert alert-info">No orders yet. Start shopping now!</div>
      )}

      {!loading && orders.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(o.status)} text-white`}>
                      {o.status}
                    </span>
                  </td>
                  <td>${o.total || 0}</td>
                  <td>
                    <Link to={`/orders/${o.id}`} className="btn btn-sm btn-chefify">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
