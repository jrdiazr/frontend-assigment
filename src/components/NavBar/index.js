import React from 'react';
import Icon from 'feather-icons-react';
import { NavContainer, Anchor } from './styles';
import Link from 'next/link';

const Navbar = () => {
  return (
    <NavContainer>
      <Icon icon='home' size={20} stroke='#FFF' />
      <Link href='/'>
        <Anchor>Inicio</Anchor>
      </Link>
      <Icon icon='chevron-down' size={15} stroke='#FFF' />
    </NavContainer>
  );
};

export default Navbar;
