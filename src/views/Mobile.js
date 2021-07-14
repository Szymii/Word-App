import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useInfo } from '../hooks/useInfo';

import Header from '../components/atoms/Header/Header';
import Navigation from '../components/organisms/Navigation/Navigation';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';
import SpellWords from '../components/organisms/Spell-words/SpellWords';
import InfoModal from '../components/molecules/InfoModal/InfoModal';

const ViewWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const Mobile = () => {
  const { info } = useInfo();

  return (
    <>
      <Header />
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
      </ViewWrapper>
      <Navigation />
      {info ? <InfoModal info={info} /> : ''}
    </>
  );
};

export default Mobile;
