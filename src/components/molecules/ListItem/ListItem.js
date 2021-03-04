import React from 'react';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { StyledLi } from './ListItem.styles';
import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const ListItem = ({ word, meaning }) => {
  const handleDelete = () => {
    console.log(word);
  };

  return (
    <StyledLi>
      <div>
        <p>{word}</p>
        <span>{meaning.join(', ')}</span>
      </div>
      <IconBtn type="button" onClick={handleDelete}>
        <TrashIcon />
      </IconBtn>
      <IconBtn type="button">
        <FaEdit />
      </IconBtn>
    </StyledLi>
  );
};

export default ListItem;
