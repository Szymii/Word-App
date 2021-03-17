import React, { useEffect, useState } from 'react';

export const StorageContext = React.createContext({
  handleEdit: () => {},
  handleClear: () => {},
  changeLastIndex: () => {},
  updateLocal: () => {},
  handleDelete: () => {},
});

const StorageProvider = ({ children }) => {
  const [meaning, setMeaning] = useState(['']);
  const [word, setWord] = useState('');

  const [lastIndex, setLastIndex] = useState(0);
  const [local, setLocal] = useState([
    {
      word: 'Add',
      meaning: ['some', 'words'],
    },
  ]);

  const handleEdit = (word, meaning) => {
    setWord(word);
    setMeaning(meaning);
  };

  const handleClear = () => {
    setWord('');
    setMeaning(['']);
  };

  const changeLastIndex = () => {
    if (local.length <= lastIndex + 1) {
      setLastIndex(0);
    } else {
      setLastIndex(lastIndex + 1);
    }
  };

  const handleDelete = (word) => {
    const value = [...local].filter((obj) => obj.word !== word);
    localStorage.removeItem(word);
    setLocal(value);
  };

  const updateLocal = () => {
    console.log('update');
    const keys = Object.keys(localStorage);
    const items = [];
    keys.forEach((key) => {
      items.push({
        word: key,
        meaning: JSON.parse(localStorage.getItem(key)),
      });
    });
    if (keys.length !== 0) setLocal(items);
  };

  useEffect(() => {
    updateLocal();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        handleEdit,
        handleClear,
        meaning,
        setMeaning,
        word,
        setWord,
        lastIndex,
        setLastIndex,
        changeLastIndex,
        local,
        updateLocal,
        handleDelete,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
