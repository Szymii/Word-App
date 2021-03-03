import React from 'react';
import styled from 'styled-components';

const StyledField = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 50px;
  gap: 20px;
  margin-bottom: 20px;
`;

const FormField = ({ children }) => {
  return <StyledField>{children}</StyledField>;
};

export default FormField;
