import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CheckoutPage(){
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function handlePay(){
    setLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Payment processed successfully!')
      navigate('/orders')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h1 className="fw-bold mb-4">Checkout</h1>

        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title fw-bold mb-3">Billing Address</h5>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Street Address" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="ZIP Code" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title fw-bold mb-3">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>$0</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>$0</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold h5">
              <span>Total:</span>
              <span style={{ color: 'var(--chefify-primary)' }}>$0</span>
            </div>
          </div>
        </div>

        <button
          className="btn btn-chefify btn-lg w-100"
          onClick={handlePay}
          disabled={loading}
        >
          {loading ? 'Processing Payment...' : 'Complete Payment'}
        </button>
      </div>
    </div>
  )
}
