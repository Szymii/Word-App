import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0 25px 40px 25px;
  list-style: none;
  max-height: 70vh;
  overflow-y: scroll;
  & > * + * {
    margin-top: 25px;
  }
`;
