import React, { useContext } from 'react';
import { FaPlus, FaBookOpen, FaList, FaPenFancy } from 'react-icons/fa';
import { Wrapper } from './SideNav.styles';
import NavItem from '../../molecules/NavItem/NavItem';
import { StorageContext } from '../../../StorageProvider';

const SideNav = () => {
  const { handleClear } = useContext(StorageContext);

  return (
    <Wrapper>
      <NavItem
        path="/add-word"
        icon={<FaPlus />}
        onClick={handleClear}
        label="Add word"
      >
        Add New
      </NavItem>
      <NavItem path="/" icon={<FaBookOpen />} label="Home page">
        Train
      </NavItem>
      <NavItem path="/spell-words" icon={<FaPenFancy />} label="Spell words">
        Write
      </NavItem>
      <NavItem path="/word-list" icon={<FaList />} label="Word list">
        List
      </NavItem>
    </Wrapper>
  );
};

export default SideNav;
