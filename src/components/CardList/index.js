import React from 'react';
import Card from './../Card/index';
import { Title, TitleContainer, TitleLine, CardListContainer } from './styles';

const dataMock = [
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75
  }
];

const CardList = ({ cards = dataMock }) => {
  return (
    <div>
      <TitleContainer>
        <Title>Noticias relacionadas</Title>
        <TitleLine />
      </TitleContainer>
      <CardListContainer>
        {
          cards.map((card, i) => <Card key={`card${i}`} {...card} />)
        }
      </CardListContainer>
    </div>
  );
};

export default CardList;
