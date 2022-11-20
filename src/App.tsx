import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import { AppProvider } from './utils/store/store'
import { AllCats, LikedCats } from './pages/index'
import { Layout } from './components/index'

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<AllCats />} />
            <Route path='/liked' element={<LikedCats />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App