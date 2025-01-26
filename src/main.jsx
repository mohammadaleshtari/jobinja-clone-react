import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css"
import AppWrapper from './Pages/AppWrapper/AppWrapper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper/>
  </StrictMode>,
)
