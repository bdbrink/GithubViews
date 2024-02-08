// src/StyledComponents.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #61dafb;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const RepoListContainer = styled.div`
  margin-top: 20px;
  text-align: left;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;

      a {
        text-decoration: none;
        color: #0366d6;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
