import React, { useEffect, useState } from 'react';
import { useInfo } from './hooks/useInfo';
import { v4 as uuidv4 } from 'uuid'; //migration

export const StorageContext = React.createContext({
  handleClear: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  getDataFromDB: () => {},
  changeLastIndex: () => {},
  changeRandom: () => {},
  local: [
    {
      id: null,
      word: '',
      meaning: [''],
    },
  ],
});

const initState = [
  {
    id: null,
    word: 'Add words',
    meaning: ['Add words'],
  },
];

const emptyState = {
  id: null,
  word: '',
  meaning: [''],
};

const StorageProvider = ({ children }) => {
  const [word, setWord] = useState(emptyState);
  const [lastIndex, setLastIndex] = useState(0);
  const [local, setLocal] = useState(initState);
  const [filtered, setFiltered] = useState(initState);
  const [phrase, setPhrase] = useState('');
  const [random, setRandom] = useState(false);
  const { dispatchInfo } = useInfo();

  const handleClear = () => {
    setWord(emptyState);
  };

  const handleEdit = (word) => {
    setWord(word);
  };

  const handleDelete = (id) => {
    const value = [...local].filter((obj) => obj.id !== id);

    const request = indexedDB.open('localDB');
    request.onerror = (e) => {
      dispatchInfo(`Indexed DB: ${e.target.error.name}`);
    };

    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('dictionary', 'readwrite');
      const store = tx.objectStore('dictionary');

      const request = store.delete(id);
      request.onsuccess = () => {
        if (value.length === 0) return setLocal(initState);
        setLocal(value);
      };
    };
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

  const changeRandom = () => {
    setRandom(!random);
    sessionStorage.setItem('random', !random);
  };

  const getSessionStorage = () => {
    const index = JSON.parse(sessionStorage.getItem('index'));
    const random = JSON.parse(sessionStorage.getItem('random'));
    if (index) setLastIndex(index);
    if (random) setRandom(random);
  };

  const getDataFromDB = () => {
    if (!indexedDB) {
      dispatchInfo('Indexed DB is not supported');
      return;
    }
    const request = indexedDB.open('localDB');
    request.onerror = (e) => {
      dispatchInfo(`Indexed DB: ${e.target.error.name}`);
    };

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      const objectStore = db.createObjectStore('dictionary', {
        keyPath: 'id',
      });

      /* migration start */
      const keys = Object.keys(localStorage);
      const items = [];
      keys.forEach((key) => {
        items.push({
          word: key,
          meaning: JSON.parse(localStorage.getItem(key)),
        });
      });

      objectStore.transaction.oncomplete = () => {
        const tx = db.transaction('dictionary', 'readwrite');
        const store = tx.objectStore('dictionary');

        items.forEach((item) => {
          store.add({ ...item, id: uuidv4() });
        });
      };

      /* migration end */
    };

    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('dictionary');
      const store = tx.objectStore('dictionary');
      const request = store.openCursor();

      new Promise((res, rej) => {
        const value = [];
        request.onsuccess = (e) => {
          const cursor = e.target.result;
          if (cursor) {
            value.push(cursor.value);
            cursor.continue();
          } else {
            res(value);
          }
        };
      }).then((res) => (res.length > 0 ? setLocal(res) : null));
    };
  };

  useEffect(() => {
    getSessionStorage();
    getDataFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    local.sort((a, b) => a.word.localeCompare(b.word));
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
        handleDelete,
        getDataFromDB,
        changeLastIndex,
        changeRandom,

        lastIndex,
        setLastIndex,
        phrase,
        setPhrase,
        filtered,
        local,
        random,

        word,
        setWord,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
