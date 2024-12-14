import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
// import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Auth0Provider
    domain="dev-ayhqugvs12u1m0zk.us.auth0.com"
    clientId="vRzeO0zPo42AgS6BtQT8W6w6lPLEyrun"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </Auth0Provider> */}
    </StrictMode>
  
)
