import styled from 'styled-components';

export const Container = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.8em;

  bottom: 15%;
  right: 1.2em;
  width: 3.2em;

  button {
    width: 4em;
    height: 4em;
    cursor: pointer;
    padding: 0.7em;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border: 0.1em solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
  }
  & *:not(:first-child) {
    ${({ collapsed }) =>
      collapsed ? 'margin-top: -4.92em;' : 'margin-top: 0;'}
  }
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: all 0.5s ease;

  & > svg {
    width: 100%;
    height: auto;
  }
`;
