const API_KEY = "c3ecd12b"; // Your OMDB API key
const BASE_URL = "https://www.omdbapi.com/"; // Base URL for all API calls

const formatSearchTerm = (query) => {
  if (!query) return "";

  // Trim whitespace
  let formatted = query.trim();

  // Replace multiple spaces with single space
  formatted = formatted.replace(/\s+/g, " ");

  // Remove special characters (optional - OMDb might handle them)
  // But keeping it simple for OMDb
  // formatted = formatted.replace(/[^a-zA-Z0-9\s]/g, '');

  // URL encode for safe API calls
  formatted = encodeURIComponent(formatted);

  return formatted;
};
const DEFAULT_MOVIES = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "The Matrix",
  "Pulp Fiction",
  "The Shawshank Redemption",
];

export const getDefaultMovies = async () => {
  try {
    console.log("Entered getDefaultMovies");
    const moviePromises = DEFAULT_MOVIES.map((movieTitle) =>
      fetch(`${BASE_URL}?t=${movieTitle}&apikey=${API_KEY}`).then((res) =>
        res.json(),
      ),
    );
    const movies = await Promise.all(moviePromises);
    console.log(movies);
    // $$$$$$$$$$$  Filter out movies where Response is not 'True' (failed requests) $$$$$$$$$$$$$
    return movies.filter((movie) => movie.Response === "True");
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const searchMovies = async (searchTerm) => {
    console.log(searchTerm)
  try {
    if (!searchTerm.trim()) {
      return [];
    }
    const formattedQuery = formatSearchTerm(searchTerm);
    const response = await fetch(
      `${BASE_URL}?s=${formattedQuery}&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      console.log(data.Search);
      return data.Search;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const searchMoviesById = async (searchTerm) => {
    console.log(searchTerm)
  try {
    if (!searchTerm) {
      return [];
    }
    // const formattedQuery = formatSearchTerm(searchTerm);
    const response = await fetch(
      `${BASE_URL}?i=${searchTerm}&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      console.log(data);
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
