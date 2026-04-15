import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodManagementPage(){
  const foods = [
    { id: 1, name: 'Salad Caprese', description: 'Tomato, mozzarella, basil and olive oil.', category: 'Italian', status: 'Published' },
    { id: 2, name: 'Lotus Delight Salad', description: 'Lotus root, carrot, herbs and sweet dressing.', category: 'Asian', status: 'Draft' },
    { id: 3, name: 'Cucumber Cherry Mix', description: 'Cucumber slices with cherry tomato and lemon.', category: 'Healthy', status: 'Published' },
  ]

  return (
    <div className="admin-dashboard-surface">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1">Food Management</h2>
          <p className="text-muted mb-0">Curate the recipe catalog, maintain publishing quality, and track content readiness.</p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <input className="form-control form-control-sm" style={{ minWidth: '220px' }} placeholder="Search recipe or category" />
          <button className="btn btn-chefify-outline btn-sm">Bulk action</button>
          <Link to="/foods/new" className="btn btn-chefify btn-sm">
            Add New Food
          </Link>
        </div>
      </div>

      {foods.length === 0 ? (
        <div className="alert alert-info">No foods found. Start adding some!</div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="card-body border-bottom py-3">
            <h5 className="fw-bold mb-1">Recipe inventory</h5>
            <p className="small text-muted mb-0">Monitor recipe metadata, publication state, and editorial tasks from one dashboard table.</p>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0 admin-report-table align-middle">
              <thead>
                <tr>
                  <th><input type="checkbox" aria-label="Select all foods" /></th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food) => (
                  <tr key={food.id}>
                    <td><input type="checkbox" aria-label={`Select ${food.name}`} /></td>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                    <td>{food.category}</td>
                    <td>
                      <span className={`badge rounded-pill ${food.status === 'Published' ? 'admin-status-completed' : 'admin-status-progress'}`}>
                        {food.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/foods/${food.id}/edit`} className="btn btn-sm btn-chefify-outline me-2">
                        Edit
                      </Link>
                      <button className="btn btn-sm btn-chefify">Preview</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-body border-top d-flex justify-content-between align-items-center py-3">
            <span className="small text-muted">Showing 3 recipes</span>
            <span className="small text-muted">Synced with dashboard visual system</span>
          </div>
        </div>
      )}
    </div>
  )
}
