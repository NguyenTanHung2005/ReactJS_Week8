import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createFood, getFoodById, updateFood } from '../../services/foodApi'

export default function FoodFormPage({ edit }){
  const navigate = useNavigate()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!edit) return
    let active = true

    async function loadFood() {
      try {
        const data = await getFoodById(id)
        if (active) {
          setName(data.name || '')
          setDescription(data.description || '')
        }
      } catch {
        if (active) {
          setErrorMessage('Unable to load food data for editing.')
        }
      }
    }

    loadFood()
    return () => {
      active = false
    }
  }, [edit, id])

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const payload = { name, description }
      if (edit) {
        await updateFood(id, payload)
      } else {
        await createFood(payload)
      }
      navigate('/foods')
    } catch {
      setErrorMessage('Save failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <h2 className="fw-bold mb-4">{edit ? 'Edit Food' : 'Create New Food'}</h2>
        {edit && <p className="text-muted">Editing item #{id}</p>}

        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-600">Food Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-600">Description</label>
            <textarea
              id="description"
              className="form-control"
              placeholder="Enter food description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="d-flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-chefify flex-grow-1"
            >
              {loading ? 'Saving...' : 'Save Food'}
            </button>
            <button
              type="button"
              className="btn btn-chefify-outline"
              onClick={() => navigate('/foods')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
