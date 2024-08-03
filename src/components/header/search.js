import React, { useState } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"; // Importing Heroicons

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className="relative flex items-center">
      <MagnifyingGlassCircleIcon
        className="w-10 text-white cursor-pointer transition-transform transform hover:scale-110"
        onClick={toggleSearch}
      />
     {isSearchVisible &&  <div
        className={`absolute right-0 top-0 transition-transform duration-300 ease-in-out ${
          isSearchVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <form
          id="form"
          className="flex items-center bg-black  border border-white"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="h-10 border-0 bg-black text-white pl-5 focus:outline-none"
            name="movies"
            id="search"
            placeholder="type movie name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="hidden" aria-label="Search">
            <MagnifyingGlassCircleIcon className="w-6 h-6 text-white" />
          </button>
        </form>
      </div>}
    </div>
  );
};

export default Search;
