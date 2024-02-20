// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ErrorMessage, LoadingIndicator, ToggleButton } from './StyledComponents';
import RepoSearch from './RepoSearch';
import RepoList from './RepoList';
import { lightTheme, darkTheme } from './StyledComponents';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError(null);

      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }
      const userData = await userResponse.json();
      setUserProfile(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <h1>GitHub Repository Analyzer</h1>
        <RepoSearch onSearch={handleSearch} />

        <ToggleButton onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </ToggleButton>

        {loading && <LoadingIndicator>Loading...</LoadingIndicator>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && userProfile && (
          <>
            <div>
              <img
                src={userProfile.avatar_url}
                alt={`${userProfile.login}'s avatar`}
                style={{ borderRadius: '50%', width: '100px', height: '100px' }}
              />
              <h2>{userProfile.name}</h2>
              <p>{userProfile.bio}</p>
              <p>Followers: {userProfile.followers}</p>
              <p>Following: {userProfile.following}</p>
            </div>
            <RepoList repos={repos} />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
