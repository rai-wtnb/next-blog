import App from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import 'semantic-ui-css/semantic.min.css';

import '../styles/globals.css';

const DEFAULT_SEO = {
  title: 'muku.',
  description: "muku's blog",
  openGraph: {
    type: 'website',
    locale: 'ja',
    title: 'muku.',
    description: "muku's blog",
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
      <>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
