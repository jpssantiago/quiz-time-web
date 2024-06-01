import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "./pages/home-page"
import { QuizPage } from "./pages/quiz-page"
import { CreatorPage } from "./pages/creator-page"

import "./global.css"

export function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/creator/:id" element={<CreatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}