import React, { useContext } from 'react';
import ListItem from '../../molecules/ListItem/ListItem';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { StyledList } from './WordsList.styles';
import { StorageContext } from '../../../StorageProvider';

const WordsList = () => {
  const { handleDelete, fitered, phrase } = useContext(StorageContext);

  return (
    <>
      <SearchBar />
      <StyledList>
        {fitered.map(({ word, meaning }) => (
          <ListItem
            key={word}
            word={word}
            meaning={meaning}
            phrase={phrase}
            onClick={handleDelete}
          />
        ))}
      </StyledList>
    </>
  );
};

export default WordsList;
