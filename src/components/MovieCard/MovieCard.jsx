import React from 'react'
import {useNavigate} from 'react-router-dom'
function MovieCard({movie}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movie`)
    }
  return (
        <div className="movie-card" onClick={handleClick}>
        <figure className="movie-poster">
            <img src={movie.Poster  } alt={movie.name} loading="lazy">
            </img>
        </figure>
        <div className="movie-content">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-details"><span>{movie.Year}</span> • <span>PG-13</span></p>
            <p className="movie-rating">{movie.imdbRating}</p>
            <button className="btn-details">View Details</button>
        </div>
        </div>
  )
}

export default MovieCard;
