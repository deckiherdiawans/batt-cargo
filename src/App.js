import React from "react"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App