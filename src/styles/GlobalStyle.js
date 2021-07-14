import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 16px;
  @media (min-width: 2000px) {
    font-size: 20px;
  }
  @media (min-width: 2500px) {
    font-size: 26px;
  }
  @media (min-width: 3000px) {
    font-size: 32px;
  }
  @media (min-width: 3500px) {
    font-size: 36px;
  }
}
body {
  font-family: 'Roboto', sans-serif;
}
a, button {
  font-family: 'Roboto', sans-serif;
}
`;
