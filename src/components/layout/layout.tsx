import React from 'react';
import styled from '@emotion/styled';

import { ErrorBoundary } from '../error-boundary';
import { Header, Footer } from './index';
import CategorySelect from './categorySelect';

const Entire = styled.div`
  display: grid;
  grid-template:
    '...... header   ......'
    '...... ......   ......' 10px
    '...... category ......'
    '...... ......   ......' 20px
    '...... center   ......' 1fr
    '...... ......   ......' 40px
    'footer footer   footer'
    / 20% 1fr 20%;
  @media (max-width: 835px) {
    display: grid;
    grid-template:
      '...... header   ......'
      '...... ......   ......' 40px
      '...... category ......'
      '...... ......   ......' 40px
      '...... center   ......' 1fr
      '...... ......   ......' 40px
      'footer footer   footer'
      / 5% 1fr 5%;
  }
`;

const GridCenter = styled.main`
  grid-area: center;
`;

export const Layout = (props) => {
  return (
    <Entire>
      <Header />
      <CategorySelect />
      <ErrorBoundary>
        <GridCenter>{props.children}</GridCenter>
      </ErrorBoundary>
      <Footer />
    </Entire>
  );
};
