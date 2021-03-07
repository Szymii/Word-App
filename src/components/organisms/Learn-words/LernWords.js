import React, { useState, useEffect, useContext } from 'react';
import MeaningList from '../../atoms/MeaningList/MeaningList';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { Wrapper } from './LernWord.styles';
import { FaForward } from 'react-icons/fa';

import { StorageContext } from '../../../StorageProvider';

const LernWords = () => {
  let { lastIndex, setLastIndex } = useContext(StorageContext);
  const [local, setLocal] = useState([
    {
      word: 'Add',
      meaning: ['some', 'words'],
    },
  ]);

  const { word, meaning } = local[local.length - 1 < lastIndex ? 0 : lastIndex];

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const items = [];
    keys.forEach((key) => {
      items.push({
        word: key,
        meaning: JSON.parse(localStorage.getItem(key)),
      });
    });
    if (keys.length !== 0) setLocal(items);
  }, []);

  const handleChange = () => {
    if (local.length <= lastIndex + 1) {
      setLastIndex(0);
    } else {
      setLastIndex(lastIndex + 1);
    }
  };

  return (
    <Wrapper>
      <p>{word}</p>
      {meaning.map((element) => (
        <MeaningList key={element}>{element}</MeaningList>
      ))}
      <ConfirmBtn type="submit" onClick={handleChange}>
        <span>Next</span>
        <FaForward />
      </ConfirmBtn>
    </Wrapper>
  );
};

export default LernWords;
