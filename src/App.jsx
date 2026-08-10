import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
