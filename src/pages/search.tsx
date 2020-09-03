import React, { FC } from 'react';
import Link from 'next/link';
import { Layout } from '../components/layout';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

const BeforeImplement = styled.div`
  text-align: center;
`;

const BeforeImplimentImplementSearch: FC = () => {
  return (
    <Layout>
      <BeforeImplement>
        <img src='https://i.imgur.com/iRjGBZj.png' />
        <p>ごめんなさい。検索機能は後ほど実装する予定です。</p>
        <Link href='/'>
          <a>
            <Button icon>戻る</Button>
          </a>
        </Link>
      </BeforeImplement>
    </Layout>
  );
};

export default BeforeImplimentImplementSearch;
