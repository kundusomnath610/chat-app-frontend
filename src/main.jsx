import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Route>
        <Route path= "/ " 
          element={<App />}
        />
      </Route>

      <Route>
        <Route path= "/chat" 
          element={<h1> This is good page </h1>}
        />
      </Route>


    </BrowserRouter>
   
  </StrictMode>,
)
