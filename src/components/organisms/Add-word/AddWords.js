import React, { useState } from 'react';
import { Form, Title } from './AddWords.styles';
import FormField from '../../molecules/FormField/FormField';
import DeleteBtn from '../../atoms/DeleteBtn/DeleteBtn';
import AddBtn from '../../atoms/AddBtn/AddBtn';
import { Input } from '../../atoms/Input/Input';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';

const AddWords = () => {
  const [meaning, setMeaning] = useState(['', '']);
  const [word, setWord] = useState('');

  const handleMeaningChange = (e, i) => {
    const value = [...meaning];
    value[i] = e.target.value;
    setMeaning(value);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word, meaning);
  };

  const handleAdd = () => {
    if (meaning.length < 3) {
      const value = [...meaning];
      value.push('');
      setMeaning(value);
    }
  };

  const handleDelete = (i) => {
    console.log(i);

    if (meaning.length > 1) {
      const value = [...meaning];
      const removed = value.splice(i, 1);
      console.log(i, removed);
      setMeaning(value);
    }
  };

  return (
    <Form as="form" onSubmit={handleSubmit}>
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
          <DeleteBtn type="button" onClick={() => handleDelete(i)} />
          <AddBtn type="button" onClick={handleAdd} />
        </FormField>
      ))}
      <ConfirmBtn type="submit">Confirm</ConfirmBtn>
    </Form>
  );
};

export default AddWords;
