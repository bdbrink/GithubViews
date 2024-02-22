// src/RepoList.js
import React, { useState, useEffect } from 'react';
import { RepoListContainer, LanguageStats } from './StyledComponents';

const RepoList = ({ repos }) => {
  const [languageStats, setLanguageStats] = useState({});

  useEffect(() => {
    // Fetch and aggregate language statistics for all repositories
    const aggregateLanguageStats = async () => {
      try {
        const aggregatedStats = {};

        for (const repo of repos) {
          const response = await fetch(repo.languages_url);
          if (!response.ok) {
            throw new Error(`Failed to fetch language stats for ${repo.name}`);
          }

          const languageData = await response.json();
          for (const [language, bytes] of Object.entries(languageData)) {
            aggregatedStats[language] = (aggregatedStats[language] || 0) + bytes;
          }
        }

        setLanguageStats(aggregatedStats);
      } catch (error) {
        console.error('Error fetching language stats:', error);
      }
    };

    aggregateLanguageStats();
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
          </li>
        ))}
      </ul>

      {languageStats && Object.keys(languageStats).length > 0 && (
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
    </RepoListContainer>
  );
};

export default RepoList;
