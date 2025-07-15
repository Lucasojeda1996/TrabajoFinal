import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessagesContextProvider from './Context/MessagesContext.jsx'
import { BrowserRouter } from 'react-router'
import ContactContextProvider from './Context/ContactContext.jsx'
import ContactDetailContextProvider from './Context/ContactDetailContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactContextProvider>
      <MessagesContextProvider>
        <ContactDetailContextProvider>
          <App />
        </ContactDetailContextProvider>
      </MessagesContextProvider>
    </ContactContextProvider>
  </BrowserRouter>




)
