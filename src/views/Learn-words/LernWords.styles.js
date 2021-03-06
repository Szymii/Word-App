import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3em 1.25em 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 1.2em 0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 15.5%;
  left: 1em;
  width: 3.2em;
`;
