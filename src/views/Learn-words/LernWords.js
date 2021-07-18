import React, { useContext } from 'react';
import { FaForward, FaRandom } from 'react-icons/fa';
import { Wrapper, IconWrapper } from './LernWords.styles';
import MeaningList from '../../components/atoms/MeaningList/MeaningList';
import IconBtn from '../../components/atoms/IconBtn/IconBtn';
import { ConfirmBtn } from '../../components/atoms/ConfirmBtn/ConfirmBtn';
import { StorageContext } from '../../StorageProvider';

const LernWords = () => {
  let { lastIndex, changeLastIndex, local, random, changeRandom } =
    useContext(StorageContext);
  const { word, meaning } = local[local.length - 1 < lastIndex ? 0 : lastIndex];

  return (
    <Wrapper>
      <p>{word}</p>
      {meaning.map((element) => (
        <MeaningList key={element} test={false} tab>
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
