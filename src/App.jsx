import React from "react"
import { NavFooter } from "./layouts/NavFooter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./views/Home"

function App() {

  return (
    <>
      <h1>
        <Router>
          <Routes>
            <Route path="/" element={<NavFooter />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </h1>
    </>
  )
}

export default App
