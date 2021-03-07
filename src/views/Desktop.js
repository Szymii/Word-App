import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import DesktopNav from '../components/molecules/DesktopNav/DesktopNav';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

const ViewWrapper = styled.div`
  width: 25%;
  min-width: 450px;
  height: 600px;
  position: relative;
  overflow: auto;
`;

const Desktop = () => {
  return (
    <Wrapper>
      <Title> Word APP</Title>
      <Switch>
        <Route path="/Word-App/word-list">
          <ViewWrapper>
            <WordList />
          </ViewWrapper>
        </Route>
        <Route path="/Word-App/add-word">
          <ViewWrapper>
            <AddWords />
          </ViewWrapper>
        </Route>
        <Route path="/Word-App/">
          <ViewWrapper>
            <LernWords />
          </ViewWrapper>
        </Route>
      </Switch>
      <DesktopNav />
    </Wrapper>
  );
};

export default Desktop;
