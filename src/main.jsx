import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider
    domain="dev-4udxiy41600cz3wr.us.auth0.com"
    clientId="RRtatuxEU7WJekqY7uTxo63cxXjxxQFN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
    </StrictMode>
  
)
