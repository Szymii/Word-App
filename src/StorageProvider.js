import React, { useState } from 'react';

export const StorageContext = React.createContext({
  handleEdit: () => {},
  handleClear: () => {},
});

const StorageProvider = ({ children }) => {
  const [meaning, setMeaning] = useState(['']);
  const [word, setWord] = useState('');

  const handleEdit = (word, meaning) => {
    console.log(word, meaning);
    setWord(word);
    setMeaning(meaning);
  };
  const handleClear = () => {
    setWord('');
    setMeaning(['']);
  };

  return (
    <StorageContext.Provider
      value={{
        handleEdit,
        handleClear,
        meaning,
        setMeaning,
        word,
        setWord,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
