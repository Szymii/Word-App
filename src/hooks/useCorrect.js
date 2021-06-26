import { useState, useEffect } from 'react';

const initValue = {
  text: '',
  correctness: 'none',
};

const useCorrect = (word) => {
  const [answer, setAnswer] = useState(initValue);
  const checkSpelling = () => {
    if (answer.text.toUpperCase() === word.toUpperCase()) {
      setAnswer({
        text: answer.text,
        correctness: 'correct',
      });
    } else {
      setAnswer({
        text: answer.text,
        correctness: 'wrong',
      });
    }
  };

  const handleInputChange = (e) => {
    setAnswer({
      text: e.target.value,
      correctness: 'none',
    });
  };

  useEffect(() => {
    setAnswer({
      text: '',
      correctness: 'none',
    });
  }, [word]);

  return { answer, checkSpelling, handleInputChange };
};

export default useCorrect;
