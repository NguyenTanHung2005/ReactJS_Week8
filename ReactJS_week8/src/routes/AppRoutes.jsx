import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const HomePage = lazy(() => import('../pages/home/HomePage'))

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
