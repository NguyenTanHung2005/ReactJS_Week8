import React from 'react'
import { Link } from 'react-router-dom'

export default function OrdersPage(){
  // demo: static list
  const orders = [{ id: 101, status: 'CREATED' }, { id: 102, status: 'PAID' }]
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}><Link to={`/orders/${o.id}`}>Order #{o.id} - {o.status}</Link></li>
        ))}
      </ul>
    </div>
  )
}
