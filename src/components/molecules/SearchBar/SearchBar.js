import React, { useContext } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Wrapper } from './SearchBar.style';
import { StorageContext } from '../../../StorageProvider';
import useDimensions from '../../../hooks/useDimensions';

const SearchBar = () => {
  const { phrase, setPhrase } = useContext(StorageContext);
  const handleChange = (e) => {
    setPhrase(e.target.value);
  };

  const { dimensions } = useDimensions();

  return (
    <Wrapper mobile={dimensions.width < 860 ? true : null}>
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
