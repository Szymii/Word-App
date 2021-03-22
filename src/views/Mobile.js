import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/atoms/Header/Header';
import Navigation from '../components/molecules/Navigation/Navigation';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';
import SpellWords from '../components/organisms/Spell-words/SpellWords';

const Mobile = () => {
  return (
    <>
      <Header />
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
      <Navigation />
    </>
  );
};

export default Mobile;
