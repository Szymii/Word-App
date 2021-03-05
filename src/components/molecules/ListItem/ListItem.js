import React, { useContext } from 'react';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { StyledLi } from './ListItem.styles';
import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { StorageContext } from '../../../StorageProvider';
import { Link } from 'react-router-dom';

const ListItem = ({ word, meaning, onClick }) => {
  const { handleEdit } = useContext(StorageContext);
  return (
    <StyledLi>
      <div>
        <p>{word}</p>
        <span>{meaning.join(', ')}</span>
      </div>
      <IconBtn type="button" onClick={() => onClick(word)}>
        <TrashIcon />
      </IconBtn>
      <Link to="/add-word">
        <IconBtn type="button" onClick={() => handleEdit(word, meaning)}>
          <FaEdit />
        </IconBtn>
      </Link>
    </StyledLi>
  );
};

export default ListItem;
