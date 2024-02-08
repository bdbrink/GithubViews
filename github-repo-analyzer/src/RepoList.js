// src/RepoList.js
import React from 'react';
import { RepoListContainer } from './StyledComponents';

const RepoList = ({ repos }) => {
  return (
    <RepoListContainer>
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </RepoListContainer>
  );
};

export default RepoList;
