import React, { useContext } from 'react';
import { FaCheck, FaForward, FaRandom } from 'react-icons/fa';
import { Wrapper, StyledInput, IconWrapper } from './SpellWords.styles';
import MeaningList from '../../components/atoms/MeaningList/MeaningList';
import IconBtn from '../../components/atoms/IconBtn/IconBtn';
import { StorageContext } from '../../StorageProvider';
import { ConfirmBtn } from '../../components/atoms/ConfirmBtn/ConfirmBtn';
import useCorrect from '../../hooks/useCorrect';

const SpellWords = () => {
  let { lastIndex, changeLastIndex, local, random, changeRandom } =
    useContext(StorageContext);

  const { word, meaning } = local[local.length - 1 < lastIndex ? 0 : lastIndex];
  const { answer, checkSpelling, handleInputChange } = useCorrect(word);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
    <>
      <Wrapper onSubmit={handleSubmit}>
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
      </Wrapper>
      <IconWrapper>
        <IconBtn random={random} onClick={changeRandom} label="Random order">
          <FaRandom />
        </IconBtn>
      </IconWrapper>
    </>
  );
};

export default SpellWords;
