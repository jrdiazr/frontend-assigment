import React from 'react';
import { Container, SearchIconContainer, TextInput } from './styles';
import Icon from 'feather-icons-react';

const SearchBar = ({ searchText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`You are searching ${searchText.value} text`);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <SearchIconContainer type='submit'>
        <Icon icon='search' size={20} stroke='#6cb637' />
      </SearchIconContainer>
      <TextInput placeholder='¿Qué estás buscando?' {...searchText} />
    </Container>
  );
};

export default SearchBar;
