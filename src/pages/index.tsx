import React, { FC } from 'react';
import { Button } from 'semantic-ui-react';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>muku.</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Button>muku.</Button>
      </main>
    </div>
  );
};

export default Home;
