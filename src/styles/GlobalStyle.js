import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
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
  margin: 0;
}
a, button {
  font-family: 'Roboto', sans-serif;
}
`;
