import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from "react-cookie"

import { GlobalRouter } from './global-router.tsx'
import { QuizProvider } from "./hooks/quiz-context.tsx"
import { CreatorProvider } from "./hooks/creator-context.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <QuizProvider>
        <CreatorProvider>
          <GlobalRouter />
        </CreatorProvider>
      </QuizProvider>
    </CookiesProvider>
  </React.StrictMode>,
)