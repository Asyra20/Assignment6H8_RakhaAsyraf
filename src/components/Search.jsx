import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={term}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default Search;
