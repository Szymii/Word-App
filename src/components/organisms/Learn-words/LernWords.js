import React, { useContext } from 'react';
import MeaningList from '../../atoms/MeaningList/MeaningList';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { Wrapper, IconWrapper } from './LernWord.styles';
import { FaForward, FaRandom } from 'react-icons/fa';

import { StorageContext } from '../../../StorageProvider';
import IconBtn from '../../atoms/IconBtn/IconBtn';

const LernWords = () => {
  let { lastIndex, changeLastIndex, local, random, changeRandom } = useContext(
    StorageContext
  );
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
      <IconWrapper>
        <IconBtn
          random={random ? random : null}
          onClick={changeRandom}
          label="Random order"
        >
          <FaRandom />
        </IconBtn>
      </IconWrapper>
    </Wrapper>
  );
};

export default LernWords;
