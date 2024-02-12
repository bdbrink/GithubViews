// src/StyledComponents.js
import styled, { keyframes } from 'styled-components';

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

