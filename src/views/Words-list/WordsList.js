import React, { useContext, useState } from 'react';
import ListItem from '../../components/molecules/ListItem/ListItem';
import Modal from '../../components/molecules/Modal/Modal';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';
import ConfirmModal from '../../components/molecules/ConfirmModal/ConfirmModal';
import { StyledList } from './WordsList.styles';
import { StorageContext } from '../../StorageProvider';
import useDimensions from '../../hooks/useDimensions';

const WordsList = () => {
  const { handleDelete, filtered, phrase } = useContext(StorageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [wordId, setWordId] = useState('');
  const { dimensions } = useDimensions();
  const isMobile = dimensions.width < 860;

  const handleModalOpen = (id) => {
    setIsOpen(true);
    setWordId(id);
  };
  const handleModalClose = () => setIsOpen(false);

  return (
    <>
      <SearchBar />
      <StyledList isMobile={isMobile}>
        {filtered.map((word) => (
          <ListItem
            key={word.id}
            word={word}
            phrase={phrase}
            onClick={handleModalOpen}
          />
        ))}
      </StyledList>
      <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
        <ConfirmModal
          handleDelete={handleDelete}
          id={wordId}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default WordsList;
