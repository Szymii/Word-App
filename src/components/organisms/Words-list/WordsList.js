import React, { useState, useEffect } from 'react';
import ListItem from '../../molecules/ListItem/ListItem';
import { StyledList } from './WordsList.styles';

const WordsList = () => {
  const [localList, setLocalList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const items = [];
    keys.forEach((key) => {
      items.push({
        word: key,
        meaning: JSON.parse(localStorage.getItem(key)),
      });
    });
    setLocalList(items);
  }, [setLocalList]);

  const handleDelete = (word) => {
    const value = [...localList].filter((obj) => obj.word !== word);
    localStorage.removeItem(word);
    setLocalList(value);
  };

  return (
    <StyledList>
      {localList.map(({ word, meaning }) => (
        <ListItem
          key={word}
          word={word}
          meaning={meaning}
          onClick={handleDelete}
        />
      ))}
    </StyledList>
  );
};

export default WordsList;
