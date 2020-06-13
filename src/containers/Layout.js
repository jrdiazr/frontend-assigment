import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/';

const Layout = ({ children, searchText, notifications }) => {
  return (
    <>
      <Header searchText={searchText} notifications={notifications} />
      {
        children
      }
      <Footer />
    </>
  );
};

export default Layout;
