import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import 'semantic-ui-css/semantic.min.css';

import store from '../ducks/store';
import '../styles/globals.css';

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

export default class CustomApp extends App {
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
