import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta
            name='keywords'
            content='muku.,muku,むく,プログラミング,エンジニア,キャリア,本,読書,物欲,副業'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
