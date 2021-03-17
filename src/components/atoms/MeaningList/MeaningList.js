import React from 'react';
import { StyledItem } from './MeaningList.styles';

const MeaningList = ({ children }) => {
  return (
    <StyledItem>
      <>{children}</>
    </StyledItem>
  );
};

export default MeaningList;
