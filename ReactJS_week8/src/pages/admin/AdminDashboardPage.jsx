import React from 'react'

const summaryCards = [
  {
    title: 'Turnover',
    value: '$92,405',
    hint: '5.39% period of change',
    icon: '🛒',
    tone: 'admin-tone-pink',
  },
  {
    title: 'Profit',
    value: '$32,218',
    hint: '6.39% period of change',
    icon: '💵',
    tone: 'admin-tone-blue',
  },
  {
    title: 'New customer',
    value: '298',
    hint: '6.84% period of change',
    icon: '👥',
    tone: 'admin-tone-green',
  },
]

const reportRows = [
  { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
  { name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
  { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In progress' },
  { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In progress' },
  { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2025', status: 'Completed' },
  { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2025', status: 'Completed' },
]

function getStatusClass(status) {
  if (status === 'Completed') return 'admin-status-completed'
  if (status === 'In progress') return 'admin-status-progress'
  return 'admin-status-new'
}

export default function AdminDashboardPage(){
  return (
    <div className="admin-dashboard-surface">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <p className="small text-uppercase fw-semibold text-muted mb-1">Dashboard</p>
          <h1 className="h4 fw-bold mb-1">Overview</h1>
          <p className="text-muted mb-0">
            Welcome back. Here is your operational summary, detailed report, and team performance snapshot.
          </p>
        </div>

        <div className="d-flex align-items-center gap-2 flex-wrap">
          <input
            type="search"
            className="form-control form-control-sm"
            style={{ minWidth: '220px' }}
            placeholder="Search customer, company..."
          />
          <button type="button" className="btn btn-chefify-outline btn-sm">Import</button>
          <button type="button" className="btn btn-chefify btn-sm">Export</button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {summaryCards.map((item) => (
          <div key={item.title} className="col-sm-6 col-lg-4">
            <div className={`card h-100 border-0 shadow-sm admin-kpi-card ${item.tone}`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <p className="text-muted small mb-0 fw-semibold">{item.title}</p>
                  <span className="admin-kpi-icon" aria-hidden="true">{item.icon}</span>
                </div>
                <p className="h3 fw-bold mb-1 text-dark">{item.value}</p>
                <p className="small mb-0" style={{ color: '#0f9d58' }}>▲ {item.hint}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom flex-wrap gap-2">
            <div>
              <h5 className="fw-bold mb-1">Detailed report</h5>
              <p className="text-muted small mb-0">
                Track customer orders, processing status, and export snapshots for stakeholder review.
              </p>
            </div>
            <div className="small text-muted">63 results</div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 admin-report-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" aria-label="Select all" />
                  </th>
                  <th>Customer name</th>
                  <th>Company</th>
                  <th>Order value</th>
                  <th>Order date</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {reportRows.map((row) => (
                  <tr key={`${row.name}-${row.date}`}>
                    <td>
                      <input type="checkbox" aria-label={`Select ${row.name}`} />
                    </td>
                    <td className="fw-semibold">{row.name}</td>
                    <td>{row.company}</td>
                    <td>{row.value}</td>
                    <td>{row.date}</td>
                    <td>
                      <span className={`badge rounded-pill ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="text-end text-muted">⋯</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center p-3 border-top flex-wrap gap-2">
            <p className="small text-muted mb-0">Showing 1-6 of 63 entries</p>
            <div className="d-flex align-items-center gap-2 small">
              <span className="text-muted">Prev</span>
              <span className="admin-page-pill active">1</span>
              <span className="admin-page-pill">2</span>
              <span className="admin-page-pill">3</span>
              <span className="text-muted">Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
