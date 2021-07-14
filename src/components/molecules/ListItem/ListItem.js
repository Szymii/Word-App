import React, { useContext } from 'react';
import reactStringReplace from 'react-string-replace';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import {
  StyledLi,
  Wrapper,
  PrimaryValue,
  SecondaryValue,
  Highlighted,
} from './ListItem.styles';
import { FaTrash as TrashIcon } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { StorageContext } from '../../../StorageProvider';
import { Link } from 'react-router-dom';

const ListItem = ({ word, meaning, onClick, phrase }) => {
  const { handleEdit } = useContext(StorageContext);
  const highlightMatches = () => {
    return reactStringReplace(word, phrase, (match, i) => {
      return <Highlighted key={i}>{match}</Highlighted>;
    });
  };

  return (
    <StyledLi>
      <Wrapper>
        <PrimaryValue>{highlightMatches()}</PrimaryValue>
        <SecondaryValue>{meaning.join(', ')}</SecondaryValue>
      </Wrapper>
      <IconBtn type="button" onClick={() => onClick(word)} label="delete">
        <TrashIcon />
      </IconBtn>
      <Link to="/add-word" tabIndex="-1">
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
