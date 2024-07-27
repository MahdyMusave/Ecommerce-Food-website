import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProviderWithNavigate from "./auth/AuthPrividerWithNavigate"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWithNavigate>
          <AppRoutes />
      </AuthProviderWithNavigate>
       
    </Router>
   
  </React.StrictMode>,
)
