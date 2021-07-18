import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { Form, Title } from './AddWords.styles';
import FormField from '../../components/molecules/FormField/FormField';
import IconBtn from '../../components/atoms/IconBtn/IconBtn';
import { Input } from '../../components/atoms/Input/Input';
import { ConfirmBtn } from '../../components/atoms/ConfirmBtn/ConfirmBtn';
import { StorageContext } from '../../StorageProvider';
import { useInfo } from '../../hooks/useInfo';

const AddWords = () => {
  const { word, setWord, handleClear, getDataFromDB } =
    useContext(StorageContext);
  const { dispatchInfo } = useInfo();

  const validate = ({ word, meaning }) => {
    const regex = /(.|\s)*\S/;
    if (!regex.test(word)) return false;
    if (meaning.some((element) => !regex.test(element))) return false;
    return true;
  };

  const handleMeaningChange = (e, i) => {
    const value = [...word.meaning];
    value[i] = e.target.value;
    setWord({ ...word, meaning: value });
  };

  const handleWordChange = (e) => {
    setWord({ ...word, word: e.target.value });
  };

  const handleAdd = () => {
    if (word.meaning.length < 3) {
      const value = [...word.meaning];
      value.push('');
      setWord({ ...word, meaning: value });
    }
  };

  const handleDelete = (i) => () => {
    const { meaning } = word;

    if (meaning.length > 1) {
      const value = [...meaning];
      value.splice(i, 1);
      setWord({ ...word, meaning: value });
    }

    if (meaning.length === 1 && meaning[0] !== '') {
      const value = [...meaning];
      value[i] = '';
      setWord({ ...word, meaning: value });
    }
  };

  const addDataToDB = () => {
    const request = indexedDB.open('localDB');

    request.onerror = (e) => {
      dispatchInfo(`Indexed DB: ${e.target.error.name}`);
    };

    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('dictionary', 'readwrite');
      const store = tx.objectStore('dictionary');

      const request = store.add({ ...word, id: uuidv4() });
      request.onsuccess = () => {
        handleClear();
        getDataFromDB();
        dispatchInfo('Successfully added!');
      };
    };
  };

  const updateData = () => {
    const request = indexedDB.open('localDB');

    request.onerror = (e) => {
      dispatchInfo(`Indexed DB: ${e.target.error.name}`);
    };

    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('dictionary', 'readwrite');
      const store = tx.objectStore('dictionary');

      const request = store.put(word);
      request.onsuccess = () => {
        handleClear();
        getDataFromDB();
        dispatchInfo('Successfully updated!');
      };
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!indexedDB) {
      dispatchInfo('Indexed DB is not supported');
      return;
    }
    if (validate(word)) {
      if (!word.id) {
        addDataToDB();
        return;
      }
      updateData();
    } else {
      dispatchInfo('All field are required.');
    }
  };

  return (
    <>
      <Form as="form" autoComplete="off" onSubmit={handleSubmit}>
        <Title>Your new word:</Title>
        <FormField>
          <Input
            type="text"
            value={word.word}
            name="word"
            onChange={handleWordChange}
          />
        </FormField>

        <Title>Meaning:</Title>
        {word.meaning.map((value, i) => (
          <FormField key={i}>
            <Input
              type="text"
              name="meaning"
              value={value}
              onChange={(e) => handleMeaningChange(e, i)}
            />
            <IconBtn type="button" onClick={handleDelete(i)}>
              <TrashIcon />
            </IconBtn>
            <IconBtn type="button" onClick={handleAdd}>
              <FaPlus />
            </IconBtn>
          </FormField>
        ))}
        <ConfirmBtn type="submit">Confirm</ConfirmBtn>
      </Form>
    </>
  );
};

export default AddWords;
