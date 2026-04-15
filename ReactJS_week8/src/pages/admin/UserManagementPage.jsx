import React from 'react'

export default function UserManagementPage(){
  const users = [
    { id: 1, name: 'Elizabeth Lee', email: 'elizabeth@avatarsystems.io', role: 'USER', status: 'Active' },
    { id: 2, name: 'Carlos Garcia', email: 'carlos@smoozeshift.com', role: 'USER', status: 'Active' },
    { id: 3, name: 'Ryan Brown', email: 'ryan@omnitech.org', role: 'ADMIN', status: 'Suspended' },
  ]

  return (
    <div className="admin-dashboard-surface">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1">User Management</h2>
          <p className="text-muted mb-0">Manage account lifecycle, role assignments, and customer support visibility.</p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <input className="form-control form-control-sm" style={{ minWidth: '220px' }} placeholder="Search user by name or email" />
          <button className="btn btn-chefify-outline btn-sm">Invite</button>
          <button className="btn btn-chefify btn-sm">Add New User</button>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="alert alert-info">No users found. Connect the user API to display real-time members and permission details.</div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="card-body border-bottom py-3">
            <h5 className="fw-bold mb-1">Team directory</h5>
            <p className="small text-muted mb-0">Review member permissions, account health, and direct actions in one place.</p>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0 admin-report-table align-middle">
              <thead>
                <tr>
                  <th><input type="checkbox" aria-label="Select all users" /></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td><input type="checkbox" aria-label={`Select ${user.name}`} /></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className="badge text-bg-light border">{user.role}</span>
                    </td>
                    <td>
                      <span className={`badge rounded-pill ${user.status === 'Active' ? 'admin-status-completed' : 'admin-status-progress'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-chefify-outline me-2">Edit</button>
                      <button className="btn btn-sm btn-chefify">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-body border-top d-flex justify-content-between align-items-center py-3">
            <span className="small text-muted">Showing 3 members</span>
            <span className="small text-muted">Synced with dashboard visual system</span>
          </div>
        </div>
      )}
    </div>
  )
}
