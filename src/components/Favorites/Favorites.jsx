import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Favorites() {
  const { favorites } = useFavorites();
  console.log(localStorage.getItem("favorites"));
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="favorites-page">
          <div className="section-title">
            <h2>My Favorite Movies</h2>
          </div>
          {favorites.length === 0 ? (
            <div className="no-results">
              You haven't added any favorites yet. Start Exploring!
            </div>
          ) : (
            <div className="movie-grid-container">
              {favorites.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
