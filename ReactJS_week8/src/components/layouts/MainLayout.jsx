import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/foods">Foods</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Chefify demo footer</footer>
    </div>
  )
}
