import React from 'react';
import TransparentLogo from '../TransparentLogo';
import { HeaderContainer, Left, Rigth } from './styles';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import AccountBar from '../AccountBar';

const Header = ({ searchText, notifications = 0, avatarUrl }) => {
  return (
    <HeaderContainer>
      <Left>
        <TransparentLogo />
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
