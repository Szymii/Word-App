import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useInfo } from '../hooks/useInfo';

import DesktopNav from '../components/molecules/DesktopNav/DesktopNav';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';
import SpellWords from '../components/organisms/Spell-words/SpellWords';
import InfoModal from '../components/molecules/InfoModal/InfoModal';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.header`
  margin: 1em 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

const ViewWrapper = styled.div`
  width: 25%;
  min-width: 28em;
`;

const Desktop = () => {
  const { info } = useInfo();

  return (
    <Wrapper>
      <Title> Word App</Title>
      <DesktopNav />
      <Switch>
        <Route path="/word-list">
          <ViewWrapper>
            <WordList />
          </ViewWrapper>
        </Route>
        <Route path="/add-word">
          <ViewWrapper>
            <AddWords />
          </ViewWrapper>
        </Route>
        <Route path="/spell-words">
          <ViewWrapper>
            <SpellWords />
          </ViewWrapper>
        </Route>
        <Route path="/">
          <ViewWrapper>
            <LernWords />
          </ViewWrapper>
        </Route>
      </Switch>
      {info ? <InfoModal info={info} /> : ''}
    </Wrapper>
  );
};

export default Desktop;
