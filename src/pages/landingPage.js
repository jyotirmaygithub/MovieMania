import React, { useEffect, useState } from 'react';
import Logo from '../components/header/logo';
import Search from '../components/header/search';
import MovieCard from '../layout/movieCard';

const API_URL = process.env.REACT_APP_API_URL;
const SEARCH_API = process.env.REACT_APP_SEARCH_API;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  const fetchMovies = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("movie data = ", data)
    setMovies(data.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    } else {
      window.location.reload();
    }
  };

  const getColor = (vote) => {
    if (vote >= 8) {
      return 'text-yellow-color';
    } else if (vote >= 5.5) {
      return 'text-green-color';
    } else {
      return 'text-red-color';
    }
  };

  return (
    <>
      <header className="flex justify-between items-center bg-bg-color h-12vh px-5 text-white font-lilita">
        <Logo />
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </header>
      <main className="flex flex-wrap px-12 py-4 bg-bg2-color">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} getColor={getColor}/>
        ))}
      </main>
    </>
  );
}

export default App;
