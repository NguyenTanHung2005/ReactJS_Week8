import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { chefifyAssets, getFoodImageByIndex } from '../../assets/chefifyAssets'
import CampusMapCard from '../../components/ui/CampusMapCard'
import EntertainmentPanel from '../../components/ui/EntertainmentPanel'

export default function HomePage(){
  const [showTour, setShowTour] = useState(() => localStorage.getItem('chefify-tour-dismissed') !== '1')
  const [tourStep, setTourStep] = useState(0)
  const [notice, setNotice] = useState('')
  const [savedCards, setSavedCards] = useState([])

  const tourSlides = useMemo(() => [
    {
      title: 'Discover Chefify',
      text: 'Easy and delicious cooking instructions right here. Start exploring now.',
      image: chefifyAssets.hero.cover,
    },
    {
      title: 'Search and Filter',
      text: 'Find recipes by type, time and rating to cook faster.',
      image: getFoodImageByIndex(3),
    },
    {
      title: 'Save to Recipe Box',
      text: 'Collect favorite dishes and revisit them anytime.',
      image: getFoodImageByIndex(5),
    },
  ], [])

  function closeTour() {
    localStorage.setItem('chefify-tour-dismissed', '1')
    setShowTour(false)
  }

  function nextTourStep() {
    if (tourStep >= tourSlides.length - 1) {
      closeTour()
      setNotice('Welcome! Your onboarding tour is completed.')
      return
    }
    setTourStep((prev) => prev + 1)
  }

  function toggleSavedCard(cardId) {
    setSavedCards((prev) => {
      if (prev.includes(cardId)) {
        setNotice(`Removed Featured Dish ${cardId} from your Recipe Box.`)
        return prev.filter((item) => item !== cardId)
      }

      setNotice(`Saved Featured Dish ${cardId} to your Recipe Box.`)
      return [...prev, cardId]
    })
  }

  return (
    <div>
      {showTour && (
        <div className="chefify-overlay">
          <div className="card border-0 shadow-lg mx-3" style={{ maxWidth: '760px', width: '100%' }}>
            <div className="card-body p-4 p-lg-5 text-center">
              <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-light" onClick={closeTour}>X</button>
              </div>
              <h2 className="fw-bold" style={{ color: 'var(--chefify-primary)' }}>{tourSlides[tourStep].title}</h2>
              <p className="text-muted mb-3">{tourSlides[tourStep].text}</p>
              <img src={tourSlides[tourStep].image} alt={tourSlides[tourStep].title} className="img-fluid rounded-3 mb-3" />
              <div className="mb-3">
                {tourSlides.map((_, index) => (
                  <span key={index} className={`chefify-dot ${index === tourStep ? 'active' : ''}`}></span>
                ))}
              </div>
              <button className="btn btn-chefify px-5" onClick={nextTourStep}>Next</button>
              <div className="mt-2">
                <button className="btn btn-link text-muted" onClick={closeTour}>Skip</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {notice && <div className="alert alert-success">{notice}</div>}

      <section
        className="p-4 p-lg-5 text-center text-lg-start"
        style={{
          backgroundImage: `url(${chefifyAssets.hero.cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          minHeight: '420px',
        }}
      >
        <div className="row h-100 align-items-center">
          <div className="col-lg-6">
            <div className="card p-4 border-0 shadow" style={{ maxWidth: '320px' }}>
              <span className="badge text-bg-warning mb-3 align-self-start">Recipe of the day</span>
              <h5 className="fw-bold">Salad Caprese</h5>
              <p className="small mb-3">Classic Italian salad with fresh tomatoes, mozzarella and basil.</p>
              <Link to="/foods/1" className="btn btn-chefify btn-sm">View now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
          <h2 className="text-center fw-bold mb-2" style={{ color: 'var(--chefify-primary)' }}>This Summer Recipes</h2>
          <p className="text-center text-muted mb-4">We have all your independence day sweets covered.</p>
          <div className="row g-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card h-100 chefify-card-spotlight">
                  <img
                    src={getFoodImageByIndex(i - 1)}
                    className="card-img-top"
                    alt={`Dish ${i}`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mb-1">Featured Dish {i}</h6>
                    <p className="text-muted small mb-0">32 minutes</p>
                    <div className="d-flex gap-2 mt-3">
                      <Link to={`/foods/${i}`} className="btn btn-chefify btn-sm">View</Link>
                      <button
                        type="button"
                        className={`btn btn-sm ${savedCards.includes(i) ? 'btn-chefify' : 'btn-chefify-outline'}`}
                        onClick={() => toggleSavedCard(i)}
                      >
                        {savedCards.includes(i) ? 'Saved' : 'Save'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>

      <section className="py-4">
        <h2 className="text-center fw-bold mb-2" style={{ color: 'var(--chefify-primary)' }}>Recipes With Videos</h2>
        <p className="text-center text-muted mb-4">Cooking up culinary creations with step-by-step videos.</p>
        <div className="row g-4">
          {[5, 6, 7, 8].map((i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src={getFoodImageByIndex(i)} className="card-img-top" alt={`Video recipe ${i}`} />
                <div className="card-body">
                  <h6 className="card-title mb-1">Video recipe {i}</h6>
                  <p className="text-muted small mb-0">25 minutes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 pb-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: 'var(--chefify-primary)' }}>Editors pick</h2>
        <div className="row g-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="card h-100 p-2">
                <div className="d-flex gap-2 align-items-center">
                  <img src={getFoodImageByIndex(i)} alt={`Pick ${i}`} style={{ width: '88px', height: '88px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div>
                    <h6 className="mb-1">Pick #{i + 1}</h6>
                    <p className="small text-muted mb-0">A handpicked recipe by Chefify editors.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/subscriptions" className="btn btn-chefify btn-lg">Subscribe now</Link>
        </div>
      </section>

      <CampusMapCard />

      <EntertainmentPanel />
    </div>
  )
}
