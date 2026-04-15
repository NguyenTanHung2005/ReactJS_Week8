import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOrderById } from '../../services/orderApi'

export default function OrderDetailPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let active = true

    async function loadOrder() {
      try {
        const data = await getOrderById(id)
        if (active) {
          setOrder(data)
        }
      } catch {
        if (active) {
          setErrorMessage('Order not found or unavailable.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadOrder()
    return () => {
      active = false
    }
  }, [id])

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
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <button className="btn btn-sm btn-light mb-3" onClick={() => navigate(-1)}>
          ← Back
        </button>

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

        {!loading && order && (
          <div className="card">
            <div className="card-body">
              <h2 className="card-title fw-bold mb-4">Order #{id}</h2>

              <div className="row mb-4">
                <div className="col-md-6">
                  <p className="text-muted">Status</p>
                  <p>
                    <span className={`badge ${getStatusBadgeClass(order.status)} text-white fs-6`}>
                      {order.status}
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted">Total Amount</p>
                  <p className="h5 fw-bold">\${order.total ?? 0}</p>
                </div>
              </div>

              <hr />

              <h5 className="fw-bold mb-3">Order Summary</h5>
              <p className="text-muted">Order placed at: {new Date().toLocaleDateString()}</p>

              <div className="mt-4">
                <button className="btn btn-chefify">Track Order</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
