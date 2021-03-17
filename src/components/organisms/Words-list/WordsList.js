import React, { useContext } from 'react';
import ListItem from '../../molecules/ListItem/ListItem';
import { StyledList } from './WordsList.styles';
import { StorageContext } from '../../../StorageProvider';

const WordsList = () => {
  const { handleDelete, local } = useContext(StorageContext);

  return (
    <StyledList>
      {local.map(({ word, meaning }) => (
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
