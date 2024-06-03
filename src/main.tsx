import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from "react-cookie"

import { GlobalRouter } from './global-router.tsx'
import { QuizProvider } from "./hooks/quiz-context.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <QuizProvider>
        <GlobalRouter />
      </QuizProvider>
    </CookiesProvider>
  </React.StrictMode>,
)