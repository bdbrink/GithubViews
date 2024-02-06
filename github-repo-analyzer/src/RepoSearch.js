// src/RepoSearch.js

import React, { useState } from 'react';

const RepoSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search Repositories</button>
    </div>
  );
};

export default RepoSearch;
