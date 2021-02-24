import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/atoms/Header/Header';
import Navigation from '../components/molecules/Navigation/Navigation';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/word-list">
              <>D</>
            </Route>
            <Route path="/add-word">
              <>U</>
            </Route>
            <Route path="/">
              <>P</>
            </Route>
          </Switch>
          <Navigation />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;