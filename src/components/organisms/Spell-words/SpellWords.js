import React, { useContext } from 'react';
import MeaningList from '../../atoms/MeaningList/MeaningList';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { Wrapper, StyledInput, IconWrapper } from './SpellWords.styles';
import { FaCheck, FaForward, FaRandom } from 'react-icons/fa';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { StorageContext } from '../../../StorageProvider';
import useCorrect from '../../../hooks/useCorrect';

const SpellWords = () => {
  let { lastIndex, changeLastIndex, local, random, changeRandom } =
    useContext(StorageContext);
  const { word, meaning } = local[local.length - 1 < lastIndex ? 0 : lastIndex];
  const { answer, checkSpelling, handleInputChange } = useCorrect(word);

  const button = () => {
    if (answer.correctness === 'correct') {
      return (
        <>
          <span>Next</span>
          <FaForward />
        </>
      );
    }
    return (
      <>
        <span>Check</span>
        <FaCheck />
      </>
    );
  };

  return (
    <Wrapper>
      <StyledInput
        type="text"
        value={answer.text}
        name=""
        correctness={answer.correctness}
        onChange={handleInputChange}
        placeholder="Answer"
      />
      {meaning.map((element) => (
        <MeaningList key={element} test={true}>
          {element}
        </MeaningList>
      ))}
      <ConfirmBtn
        type="submit"
        onClick={
          answer.correctness === 'correct' ? changeLastIndex : checkSpelling
        }
      >
        {button()}
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

export default SpellWords;
