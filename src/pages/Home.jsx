import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import Footer from '../components/Footer/Footer'
import { getDefaultMovies } from '../services/omdb'
import { searchMovies } from '../services/omdb'
function Home() {
    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    useEffect(()=>{
        loadDefaultMovies();
    }, []);

    const loadDefaultMovies = async () => {
        setLoading(true);
        const defaultMovies = await getDefaultMovies();
        setMovies(defaultMovies);
        setLoading(false);
    }

    const handleSearch = async (query) => {
        console.log("Entered handle search on on home component")
        if (!query.trim()){
            await loadDefaultMovies();
            return
        }
        setLoading(true);
        setSearchQuery(query)
        const searchResult = await searchMovies(query);
        setMovies(searchResult);
        setLoading(false);
    }

    return (
        <div className="app-container">
        <Navbar onSearch={handleSearch}/>
              <div className="main-content">
            {/* Show loading text while fetching */}
            {loading ? (
            <div className="loading">Loading movies...</div>
            ) : (
            <>
                {/* Show "Popular Movies" heading only when NOT searching and movies exist */}
                {!loading && movies.length > 0 && (
                <div className="section-title">
                    <h2>
                        {searchQuery ? `Result for Your search: ${searchQuery}` : `Popular Movies`}
                    </h2>
                </div>
                )}
                {/* Display movie grid with current movies (default or search results) */}
                <MovieGrid movies={movies} />
                
                {/* Show message if no movies found */}
                {movies.length === 0 && !loading && (
                <div className="no-results">
                    {
                        searchQuery
                        ? `We couldn't find what you are searching for ${searchQuery}` :
                        `Something wrong on my side please wait for sometime ...`
                    }
                </div>
                )}
            </>
            )}
        </div>
        <Footer />
        </div>
        
    )
}

export default Home;