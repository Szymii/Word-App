import React, { useState } from 'react';
import { StyledItem } from './MeaningList.styles';

const MeaningList = ({ children }) => {
  const [shown, setShown] = useState(true);
  const handleClick = () => {
    setShown(!shown);
  };
  return (
    <StyledItem shown={shown} onClick={handleClick}>
      <>{children}</>
    </StyledItem>
  );
};

export default MeaningList;
