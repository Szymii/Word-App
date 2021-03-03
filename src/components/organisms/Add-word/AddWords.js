import React from 'react';
import { Form, Title } from './AddWords.styles';
import FormField from '../../molecules/FormField/FormField';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { Input } from '../../atoms/Input/Input';
import { ConfirmBtn } from '../../atoms/ConfirmBtn/ConfirmBtn';
import { FaPlus } from 'react-icons/fa';

const AddWords = () => {
  return (
    <Form as="form">
      <Title>Your new word:</Title>
      <FormField>
        <Input type="text" />
      </FormField>

      <Title>Meaning:</Title>
      <FormField>
        <Input type="text" />
        <IconBtn />
        <IconBtn icon={<FaPlus />} />
      </FormField>
      <ConfirmBtn type="submit">Confirm</ConfirmBtn>
    </Form>
  );
};

export default AddWords;
