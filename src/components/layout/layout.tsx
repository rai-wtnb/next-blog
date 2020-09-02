import React from 'react';
import { ErrorBoundary } from '../error-boundary';
import { Header, Footer } from './index';

export const Layout = (props) => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <main className='container mt-3'>{props.children}</main>
      </ErrorBoundary>
      <Footer />
    </>
  );
};
