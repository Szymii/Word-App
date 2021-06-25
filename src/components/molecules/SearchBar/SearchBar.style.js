import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ mobile }) =>
    mobile ? '20px 25px 20px 25px' : '20px 42px 20px 25px'};
  display: flex;

  input {
    padding: 0.5em 1.25em;
  }
`;
