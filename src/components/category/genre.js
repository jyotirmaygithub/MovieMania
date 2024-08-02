import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, useRef } from "react";

// Example genre list with IDs (replace with your actual genre data)
const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 878, name: "Sci-Fi" }
];

const MovieGenresBox = ({ applyFilters }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [releaseYearRange, setReleaseYearRange] = useState({ min: '', max: '' });
  const [ratingRange, setRatingRange] = useState({ min: '', max: '' });
  const boxRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const handleGenreChange = (genreId) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genreId)
        ? prevGenres.filter((id) => id !== genreId)
        : [...prevGenres, genreId]
    );
  };

  const handleApplyFilters = () => {
    applyFilters({
      genres: selectedGenres,
      releaseYearRange,
      ratingRange,
    });
    setIsVisible(false);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <button
        onClick={toggleVisibility}
        className="bg-black text-white p-2 mb-2 border border-white flex justify-center items-center gap-4"
      >
        <p>Filters</p>
        <ChevronDownIcon className="h-4" />
      </button>
      {isVisible && (
        <div
          ref={boxRef}
          className="bg-black text-white p-4 border border-white absolute z-10 shadow-lg"
        >
          <div className="mb-4">
            <h4 className="text-lg mb-2">Genres</h4>
            <ul className="list-none flex flex-wrap space-x-2">
              {GENRES.map(({ id, name }) => (
                <li key={id}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={id}
                      onChange={() => handleGenreChange(id)}
                      checked={selectedGenres.includes(id)}
                      className="form-checkbox"
                    />
                    <span>{name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">Release Year Range</h4>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={releaseYearRange.min}
                onChange={(e) => setReleaseYearRange({ ...releaseYearRange, min: e.target.value })}
                className="bg-gray-700 text-white p-1 flex-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={releaseYearRange.max}
                onChange={(e) => setReleaseYearRange({ ...releaseYearRange, max: e.target.value })}
                className="bg-gray-700 text-white p-1 flex-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">Rating Range</h4>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={ratingRange.min}
                onChange={(e) => setRatingRange({ ...ratingRange, min: e.target.value })}
                className="bg-gray-700 text-white p-1 flex-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={ratingRange.max}
                onChange={(e) => setRatingRange({ ...ratingRange, max: e.target.value })}
                className="bg-gray-700 text-white p-1 flex-1"
              />
            </div>
          </div>
          <button
            onClick={handleApplyFilters}
            className="bg-green-600 text-white p-2 border border-white"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGenresBox;
