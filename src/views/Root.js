import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StorageProvider from '../StorageProvider';
import Mobile from './Mobile';
import Desktop from './Desktop';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const Wrapper = styled.div`
  position: relative;
  min-height: ${({ height }) => height}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  let view;

  if (dimensions.width < 860) {
    view = <Mobile />;
  } else {
    view = <Desktop />;
  }

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerHeight < dimensions.height &&
        dimensions.width === window.innerWidth
      )
        return;
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StorageProvider>
          <Wrapper height={dimensions.height}>{view}</Wrapper>
        </StorageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
