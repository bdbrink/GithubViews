// src/App.js
import React, { useState } from 'react';
import { AppContainer, ErrorMessage, LoadingIndicator } from './StyledComponents';
import RepoSearch from './RepoSearch';
import RepoList from './RepoList';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();

      // Sort repositories by last updated date in descending order
      const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      setRepos(sortedRepos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <h1>GitHub Repository Analyzer</h1>
      <RepoSearch onSearch={handleSearch} />
      
      {loading && <LoadingIndicator>Loading...</LoadingIndicator>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {!loading && !error && <RepoList repos={repos} />}
    </AppC
