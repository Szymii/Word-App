import styled from 'styled-components';

export const StyledItem = styled.div`
  width: 60%;
  padding: 0.35em;
  margin-top: 0.5em;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;
  cursor: ${({ test }) => (test ? 'default' : 'pointer')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  &::after {
    ${({ shown }) => {
      if (shown) {
        return `
        content: '';
      `;
      }
    }}
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(0.4em);
    height: 100%;
    width: 100%;
  }
`;
