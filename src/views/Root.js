import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/atoms/Header/Header';
import Navigation from '../components/molecules/Navigation/Navigation';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import StorageProvider from '../StorageProvider';
import LernWords from '../components/organisms/Learn-words/LernWords';

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
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper height={dimensions.height}>
          <Header />
          <StorageProvider>
            <Switch>
              <Route path="/word-list">
                <WordList />
              </Route>
              <Route path="/add-word">
                <AddWords />
              </Route>
              <Route path="/">
                <LernWords />
              </Route>
            </Switch>
            <Navigation />
          </StorageProvider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
