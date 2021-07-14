import React, { useContext } from 'react';
import NavButton from '../../atoms/NavButton/NavButton';
import { FaPlus, FaBookOpen, FaList, FaPenFancy } from 'react-icons/fa';
import { StorageContext } from '../../../StorageProvider';
import { StyledNav } from './Navigation.styles';

const Navigation = () => {
  const { handleClear } = useContext(StorageContext);
  return (
    <StyledNav>
      <NavButton
        path="/add-word"
        icon={<FaPlus />}
        onClick={handleClear}
        label="Add word"
      />
      <NavButton path="/" icon={<FaBookOpen />} label="Home page" />
      <NavButton
        path="/spell-words"
        icon={<FaPenFancy />}
        label="Spell words"
      />
      <NavButton path="/word-list" icon={<FaList />} label="Word list" />
    </StyledNav>
  );
};

export default Navigation;
