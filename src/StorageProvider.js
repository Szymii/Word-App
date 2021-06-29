import React, { useEffect, useState } from 'react';

export const StorageContext = React.createContext({
  handleEdit: () => {},
  handleClear: () => {},
  changeLastIndex: () => {},
  updateLocal: () => {},
  handleDelete: () => {},
  changeRandom: () => {},
});

const initState = [
  {
    word: 'Add words',
    meaning: ['Add words'],
  },
];

const StorageProvider = ({ children }) => {
  const [meaning, setMeaning] = useState(['']);
  const [word, setWord] = useState('');

  const [lastIndex, setLastIndex] = useState(0);
  const [local, setLocal] = useState(initState);
  const [filtered, setFiltered] = useState(initState);
  const [phrase, setPhrase] = useState('');
  const [random, setRandom] = useState(false);

  const handleEdit = (word, meaning) => {
    setWord(word);
    setMeaning(meaning);
  };

  const handleClear = () => {
    setWord('');
    setMeaning(['']);
  };

  const getRandom = () => {
    return Math.floor(Math.random() * local.length);
  };

  const changeLastIndex = () => {
    let index = lastIndex + 1;
    if (local.length <= lastIndex + 1) index = 0;
    if (random) {
      let randomIndex = getRandom();
      if (randomIndex === lastIndex) randomIndex += 1;
      if (randomIndex >= local.length) randomIndex = 0;
      index = randomIndex;
    }

    setLastIndex(index);
    sessionStorage.setItem('index', index);
  };

  const handleDelete = (word) => {
    const value = [...local].filter((obj) => obj.word !== word);
    localStorage.removeItem(word);
    if (value.length === 0) return setLocal(initState);
    setLocal(value);
  };

  const changeRandom = () => {
    setRandom(!random);
    sessionStorage.setItem('random', !random);
  };

  const updateLocal = () => {
    const keys = Object.keys(localStorage);
    const items = [];
    keys.forEach((key) => {
      items.push({
        word: key,
        meaning: JSON.parse(localStorage.getItem(key)),
      });
    });
    items.sort((a, b) => a.word.localeCompare(b.word));
    if (keys.length !== 0) setLocal(items);
  };

  const getSessionstorage = () => {
    const index = JSON.parse(sessionStorage.getItem('index'));
    const random = JSON.parse(sessionStorage.getItem('random'));
    if (index) setLastIndex(index);
    if (random) setRandom(random);
  };

  useEffect(() => {
    updateLocal();
    getSessionstorage();
  }, []);

  useEffect(() => {
    const newArray = local.filter((item) =>
      item.word.toLowerCase().includes(phrase.toLowerCase().trim())
    );
    setFiltered(newArray);
  }, [local, phrase]);

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
        random,
        changeRandom,
        phrase,
        setPhrase,
        filtered,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
