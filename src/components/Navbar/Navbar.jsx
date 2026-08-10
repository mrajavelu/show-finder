import React from 'react';
import logo from '/src/assets/images/showFinder.png';
import './Navbar.css';
import { useState } from 'react';
import { searchMovies } from '../../services/omdb';
function Navbar({onSearch}) {

    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = async (e) => {
        console.log("Handling your search ...")
        console.log(searchTerm);
        e.preventDefault();
        if (onSearch){
            onSearch(searchTerm);
        }
    }

  return (
    <div className="NavContainer">
        <div className="navbar-logo">
            <a href="/">
                <img style={{ height: '40px', width: 'auto' }} src={logo} alt="ShowFinder Logo" />
            </a>
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder='Search By Movie Name ' 
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type= "submit" className="search-btn"> </button>
        </form>
        <a className="fav-btn" href="#favorites">Favorites</a>
    </div>
  )
}
export default Navbar;