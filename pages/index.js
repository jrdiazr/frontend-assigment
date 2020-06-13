import React from 'react';
import useInput from '../src/hooks/useInput';
import Layout from '../src/containers/Layout';
import MainNew from '../src/components/MainNew';

const index = () => {
  const searchText = useInput('');
  return (
    <>
      <Layout searchText={searchText} notifications={13}>
        <MainNew />
      </Layout>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui;
            font-size: 14px;
            background: #edebeb;
          }
        `}
      </style>
    </>
  );
};

export default index;
