import React from 'react';
import styled from 'styled-components';
import NavButton from '../../atoms/NavButton/NavButton';
import { FaPlus, FaHome, FaList } from 'react-icons/fa';

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  padding: 15px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  span {
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <NavButton path="/add-word" icon={<FaPlus />} />
      <span></span>
      <NavButton path="/" icon={<FaHome />} />
      <span></span>
      <NavButton path="/word-list" icon={<FaList />} />
    </StyledNav>
  );
};

export default Navigation;