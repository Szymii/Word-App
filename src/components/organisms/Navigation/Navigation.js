import React, { useContext, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaPlus, FaBookOpen, FaList, FaPenFancy } from 'react-icons/fa';
import { Container, StyledListItem } from './Navigation.styles';
import NavBtn from '../../atoms/NavBtn/NavBtn';
import { StorageContext } from '../../../StorageProvider';

const Navigation = () => {
  const { handleClear } = useContext(StorageContext);
  const [collapsed, setCollapsed] = useState(true);

  const openMenu = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <Container collapsed={collapsed}>
      <StyledListItem>
        <NavBtn
          path="/add-word"
          icon={<FaPlus />}
          onClick={handleClear}
          label="Add word"
        />
      </StyledListItem>
      <StyledListItem>
        <NavBtn path="/" icon={<FaBookOpen />} label="Home page" />
      </StyledListItem>
      <StyledListItem>
        <NavBtn path="/spell-words" icon={<FaPenFancy />} label="Spell words" />
      </StyledListItem>
      <StyledListItem>
        <NavBtn path="/word-list" icon={<FaList />} label="Word list" />
      </StyledListItem>
      <StyledListItem>
        <button aria-label="open menu" onClick={openMenu}>
          <BiMenuAltRight />
        </button>
      </StyledListItem>
    </Container>
  );
};

export default Navigation;
