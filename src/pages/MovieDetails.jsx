import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { searchMoviesById } from '../services/omdb';
import Navbar from '../components/Navbar/Navbar';
import './MovieDetails.css';

function MovieDetails() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(()=>{
    const fetchMovie = async () => {
      const result = await searchMoviesById(id);
      setMovie(result);
    }
    fetchMovie();
  },[id]);
  if (!movie) {
      return <div className="loading">Loading...</div>;
  }
    return (
    <>
      <Navbar />
      <div className="movie-details-container">
        {/* Back Button */}
      <div className="back-btn-container">
        <a href="/" className="back-btn">Back</a>
      </div>

      {/* Movie Card */}
      <div className="movie-detail-card">
        <div className="movie-detail-poster">
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-image.jpg"} 
            alt={movie.Title}
          />
        </div>
        
        <div className="movie-detail-info">
          <h1 className="movie-detail-title">{movie.Title}</h1>
          
          <div className="movie-detail-meta">
            <span>{movie.Year}</span>
            <span className="meta-separator">•</span>
            <span>{movie.Rated}</span>
            <span className="meta-separator">•</span>
            <span>{movie.Runtime}</span>
          </div>

          <div className="movie-detail-ratings">
            <span className="rating-score"> {movie.imdbRating} ⭐ </span>
            <span className="rating-votes">({movie.imdbVotes} votes)</span>
          </div>

          <div className="movie-detail-crew">
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
          </div>

          <div className="movie-detail-plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>

          <div className="movie-detail-extra">
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong>Country:</strong> {movie.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
          </div>

          <div className="movie-detail-imdb">
            <span>IMDb: </span>
            <a 
              href={`https://www.imdb.com/title/${movie.imdbID}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
export default MovieDetails;