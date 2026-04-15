import React from 'react'
import { Link } from 'react-router-dom'

export default function CartPage(){
  const cartItems = [] // TODO: Integrate with cart state/API

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h1 className="fw-bold mb-4">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <p className="lead text-muted mb-4">Your cart is empty</p>
            <Link to="/foods" className="btn btn-chefify btn-lg">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="card">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button className="btn btn-sm btn-danger">Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 text-end">
              <div className="mb-3">
                <p className="h5">
                  Total: <span style={{ color: 'var(--chefify-primary)' }} className="fw-bold">$0</span>
                </p>
              </div>
              <Link to="/checkout" className="btn btn-chefify btn-lg">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
