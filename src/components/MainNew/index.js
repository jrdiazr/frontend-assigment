import React from 'react';
import { MainContainer } from './styles';
import CardList from './../CardList';
import Article from '../Article';

const MainNew = ({ article }) => {
  return (
    <MainContainer>
      <Article {...article} image={undefined} />
      <CardList />
    </MainContainer>
  );
};

export default MainNew;
