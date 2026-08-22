import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { getDefaultMovies } from '../../services/omdb';
function MovieGrid({movies}) {
//     const movie = [
//     {
//         id: 1,
//         title: "Batman Begins",
//         year: "2005",
//         poster: "...",
//         rating: "5 ★"
//     },
//     {
//         id:2,
//         title: "The Dark Knight",
//         year: "2008",
//         poster: "...",
//         rating: "5 ★"
//     },
//     {
//         id: 3,
//         title: "Inception",
//         year: "2010",
//         poster: "...",
//         rating: "5 ★"
//     },
//     {
//         id: 4,
//         title: "Interstellar",
//         year: "2014",
//         poster: "...",
//         rating: "5 ★"
//     },
//     {
//         id: 5,
//         title: "The Prestige",
//         year: "2006",
//         poster: "...",
//         rating: "4.8 ★"
//     },
//     {
//         id: 6,
//         title: "Avengers: Endgame",
//         year: "2019",
//         poster: "...",
//         rating: "4.7 ★"
//     },
//     {
//         id: 7,
//         title: "Spider-Man: No Way Home",
//         year: "2021",
//         poster: "...",
//         rating: "4.6 ★"
//     },
//     {
//         id: 8,
//         title: "Joker",
//         year: "2019",
//         poster: "...",
//         rating: "4.8 ★"
//     },
//     {
//         id: 9,
//         title: "Oppenheimer",
//         year: "2023",
//         poster: "...",
//         rating: "4.9 ★"
//     },
//     {
//         id: 10,
//         title: "Dune: Part Two",
//         year: "2024",
//         poster: "...",
//         rating: "4.8 ★"
//     }
// ];  
return (
    <div className='movie-grid-container'>  
      {
        movies.map((movie) =>
            <MovieCard key={`${movie.Title}-${movie.Year}`} movie={movie}/>
        )
      }
    </div>
  )
}

export default MovieGrid;