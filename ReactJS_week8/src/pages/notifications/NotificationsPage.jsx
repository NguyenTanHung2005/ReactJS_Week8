import React from 'react'
import { chefifyAssets, getFoodImageByIndex } from '../../assets/chefifyAssets'
import { Link } from 'react-router-dom'

const recipeCollection = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Recipe ${index + 1}`,
  minutes: `${20 + index} minutes`,
}))

export default function NotificationsPage(){
  const [saved, setSaved] = React.useState(() => new Set([1, 2, 3]))
  const [notice, setNotice] = React.useState('')

  function toggleSave(id) {
    setSaved((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        setNotice(`Recipe ${id} removed from your recipe box.`)
      } else {
        next.add(id)
        setNotice(`Recipe ${id} saved to your recipe box.`)
      }
      return next
    })
  }

  return (
    <div>
      <p className="small text-muted mb-3">Home &gt; Your Recipe Box</p>

      <h1 className="fw-bold mb-4">Emma Gonzalezs Recipe Box</h1>

      <div className="card border-0 shadow-sm p-3 mb-4">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
          <img src={chefifyAssets.profile.avatar} alt="Profile" style={{ width: '96px', height: '96px', borderRadius: '50%' }} />
          <div className="flex-grow-1">
            <p className="mb-2">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor to the Los Angeles Times.
            </p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <span className="badge text-bg-light border">6.5k Subscribers</span>
              <button className="btn btn-chefify btn-sm">Share</button>
            </div>
          </div>
          <Link to="/subscriptions" className="btn btn-chefify-outline btn-sm">Subscribe</Link>
        </div>
      </div>

      {notice && <div className="alert alert-info">{notice}</div>}

      <div className="row g-4">
        {recipeCollection.map((recipe, index) => (
          <div key={recipe.id} className="col-sm-6 col-lg-3">
            <div className="card h-100">
              <img src={getFoodImageByIndex(index)} alt={recipe.title} className="card-img-top" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <h6 className="fw-bold mb-1">{recipe.title}</h6>
                  <button
                    className={`btn btn-sm ${saved.has(recipe.id) ? 'btn-chefify' : 'btn-chefify-outline'}`}
                    onClick={() => toggleSave(recipe.id)}
                  >
                    {saved.has(recipe.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
                <p className="small text-muted mb-0">{recipe.minutes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-4">
        <ul className="pagination pagination-sm justify-content-end">
          <li className="page-item active"><span className="page-link">1</span></li>
          <li className="page-item"><span className="page-link">2</span></li>
          <li className="page-item"><span className="page-link">3</span></li>
          <li className="page-item"><span className="page-link">4</span></li>
        </ul>
      </nav>
    </div>
  )
}
