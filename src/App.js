import React, { useState, useEffect } from 'react';

import MovieCard from './Card';
import SearchIcon from './search.svg';
import './App.css';

<<<<<<< HEAD
const API_URL = process.env.REACT_APP_NOW;
=======
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=55f6214a';
>>>>>>> 2da1224c94f7c934c7fb95e6ad2837e8275a2614

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Bang Bang Show</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
