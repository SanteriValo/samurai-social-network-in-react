import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import state from './redux/state.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App state={state} />
  </StrictMode>,
)
