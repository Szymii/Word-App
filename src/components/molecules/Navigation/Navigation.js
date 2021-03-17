import React, { useContext } from 'react';
import styled from 'styled-components';
import NavButton from '../../atoms/NavButton/NavButton';
import { FaPlus, FaHome, FaList } from 'react-icons/fa';
import { StorageContext } from '../../../StorageProvider';

const StyledNav = styled.nav`
  position: absolute;
  bottom: 0;
  height: 65px;
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.unactive};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: solid 1px ${({ theme }) => theme.colors.blue};
  span {
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

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
      <span></span>
      <NavButton path="/" icon={<FaHome />} label="Home page" />
      <span></span>
      <NavButton path="/word-list" icon={<FaList />} label="Word list" />
    </StyledNav>
  );
};

export default Navigation;
