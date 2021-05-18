import React, { useContext } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Wrapper } from './SearchBar.style';
import { StorageContext } from '../../../StorageProvider';

const SearchBar = () => {
  const { phrase, setPhrase } = useContext(StorageContext);
  const handleChange = (e) => {
    setPhrase(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        value={phrase}
        onChange={handleChange}
        type="text"
        name="search bar"
      />
    </Wrapper>
  );
};

export default SearchBar;
