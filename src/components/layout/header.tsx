import React from 'react';
import Link from 'next/link';
import { Button, Icon, Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';

// css
const GridHeader = styled.header`
  grid-area: header;
`;
const Muku = styled.div`
  height: 40px;
  font-size: 25px;
  float: left;
  display flex;
  align-items: flex-end;
`;
// css

export const Header = () => {
  return (
    <GridHeader>
      <Muku>
        <Link href='/'>
          <a>muku.</a>
        </Link>
      </Muku>
      <Link href='/search'>
        <a>
          <Button icon floated='right'>
            <Icon name='search' />
          </Button>
        </a>
      </Link>
      <a
        href='https://github.com/rai-wtnb'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button icon floated='right'>
          <Icon name='github' />
        </Button>
      </a>
      <a
        href='https://twitter.com/mmuu_kkuu'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button icon floated='right'>
          <Icon name='twitter' />
        </Button>
      </a>
    </GridHeader>
  );
};
