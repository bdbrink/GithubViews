// src/StyledComponents.js
import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s, color 0.3s;
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
      margin-bottom: 20px;

      a {
        text-decoration: none;
        color: #0366d6;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        margin-top: 5px;
        color: #586069;
      }
    }
  }
`;

export const LoadingIndicator = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: #0366d6;
`;

export const ErrorMessage = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: #d73a49;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #0366d6;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`;

export const UserProfileContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 5px;
  }

  p {
    color: #586069;
    margin-bottom: 5px;
  }
`;

export const lightTheme = {
    background: '#fff',
    text: '#000',
    accent: '#0366d6',
  };
  
  export const darkTheme = {
    background: '#1a1a1a',
    text: '#fff',
    accent: '#61dafb',
  };

  export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;


export const LanguageStats = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.background}; /* Set background color */
  color: ${({ theme }) => theme.text}; /* Set text color */
  border-radius: 5px;

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 3px;
    }
  }
`;
