import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FoodListPage(){
  const [foods, setFoods] = useState([])

  useEffect(() => {
    // demo: static seed
    setFoods([
      { id: 1, name: 'Lotus delight salad' },
      { id: 2, name: 'Italian-style tomato salad' },
      { id: 3, name: 'Sunny-side up fried eggs' }
    ])
  }, [])

  return (
    <div>
      <h2>Foods</h2>
      <Link to="/foods/new">Add new</Link>
      <ul>
        {foods.map(f => (
          <li key={f.id}><Link to={`/foods/${f.id}`}>{f.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}
