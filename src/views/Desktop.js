import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useInfo } from '../hooks/useInfo';

import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';
import SpellWords from '../components/organisms/Spell-words/SpellWords';
import InfoModal from '../components/molecules/InfoModal/InfoModal';
import SideNav from '../components/organisms/SideNav/SideNav';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 18em 1fr;
  grid-template-rows: 5em 1fr;
`;

const Title = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: grid;
  align-items: center;
  padding-left: 1em;
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pureBlack};
`;

const ViewWrapper = styled.div`
  width: 30%;
  min-width: 30em;
  margin: 0 auto;
  position: relative;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Desktop = () => {
  const { info } = useInfo();

  return (
    <Wrapper>
      <Title>Word App</Title>
      <ViewWrapper>
        <Switch>
          <Route path="/word-list">
            <WordList />
          </Route>
          <Route path="/add-word">
            <AddWords />
          </Route>
          <Route path="/spell-words">
            <SpellWords />
          </Route>
          <Route path="/">
            <LernWords />
          </Route>
        </Switch>
        {info ? <InfoModal info={info} /> : ''}
      </ViewWrapper>
      <SideNav />
    </Wrapper>
  );
};

export default Desktop;
