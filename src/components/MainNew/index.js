import React from 'react';
import { MainContainer } from './styles';
import CardList from './../CardList';

const ArticleLayout = () => {
  return (
    <MainContainer>
      <h1>Article</h1>
      <CardList />
    </MainContainer>
  );
};

export default ArticleLayout;
