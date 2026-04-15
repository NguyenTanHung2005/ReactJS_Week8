import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { getFoods } from '../../services/foodApi'
import { getFoodImageByIndex, chefifyAssets } from '../../assets/chefifyAssets'

export default function FoodListPage(){
  const { user } = useAuth()
  const [foods, setFoods] = useState([])
  const [visibleFoods, setVisibleFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [searchText, setSearchText] = useState('salad')
  const [activeType, setActiveType] = useState('Grilled')
  const [activeRating, setActiveRating] = useState(3)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let active = true

    async function loadFoods() {
      try {
        const data = await getFoods()
        if (active) {
          setFoods(data)
          setVisibleFoods(data)
        }
      } catch {
        if (active) {
          setErrorMessage('Unable to load foods at the moment.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadFoods()
    return () => {
      active = false
    }
  }, [])

  function applyFilters() {
    const filtered = foods.filter((food, index) => {
      const normalizedName = String(food.name || '').toLowerCase()
      const passSearch = !searchText || normalizedName.includes(searchText.toLowerCase())
      const mockType = index % 2 === 0 ? 'Grilled' : 'Roasted'
      const mockRating = (index % 5) + 1
      const passType = activeType ? mockType === activeType : true
      const passRating = mockRating >= activeRating
      return passSearch && passType && passRating
    })

    setVisibleFoods(filtered)
    setNotice(`Filter applied. ${filtered.length} recipe(s) found.`)
  }

  return (
    <div className="row g-4">
      <div className="col-lg-3">
        <div className="card p-3 sticky-top" style={{ top: '88px' }}>
          <h6 className="fw-bold mb-3">Filters</h6>

          <div className="mb-3">
            <label className="form-label small fw-bold">Search</label>
            <input
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search recipes"
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Type</label>
            <div className="d-flex flex-column gap-1">
              {['Grilled', 'Roasted'].map((type) => (
                <label key={type} className="small d-flex align-items-center gap-2">
                  <input type="radio" name="type" checked={activeType === type} onChange={() => setActiveType(type)} />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Rating (minimum)</label>
            <select className="form-select" value={activeRating} onChange={(e) => setActiveRating(Number(e.target.value))}>
              <option value={1}>1 star</option>
              <option value={2}>2 stars</option>
              <option value={3}>3 stars</option>
              <option value={4}>4 stars</option>
              <option value={5}>5 stars</option>
            </select>
          </div>

          <button className="btn btn-chefify w-100" onClick={applyFilters}>Apply</button>
        </div>
      </div>

      <div className="col-lg-9">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="mb-0">Salad ({visibleFoods.length || foods.length})</h1>
          {user?.role === 'ADMIN' && (
            <Link to="/foods/new" className="btn btn-chefify">
              Add New Food
            </Link>
          )}
        </div>

        {notice && <div className="alert alert-info">{notice}</div>}

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        {!loading && visibleFoods.length === 0 && !errorMessage && (
          <div className="text-center py-5">
            <img src={chefifyAssets.icons.emptyState} alt="No results" style={{ width: '170px' }} className="mb-3" />
            <h2 className="h3 fw-bold">Sorry, no results were found for "{searchText}"</h2>
            <p className="text-muted">Try changing your filters or search keywords.</p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <span className="badge text-bg-light border">Sweet Cake</span>
              <span className="badge text-bg-light border">Black Cake</span>
              <span className="badge text-bg-light border">Healthy food</span>
            </div>
          </div>
        )}

        {!loading && visibleFoods.length > 0 && (
          <div className="row g-4">
            {visibleFoods.map((f, index) => (
              <div key={f.id} className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <img
                    src={getFoodImageByIndex(Number(f.id) || index)}
                    className="card-img-top"
                    alt={f.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{f.name}</h5>
                    <p className="card-text text-muted">{f.description || 'No description available.'}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <p className="small text-muted mb-0">32 minutes</p>
                      <div className="d-flex gap-2">
                        <Link to={`/foods/${f.id}`} className="btn btn-chefify btn-sm">View</Link>
                        {user?.role === 'ADMIN' && (
                          <Link to={`/foods/${f.id}/edit`} className="btn btn-chefify-outline btn-sm">Edit</Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <nav className="mt-4">
          <ul className="pagination pagination-sm justify-content-end">
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>
            <li className="page-item"><span className="page-link">4</span></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
