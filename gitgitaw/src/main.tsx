import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AppLayout from './Components/layout/AppLayout'
import HomePage from './app/home/page'
import GetStarted from './app/gettingStarted/getStarted'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lessons/getting-started" element={<GetStarted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)