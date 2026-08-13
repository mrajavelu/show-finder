import React from 'react';
import logo from '/src/assets/images/showFinder.png';
import { useState } from 'react';
import { searchMovies } from '../../services/omdb';
import { useNavigate } from 'react-router-dom';
function Navbar({onSearch}) {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSearch = async (e) => {
        console.log("Handling your search ...")
        console.log(searchTerm);
        e.preventDefault();
        if (onSearch){
            onSearch(searchTerm);
        }
    }
    const handleClick = () => {
        navigate("/favorites")
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
        <a className="fav-btn" onClick={handleClick} >Favorites</a>
    </div>
  )
}
export default Navbar;