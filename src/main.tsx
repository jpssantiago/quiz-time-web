import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalRouter } from './global-router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalRouter />
  </React.StrictMode>,
)