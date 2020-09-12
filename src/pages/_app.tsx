import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import 'semantic-ui-css/semantic.min.css';

import * as gtag from '../lib/gtag';
import store from '../ducks/store';
import '../styles/globals.css';
import { NextPage } from 'next';

const DEFAULT_SEO = {
  title: 'muku.',
  description:
    'muku.のブログです。エンジニア関連の学び、キャリア・生き方の考え方、買ってよかったもの・読んでよかった本の紹介をしていきます。',
  openGraph: {
    type: 'website',
    locale: 'ja',
    title: 'muku.',
    description:
      'muku.のブログです。エンジニア関連の学び、キャリア・生き方の考え方、買ってよかったもの・読んでよかった本の紹介をしていきます。',
    site_name: 'muku.',
  },
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
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;
