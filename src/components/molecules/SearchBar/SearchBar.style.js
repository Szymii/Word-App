import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ mobile }) =>
    mobile ? '1.25em 1.5em 1.25em 1.5em' : '1.25em 1.5em'};
  display: flex;

  input {
    padding: 0.5em 1.25em;
  }
`;
