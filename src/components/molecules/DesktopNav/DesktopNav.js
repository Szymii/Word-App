import React, { useContext } from 'react';
import DeskNavBtn from '../../atoms/DeskNavBtn/DeskNavBtn';
import { FaPlus, FaBookOpen, FaList, FaPenFancy } from 'react-icons/fa';
import { Wrapper } from './DesktopNav.styles';
import { StorageContext } from '../../../StorageProvider';

const DesktopNav = () => {
  const { handleClear } = useContext(StorageContext);
  return (
    <Wrapper>
      <DeskNavBtn path="/" icon={<FaBookOpen />} label="Home page" />
      <DeskNavBtn
        path="/add-word"
        icon={<FaPlus />}
        onClick={handleClear}
        label="Add word"
      />
      <DeskNavBtn
        path="/spell-words"
        icon={<FaPenFancy />}
        label="Spell words"
      />
      <DeskNavBtn path="/word-list" icon={<FaList />} label="Word list" />
    </Wrapper>
  );
};

export default DesktopNav;
