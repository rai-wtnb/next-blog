import React from 'react';
import styled from '@emotion/styled';

import { ErrorBoundary } from '../error-boundary';
import { Header, Footer } from './index';
import { H1 } from '../../styles/globalStyle';

const Entire = styled.div`
  display: grid;
  grid-template:
    '...... ...... ......' 10px
    '...... header ......'
    '...... ...... ......' 60px
    '...... center ......' 1fr
    '...... footer ......'
    / 20% 1fr 20%;
`;

const GridCenter = styled.main`
  grid-area: center;
`;

export const Layout = (props) => {
  return (
    <Entire>
      <Header />
      <ErrorBoundary>
        <GridCenter>{props.children}</GridCenter>
      </ErrorBoundary>
      <Footer />
    </Entire>
  );
};
