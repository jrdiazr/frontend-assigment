import React from 'react';
import Header from './../src/components/Header';
import useInput from './../src/hooks/useInput';

const index = () => {
  const searchText = useInput('');
  return (
    <>
      <Header searchText={searchText} notifications={13} />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui;
          }
        `}
      </style>
    </>
  );
};

export default index;
