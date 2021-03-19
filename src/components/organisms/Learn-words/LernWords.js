import React, { useContext } from 'react';
import MeaningList from '../../atoms/MeaningList/MeaningList';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { Wrapper } from './LernWord.styles';
import { FaForward } from 'react-icons/fa';

import { StorageContext } from '../../../StorageProvider';

const LernWords = () => {
  let { lastIndex, changeLastIndex, local } = useContext(StorageContext);
  const { word, meaning } = local[local.length - 1 < lastIndex ? 0 : lastIndex];

  return (
    <Wrapper>
      <p>{word}</p>
      {meaning.map((element) => (
        <MeaningList key={element} test={false}>
          {element}
        </MeaningList>
      ))}
      <ConfirmBtn type="submit" onClick={changeLastIndex}>
        <span>Next</span>
        <FaForward />
      </ConfirmBtn>
    </Wrapper>
  );
};

export default LernWords;
