import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CheckoutPage(){
  const navigate = useNavigate()
  function handlePay(){
    alert('Payment simulated (demo)')
    navigate('/orders')
  }
  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handlePay}>Pay (simulate)</button>
    </div>
  )
}
