import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "./pages/home-page"
import { QuizPage } from "./pages/quiz-page"

import "./global.css"

export function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/creator/:id" element={<h1>You are on the creator mode</h1>} />
      </Routes>
    </BrowserRouter>
  )
}