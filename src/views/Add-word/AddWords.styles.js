import styled from 'styled-components';

export const Form = styled.div`
  padding: 5em 1.25em 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.n};
`;
