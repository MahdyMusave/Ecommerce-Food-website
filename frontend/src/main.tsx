import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider  
      domain="dev-kdaoivfy6gu38qvr.us.auth0.com"
      clientId="Q3K51g57zu4CiEFgm74w6Oy50rYJ0u9j"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      
      >
 
          <AppRoutes />
      </Auth0Provider>
       
    </Router>
   
  </React.StrictMode>,
)
