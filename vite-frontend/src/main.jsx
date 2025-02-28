import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoutesApp from './routeapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesApp></RoutesApp>
  </StrictMode>,
)
