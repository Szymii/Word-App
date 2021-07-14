import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0 1.5em 2.5em;
  list-style: none;
  max-height: 70vh;
  overflow-y: scroll;
  & > * + * {
    margin-top: 1.5em;
  }
`;
