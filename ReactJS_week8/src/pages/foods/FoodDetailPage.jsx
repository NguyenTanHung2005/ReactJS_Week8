import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFoodById } from '../../services/foodApi'
import { getFoodImageByIndex } from '../../assets/chefifyAssets'

export default function FoodDetailPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [food, setFood] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [cookingNote, setCookingNote] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let active = true

    async function loadFood() {
      try {
        const data = await getFoodById(id)
        if (active) {
          setFood(data)
        }
      } catch {
        if (active) {
          setErrorMessage('Food not found or unavailable.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadFood()
    return () => {
      active = false
    }
  }, [id])

  return (
    <div className="row g-4">
      <div className="col-lg-8">
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

        {notice && <div className="alert alert-success">{notice}</div>}

        {!loading && food && (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h1 className="fw-bold mb-3">How to make {food.name}</h1>
              <p className="text-muted">A detailed step-by-step recipe with practical tips for better results.</p>
              <img src={getFoodImageByIndex(Number(food.id) || 0)} className="img-fluid rounded-3 mb-4" alt={food.name} />

              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="mb-4">
                  <h5 className="fw-bold">Step {step}</h5>
                  <p className="text-muted mb-2">Prepare ingredients and follow the recommended technique for this stage.</p>
                  <img src={getFoodImageByIndex(step + 1)} className="img-fluid rounded-3" alt={`Step ${step}`} />
                </div>
              ))}

              <div className="mb-3">
                <label className="form-label fw-bold">Cooking note</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={cookingNote}
                  onChange={(e) => setCookingNote(e.target.value)}
                  placeholder="Write your note for this recipe"
                />
              </div>

              <button
                className="btn btn-chefify"
                onClick={() => setNotice('Cooking note saved successfully.')}
              >
                Save note
              </button>

              <hr className="my-4" />
              <h5 className="fw-bold mb-3">Comments</h5>
              <div className="d-flex gap-2 mb-3">
                <img src={getFoodImageByIndex(7)} alt="Reviewer" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p className="fw-bold mb-0">Martha Stewart</p>
                  <p className="text-muted small mb-0">Superb! The flavor and texture are excellent.</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <img src={getFoodImageByIndex(6)} alt="Reviewer" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p className="fw-bold mb-0">Savethi</p>
                  <p className="text-muted small mb-0">Easy to follow and works great for beginners.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <aside className="col-lg-4">
        <div className="card p-3">
          <h5 className="fw-bold">Recently viewed</h5>
          {[0, 1, 2].map((item) => (
            <div key={item} className="d-flex gap-2 align-items-center mb-2">
              <img src={getFoodImageByIndex(item)} alt={`Recent ${item}`} style={{ width: '64px', height: '52px', objectFit: 'cover', borderRadius: '8px' }} />
              <div>
                <p className="mb-0 small fw-bold">Recipe #{item + 1}</p>
                <p className="mb-0 small text-muted">32 minutes</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
