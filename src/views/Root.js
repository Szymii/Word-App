import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StorageProvider from '../StorageProvider';
import InfoProvider from '../hooks/useInfo';
import Mobile from './Mobile';
import Desktop from './Desktop';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

import useDimensions from '../hooks/useDimensions';

const Wrapper = styled.div`
  position: relative;
  min-height: ${({ height }) => height}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

function App() {
  const { dimensions } = useDimensions();

  let view;

  if (dimensions.width < 860) {
    view = <Mobile />;
  } else {
    view = <Desktop />;
  }

  return (
    <Router>
      <InfoProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StorageProvider>
            <Wrapper height={dimensions.height}>{view}</Wrapper>
          </StorageProvider>
        </ThemeProvider>
      </InfoProvider>
    </Router>
  );
}

export default App;
