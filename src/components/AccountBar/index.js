import React from 'react';
import { AccountBarContainer, Avatar, IconButton, Count } from './styles';
import Icon from 'feather-icons-react';
import Bell from '../../../public/bell.svg';

const AccountBar = ({ notifications = 0, avatarUrl = 'https://avatars1.githubusercontent.com/u/43555167?s=400&u=77e26048715b6b0ac50484d210d86927792f6e8c&v=4' }) => {
  const handleClick = (buttonClicked) => {
    window.alert(buttonClicked);
  };
  return (
    <AccountBarContainer>
      <IconButton onClick={() => handleClick('Read Notificacions')}>
        <img src={Bell} alt='IconButtons' />
        {
          notifications > 0 && <Count>{notifications > 9 ? '9+' : notifications}</Count>
        }
      </IconButton>
      <IconButton onClick={() => handleClick('Account actions')}>
        <Avatar src={avatarUrl} />
        <Icon icon='chevron-down' size={15} stroke='#FFF' />
      </IconButton>
      <IconButton onClick={() => handleClick('Settings')}>
        <Icon icon='settings' size={22} stroke='#FFF' />
      </IconButton>
    </AccountBarContainer>
  );
};

export default AccountBar;
