import React from 'react';

const IMG_PATH = process.env.REACT_APP_IMG_PATH;

const MovieCard = ({ movie, getColor }) => (
  <div className="w-76 m-3 relative shadow-lg overflow-hidden" key={movie.id}>
    <div className="w-[300px]">
      <img
        className="w-full h-full object-cover"
        src={IMG_PATH + movie.poster_path}
        alt={movie.title}
      />
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

export default MovieCard;
