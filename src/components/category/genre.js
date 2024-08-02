import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, useRef } from "react";

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

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
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
       <p>Filters</p> <ChevronDownIcon className="h-4"/>
      </button>
      {isVisible && (
        <div
          ref={boxRef}
          className="bg-black text-white p-4 border border-white absolute z-10 shadow-lg"
        >
          <div className="mb-4">
            <h4 className="text-lg mb-2">Genres</h4>
            <ul className="list-none flex flex-wrap space-x-2">
              {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((genre) => (
                <li key={genre}>
                  <label>
                    <input
                      type="checkbox"
                      value={genre}
                      onChange={() => handleGenreChange(genre)}
                      checked={selectedGenres.includes(genre)}
                    />
                    {genre}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">Release Year Range</h4>
            <input
              type="number"
              placeholder="Min"
              value={releaseYearRange.min}
              onChange={(e) => setReleaseYearRange({ ...releaseYearRange, min: e.target.value })}
              className="bg-gray-700 text-white p-1 mr-2"
            />
            <input
              type="number"
              placeholder="Max"
              value={releaseYearRange.max}
              onChange={(e) => setReleaseYearRange({ ...releaseYearRange, max: e.target.value })}
              className="bg-gray-700 text-white p-1"
            />
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">Rating Range</h4>
            <input
              type="number"
              placeholder="Min"
              value={ratingRange.min}
              onChange={(e) => setRatingRange({ ...ratingRange, min: e.target.value })}
              className="bg-gray-700 text-white p-1 mr-2"
            />
            <input
              type="number"
              placeholder="Max"
              value={ratingRange.max}
              onChange={(e) => setRatingRange({ ...ratingRange, max: e.target.value })}
              className="bg-gray-700 text-white p-1"
            />
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
