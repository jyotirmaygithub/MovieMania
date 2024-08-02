import React, { useState, useEffect } from 'react';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

const IMG_PATH = process.env.REACT_APP_IMG_PATH;

const MovieCard = ({ movie, getColor }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(storedFavorites.some(m => m.id === movie.id));
  }, [movie.id]);

  const saveToFavorites = () => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!storedFavorites.some(m => m.id === movie.id)) {
      storedFavorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(true);
    } else {
      storedFavorites = storedFavorites.filter(m => m.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(false);
    }
  };

  return (
    <div className="w-76 m-3 relative shadow-lg overflow-hidden" key={movie.id}>
      <div className="relative w-[300px]">
        <img
          className="w-full h-full object-cover"
          src={IMG_PATH + movie.poster_path}
          alt={movie.title}
        />
        <button
          className="absolute top-2 right-2 text-2xl"
          onClick={saveToFavorites}
        >
          {isFavorite ? (
            <SolidHeartIcon className="w-8 h-8 text-red-500" />
          ) : (
            <OutlineHeartIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
      <div className="flex flex-col justify-between h-24 p-4 bg-bg-color text-white font-titillium">
        <h3 className="truncate w-60">{movie.title}</h3>
        <p className={getColor(movie.vote_average)}>{movie.vote_average}</p>
        <p className="text-sm">{new Date(movie.release_date).toLocaleDateString()}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white transform translate-y-full transition-transform duration-700 ease-in p-8 text-sm font-titillium">
        <h3 className={`font-lilita ${getColor(movie.vote_average)}`}>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
