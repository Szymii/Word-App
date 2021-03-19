import React, { useState } from 'react';
import { StyledItem } from './MeaningList.styles';

const MeaningList = ({ children, test }) => {
  const [shown, setShown] = useState(!test);
  const handleClick = () => {
    if (!test) setShown(!shown);
  };

  return (
    <StyledItem shown={shown} onClick={handleClick}>
      <>{children}</>
    </StyledItem>
  );
};

export default MeaningList;
