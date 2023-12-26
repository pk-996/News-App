import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CirclesWithBar } from 'react-loader-spinner';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    onSearch(searchTerm);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {loading && <CirclesWithBar color="#007bff" size={5} />}
    </div>
  );
}

export default Search;


