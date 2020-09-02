import React, { FC } from 'react';
import Head from 'next/head';

import { Layout } from '../components/layout';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>muku.</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout></Layout>
    </div>
  );
};

export default Home;
