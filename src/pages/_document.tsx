import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { existsGaId, GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* Google Analytics */}
          {existsGaId ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          ) : null}
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
