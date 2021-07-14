import React, { useContext } from 'react';
import { Form, Title } from './AddWords.styles';
import FormField from '../../molecules/FormField/FormField';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { Input } from '../../atoms/Input/Input';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { StorageContext } from '../../../StorageProvider';
import { useInfo } from '../../../hooks/useInfo';

import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const AddWords = () => {
  const { meaning, setMeaning, word, setWord, updateLocal } =
    useContext(StorageContext);
  const { dispatchInfo } = useInfo();
  const validate = (word, meaning) => {
    const regex = /(.|\s)*\S/;
    if (!regex.test(word)) return false;
    if (meaning.some((element) => !regex.test(element))) return false;
    return true;
  };

  const handleMeaningChange = (e, i) => {
    const value = [...meaning];
    value[i] = e.target.value;
    setMeaning(value);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleAdd = () => {
    if (meaning.length < 3) {
      const value = [...meaning];
      value.push('');
      setMeaning(value);
    }
  };

  const handleDelete = (i) => () => {
    if (meaning.length > 1) {
      const value = [...meaning];
      value.splice(i, 1);
      setMeaning(value);
    }
    if (meaning.length === 1 && meaning[0] !== '') {
      const value = [...meaning];
      value[i] = '';
      setMeaning(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(word, meaning)) {
      localStorage.setItem(word, JSON.stringify(meaning));
      updateLocal();
      setMeaning(['']);
      setWord('');
      dispatchInfo('Successfully added!');
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
            value={word}
            name="word"
            onChange={handleWordChange}
          />
        </FormField>

        <Title>Meaning:</Title>
        {meaning.map((value, i) => (
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
