import React, { useContext, useState } from 'react';
import ListItem from '../../components/molecules/ListItem/ListItem';
import Modal from '../../components/molecules/Modal/Modal';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';
import ConfirmModal from '../../components/molecules/ConfirmModal/ConfirmModal';
import { StyledList } from './WordsList.styles';
import { StorageContext } from '../../StorageProvider';

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
