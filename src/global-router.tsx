import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./global.css"

export function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
      </Routes>
    </BrowserRouter>
  )
}