// src/App.js
import React, { useState } from 'react';
import { AppContainer } from './StyledComponents';
import RepoSearch from './RepoSearch';
import RepoList from './RepoList';

const App = () => {
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <AppContainer>
      <h1>GitHub Repository Analyzer</h1>
      <RepoSearch onSearch={handleSearch} />
      <RepoList repos={repos} />
    </AppContainer>
  );
};

export default App;
