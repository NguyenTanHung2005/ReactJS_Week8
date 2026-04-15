import React, { useState } from 'react'
import { chefifyAssets } from '../../assets/chefifyAssets'

const benefits = [
  '20,000+ recipes to suit all tastes and skill levels',
  'Filter for diets, cook times, and more',
  'Personal Recipe Box for favorites',
  'Gain exclusive access to members-only mobile app',
]

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState('2M')
  const [notice, setNotice] = useState('')

  const priceText = billingCycle === '2M' ? '0.25 USD / Week' : '0.20 USD / Week'

  return (
    <div className="row g-4">
      <div className="col-lg-6">
        <p className="small text-muted">Recipes &gt; Subscribe</p>
        <h5 className="fw-bold">This recipe is exclusively available to subscribers</h5>
        <h1 className="h2 fw-bold" style={{ color: 'var(--chefify-primary)' }}>
          Join now to access effortless, hassle-free recipes
        </h1>

        <ul className="list-unstyled mt-4 mb-4">
          {benefits.map((item) => (
            <li key={item} className="mb-2">• {item}</li>
          ))}
        </ul>

        <p className="h4 fw-bold mb-1">{priceText}</p>
        <p className="text-muted">Billed as selected below</p>

        <div className="d-flex flex-column gap-2 mb-4">
          <label className="border rounded-3 p-2 d-flex gap-2 align-items-center">
            <input type="radio" checked={billingCycle === '2M'} onChange={() => setBillingCycle('2M')} />
            2 Months (Billed every 4 weeks)
          </label>
          <label className="border rounded-3 p-2 d-flex gap-2 align-items-center">
            <input type="radio" checked={billingCycle === '12M'} onChange={() => setBillingCycle('12M')} />
            12 Months (Billed once annually)
          </label>
        </div>

        <button
          className="btn btn-chefify px-5"
          onClick={() => setNotice('Subscription request submitted. You will receive a confirmation email shortly.')}
        >
          Subscribe Now
        </button>
        <div className="mt-2 text-muted small">Cancel or pause anytime</div>

        {notice && <div className="alert alert-success mt-3">{notice}</div>}
      </div>

      <div className="col-lg-6">
        <img src={chefifyAssets.hero.cover} alt="Subscription" className="img-fluid rounded-4 shadow-sm" />

        <div className="mt-4">
          <h2 className="h4 fw-bold text-center" style={{ color: 'var(--chefify-primary)' }}>
            An All Access subscription includes
          </h2>
          <div className="row g-3 mt-2">
            {['Cooking', 'Wirecutter', 'Games', 'The Athletic'].map((name) => (
              <div key={name} className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <h6 className="fw-bold">{name}</h6>
                  <p className="small text-muted mb-0">Premium content for subscribers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
