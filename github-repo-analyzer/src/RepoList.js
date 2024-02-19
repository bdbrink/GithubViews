// src/RepoList.js
import React, { useState, useEffect } from 'react';
import { RepoListContainer, LanguageStats } from './StyledComponents';

const RepoList = ({ repos }) => {
  const [languageStats, setLanguageStats] = useState({});

  useEffect(() => {
    // Fetch language statistics for the first repository (assuming all repositories have similar languages)
    if (repos.length > 0) {
      const repo = repos[0];
      fetch(repo.languages_url)
        .then((response) => response.json())
        .then((data) => setLanguageStats(data))
        .catch((error) => console.error('Error fetching language stats:', error));
    }
  }, [repos]);

  return (
    <RepoListContainer>
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <strong>{repo.name}</strong>
            </a>
            <p>{repo.description}</p>
            <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>

            {languageStats && (
              <LanguageStats>
                <p>Languages used:</p>
                <ul>
                  {Object.entries(languageStats).map(([language, bytes]) => (
                    <li key={language}>
                      {language}: {bytes} bytes
                    </li>
                  ))}
                </ul>
              </LanguageStats>
            )}
          </li>
        ))}
      </ul>
    </RepoListContainer>
  );
};

export default RepoList;
