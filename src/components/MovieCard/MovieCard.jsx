import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(movie.imdbID);

  const handleFavorite = (e) => {
    e.preventDefault();
    // Fixed: The correct method is e.stopPropagation(), not e.preventPropagation()
    e.stopPropagation();

    if (isFav) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };
  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  return (
    <div className="movie-card" onClick={handleCardClick}>
      <figure className="movie-poster" style={{ position: "relative" }}>
        <img src={movie.Poster} alt={movie.name} loading="lazy"></img>
        <button
          onClick={handleFavorite}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            borderRadius: "50%",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Fixed: isFavorite is a function, so it's always true. Use the isFav boolean you defined above instead! */}
          {isFav ? (
            <FaHeart color="red" size={20} /> // Filled Heart
          ) : (
            <FaRegHeart color="white" size={20} /> // Outline Heart
          )}
        </button>
      </figure>
      <div className="movie-content">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-details">
          <span>{movie.Year}</span> • <span>PG-13</span>
        </p>
        <p className="movie-rating">{movie.imdbRating}</p>
        {/* Fixed: e.stopPropagation() is the correct method name to stop events from bubbling up. */}
        <button className="btn-details" onClick={(e) => e.stopPropagation()}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
