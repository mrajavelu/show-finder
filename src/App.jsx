import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import Favorites from './components/Favorites/Favorites'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  return (
   <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/movie/:id" element={<MovieDetails/>} />
            <Route path = "/favorites" element= {<Favorites/>}></Route>
          </Routes>
        </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
