import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function FoodFormPage({ edit }){
  const navigate = useNavigate()
  const { id } = useParams()

  function handleSubmit(e){
    e.preventDefault()
    // Demo: just navigate back
    navigate('/foods')
  }

  return (
    <div>
      <h2>{edit ? 'Edit Food' : 'Create Food'}</h2>
      {edit && <p>Editing item #{id}</p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required />
        <textarea placeholder="Description" />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
