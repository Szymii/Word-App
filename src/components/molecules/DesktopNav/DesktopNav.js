import React, { useContext } from 'react';
import DeskNavBtn from '../../atoms/DeskNavBtn/DeskNavBtn';
import { FaPlus, FaHome, FaList } from 'react-icons/fa';
import { Wrapper } from './DesktopNav.styles';
import { StorageContext } from '../../../StorageProvider';

const DesktopNav = () => {
  const { handleClear } = useContext(StorageContext);
  return (
    <Wrapper>
      <DeskNavBtn path="/" icon={<FaHome />} label="Home page" />
      <DeskNavBtn
        path="/add-word"
        icon={<FaPlus />}
        onClick={handleClear}
        label="Add word"
      />
      <DeskNavBtn path="/word-list" icon={<FaList />} label="Word list" />
    </Wrapper>
  );
};

export default DesktopNav;
