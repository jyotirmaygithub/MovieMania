import React from 'react';

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <form id="form" className="flex" onSubmit={handleSearch}>
    <input
      type="text"
      className="w-1/6 h-12 rounded-full border-2 border-white bg-bg-color text-white text-lg pl-5 font-patrick"
      name="movies"
      id="search"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </form>
);

export default Search;
