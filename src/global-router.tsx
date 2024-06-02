import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "./pages/home-page"
import { QuizPage } from "./pages/quiz-page"
import { CreatorPage } from "./pages/creator-page"
import { NotFoundPage } from "./pages/not-found-page"

import "./global.css"

export function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:pin" element={<QuizPage />} />
        <Route path="/creator/:pin" element={<CreatorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}