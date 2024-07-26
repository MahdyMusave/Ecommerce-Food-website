import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthPrivierWithNavigate from './components/auth/AuthPrividerWithNavigate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthPrivierWithNavigate>
        <AppRoutes />
      </AuthPrivierWithNavigate>
       
    </Router>
   
  </React.StrictMode>,
)
