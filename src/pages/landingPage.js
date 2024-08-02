import React, { useEffect, useState, useRef, useCallback } from 'react';
import Logo from '../components/header/logo';
import Search from '../components/header/search';
import MovieCard from '../layout/movieCard';
import Genre from "../components/category/genre";
import Loading from '../components/loader/loading';

const API_URL = process.env.REACT_APP_API_URL;
const SEARCH_API = process.env.REACT_APP_SEARCH_API;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const loader = useRef(null);

  useEffect(() => {
    handleSearch(); // Fetch movies whenever searchTerm or selectedGenres change
  }, [searchTerm, selectedGenres]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(); // Fetch additional movies when page changes
    }
  }, [page]);

  const fetchMovies = async () => {
    setIsLoading(true);
    const genreFilter = selectedGenres.length > 0 ? `&with_genres=${selectedGenres.join(',')}` : '';
    console.log("sleected =",selectedGenres)
    const searchURL = searchTerm ? `${SEARCH_API}${searchTerm}&page=${page}` : `${API_URL}&page=${page}`;
    const URL = `${searchURL}${genreFilter}`;
    
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setMovies([]); // Clear previous movies
    setPage(1); // Reset page to 1
    fetchMovies(); // Fetch initial set of movies
  };

  const getColor = (vote) => {
    if (vote >= 8) {
      return 'text-yellow-500'; // Tailwind color class
    } else if (vote >= 5.5) {
      return 'text-green-500'; // Tailwind color class
    } else {
      return 'text-red-500'; // Tailwind color class
    }
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isLoading]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => observer.disconnect(); // Clean up observer on unmount
  }, [handleObserver]);

  const applyFilters = (filters) => {
    setSelectedGenres(filters.genres);
  };

  return (
    <>
      <header className="flex flex-wrap justify-between items-center bg-bg-color py-4 px-4 md:py-5 md:px-6 text-white font-lilita">
        <Logo />
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </header>
      <main className="flex flex-wrap px-4 py-4 md:px-8 md:py-6 bg-bg2-color">
        <Genre applyFilters={applyFilters} />
        <div className="flex flex-wrap gap-4 w-full">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} getColor={getColor} />
          ))}
          {isLoading && <Loading />}
        </div>
      </main>
      <div ref={loader} className="py-4" />
    </>
  );
}

export default App;
