import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "./pages/home-page"

import "./global.css"

export function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}