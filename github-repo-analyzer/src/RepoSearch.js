// src/RepoSearch.js
import React, { useState } from 'react';
import { SearchContainer, Input, Button } from './StyledComponents';

const RepoSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <Button onClick={handleSearch}>Search Repositories</Button>
    </SearchContainer>
  );
};

export default RepoSearch;
