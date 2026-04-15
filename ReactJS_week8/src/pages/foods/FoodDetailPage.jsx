import React from 'react'
import { useParams } from 'react-router-dom'

export default function FoodDetailPage(){
  const { id } = useParams()
  return (
    <div>
      <h2>Food detail {id}</h2>
      <p>Details about food {id}.</p>
    </div>
  )
}
