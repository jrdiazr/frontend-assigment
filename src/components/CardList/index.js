import React from 'react';
import Card from './../Card/index';
import { Title, TitleContainer, TitleLine, CardListContainer } from './styles';

const dataMock = [
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75,
    image: 'https://conceptodefinicion.de/wp-content/uploads/2019/08/Medicina-.jpg'
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75,
    image: 'https://gacetamedica.com/wp-content/uploads/2020/01/gettyimages-1027752634_574618_20190425103040.jpg'
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75,
    image: 'https://www.doctorponce.com/wp-content/uploads/2017/03/medicina-pasada-de-moda-actual-pendiente-doctor-ponce.png'
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75,
    image: 'https://clinic-cloud.com/wp-content/uploads/2016/04/origen-de-la-medicina-640x450.jpg'
  },
  {
    title: 'Lorem ipsum dolor: Volutpat consequat',
    author: 'Lorem ipsum dolor',
    likes: 50,
    comments: 40,
    views: 75,
    image: 'https://www.65ymas.com/uploads/s1/16/10/15/medicina-interna.jpeg'
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
