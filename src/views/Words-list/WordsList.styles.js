import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0 1.5em 12.5em;
  list-style: none;
  height: 75vh;
  overflow-y: scroll;
  & > * + * {
    margin-top: 1.3em;
  }
  &::-webkit-scrollbar {
    ${({ isMobile }) => (isMobile ? '' : 'width: 0.6em')};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkGray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 1.5em;
  }
`;
