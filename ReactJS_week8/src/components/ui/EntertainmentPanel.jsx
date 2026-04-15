import React, { useEffect, useState } from 'react'
import { getDailyAdvice, getRandomJoke } from '../../services/entertainmentApi'

export default function EntertainmentPanel() {
  const [loading, setLoading] = useState(false)
  const [joke, setJoke] = useState(null)
  const [advice, setAdvice] = useState(null)

  async function loadEntertainment() {
    setLoading(true)
    try {
      const [jokeData, adviceData] = await Promise.all([
        getRandomJoke(),
        getDailyAdvice(),
      ])
      setJoke(jokeData)
      setAdvice(adviceData)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEntertainment()
  }, [])

  return (
    <section className="py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: 'var(--chefify-primary)' }}>Fun Kitchen Corner</h2>
          <p className="text-muted mb-0">Fresh content from public APIs to keep cooking sessions lively.</p>
        </div>
        <button className="btn btn-chefify-outline" onClick={loadEntertainment} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh fun'}
        </button>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card h-100 p-3 chefify-glass-card">
            <p className="small text-uppercase text-muted mb-1">{joke?.source || 'Loading source...'}</p>
            <h5 className="fw-bold mb-2">{joke?.title || 'Loading joke...'}</h5>
            <p className="mb-0">{joke?.content || 'Please wait while we load a fun joke for you.'}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 p-3 chefify-glass-card">
            <p className="small text-uppercase text-muted mb-1">{advice?.source || 'Loading source...'}</p>
            <h5 className="fw-bold mb-2">{advice?.title || 'Loading advice...'}</h5>
            <p className="mb-0">{advice?.content || 'Please wait while we load cooking advice for you.'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
