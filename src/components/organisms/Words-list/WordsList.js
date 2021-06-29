import React, { useContext, useState } from 'react';
import ListItem from '../../molecules/ListItem/ListItem';
import Modal from '../../molecules/Modal/Modal';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { StyledList } from './WordsList.styles';
import { StorageContext } from '../../../StorageProvider';
import ConfirmModal from '../../molecules/ConfirmModal/ConfirmModal';

const WordsList = () => {
  const { handleDelete, filtered, phrase } = useContext(StorageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const handleModalOpen = (word) => {
    setIsOpen(true);
    setCurrentWord(word);
  };
  const handleModalClose = () => setIsOpen(false);

  return (
    <>
      <SearchBar />
      <StyledList>
        {filtered.map(({ word, meaning }) => (
          <ListItem
            key={word}
            word={word}
            meaning={meaning}
            phrase={phrase}
            onClick={handleModalOpen}
          />
        ))}
      </StyledList>
      <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
        <ConfirmModal
          handleDelete={handleDelete}
          currentWord={currentWord}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default WordsList;
