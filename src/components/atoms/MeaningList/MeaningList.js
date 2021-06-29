import React, { useState } from 'react';
import { StyledItem } from './MeaningList.styles';

const MeaningList = ({ children, test, tab }) => {
  const [shown, setShown] = useState(!test);
  const handleClick = () => {
    if (!test) setShown(!shown);
  };

  return (
    <StyledItem
      as={tab ? 'button' : ''}
      shown={shown}
      test={test}
      onClick={handleClick}
    >
      <>{children}</>
    </StyledItem>
  );
};

export default MeaningList;
