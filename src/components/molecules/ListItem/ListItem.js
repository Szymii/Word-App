import React, { useContext } from 'react';
import reactStringReplace from 'react-string-replace';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import { StyledLi } from './ListItem.styles';
import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { StorageContext } from '../../../StorageProvider';
import { Link } from 'react-router-dom';

const ListItem = ({ word, meaning, onClick, phrase }) => {
  const { handleEdit } = useContext(StorageContext);
  const highlightMatches = () => {
    return reactStringReplace(word, phrase, (match, i) => {
      return <span key={i}>{match}</span>;
    });
  };

  return (
    <StyledLi>
      <div>
        <p>{highlightMatches()}</p>
        <span>{meaning.join(', ')}</span>
      </div>
      <IconBtn type="button" onClick={() => onClick(word)} label="delete">
        <TrashIcon />
      </IconBtn>
      <Link to="/add-word">
        <IconBtn
          type="button"
          onClick={() => handleEdit(word, meaning)}
          label="edit"
        >
          <FaEdit />
        </IconBtn>
      </Link>
    </StyledLi>
  );
};

export default ListItem;
