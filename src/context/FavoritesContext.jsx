import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

// Custom Hook

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const Items = localStorage.getItem("favorites") || "[]";
    const storedFavorites = JSON.parse(Items);
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Why I haven't used same movie Object here??
  const removeFavorite = (imdbID) => {
    const newFavorites = favorites.filter((movie) => movie.imdbID != imdbID);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID == imdbID);
  };

  const value = {
    removeFavorite,
    favorites,
    addFavorite,
    isFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};