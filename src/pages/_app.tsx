import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import 'semantic-ui-css/semantic.min.css';

import * as gtag from '../lib/gtag';
import store from '../ducks/store';
import '../styles/globals.css';

const DEFAULT_SEO = {
  title: 'mukunoblog',
  description:
    'muku.のブログです。エンジニア関連の学び・生き方・買ってよかったもの・読んでよかった本の紹介をしていきます。',
  openGraph: {
    type: 'website',
    locale: 'ja',
    title: 'mukunoblog',
    description:
      'muku.のブログです。エンジニア関連の学び・生き方・買ってよかったもの・読んでよかった本の紹介をしていきます。',
    site_name: 'mukunoblog',
    images: [
      {
        url: 'https://mukunoblog.com/share.png',
        width: 800,
        height: 600,
        alt: 'muku.のブログ',
      },
    ]
  },
  twitter: {
    handle: '@mmuu_kkuu',
    cardType: 'summary_large_image',
  }
};

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta property="og:image" content="https://mukunoblog.com/share.png" />
      </Head>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;
