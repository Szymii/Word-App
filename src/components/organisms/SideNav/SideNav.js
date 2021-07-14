import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;

const SideNav = () => {
  return (
    <Wrapper>
      <>Siema</>
    </Wrapper>
  );
};

export default SideNav;
