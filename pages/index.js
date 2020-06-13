import React from 'react';
import useInput from '../src/hooks/useInput';
import Layout from '../src/containers/Layout';
import MainNew from '../src/components/MainNew';
import Api from '../src/utils/api';

const index = ({ article }) => {
  const searchText = useInput('');
  return (
    <>
      <Layout searchText={searchText} notifications={13}>
        <MainNew article={article} />
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

export async function getStaticProps () {
  const data = await Api.getArticles();
  return {
    props: {
      article: data
    }
  };
}

export default index;
