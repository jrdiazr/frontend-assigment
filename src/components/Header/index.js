import React from 'react';
import TransparentLogo from '../TransparentLogo';
import { HeaderContainer, Left, Rigth } from './styles';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import AccountBar from '../AccountBar';
import Link from 'next/link';

const Header = ({ searchText, notifications = 0, avatarUrl }) => {
  return (
    <HeaderContainer>
      <Left>
        <Link href='/'>
          <a>
            <TransparentLogo />
          </a>
        </Link>
        <SearchBar searchText={searchText} />
        <NavBar />
      </Left>
      <Rigth>
        <AccountBar notifications={notifications} avatarUrl={avatarUrl} />
      </Rigth>
    </HeaderContainer>
  );
};

export default Header;
