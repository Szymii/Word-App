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
`;
const Title = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const ViewWrapper = styled.div`
  position: relative;
`;

const Desktop = () => {
  const { info } = useInfo();

  return (
    <Wrapper>
      <Title> Word App</Title>
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
