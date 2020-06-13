import React from 'react';
import Icon from 'feather-icons-react';
import { NavContainer, Anchor } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <Icon icon='home' size={20} stroke='#FFF' />
      <Anchor href='/'>Inicio</Anchor>
      <Icon icon='chevron-down' size={15} stroke='#FFF' />
    </NavContainer>
  );
};

export default Navbar;
