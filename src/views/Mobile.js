import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/atoms/Header/Header';
import Navigation from '../components/molecules/Navigation/Navigation';
import AddWords from '../components/organisms/Add-word/AddWords';
import WordList from '../components/organisms/Words-list/WordsList';
import LernWords from '../components/organisms/Learn-words/LernWords';

const Mobile = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/Word-App/word-list">
          <WordList />
        </Route>
        <Route path="/Word-App/add-word">
          <AddWords />
        </Route>
        <Route path="/Word-App/">
          <LernWords />
        </Route>
      </Switch>
      <Navigation />
    </>
  );
};

export default Mobile;
