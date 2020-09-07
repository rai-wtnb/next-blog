import React, { FC } from 'react';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { changeIsDisplayMenu } from '../../ducks/category-menu/slice';
import { useAppDispatch } from '../../ducks/dispatch';
import { RootState } from '../../ducks/rootReducer';
import { useSelector } from 'react-redux';

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
const MenuStyle = css({
  display: 'none',
  '@media(max-width: 835px)': {
    display: 'inline-block',
    float: 'right',
  },
});
// css

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const onClickToggle = () => {
    dispatch(changeIsDisplayMenu());
  };
  const isDisplayMenu = useSelector(
    (state: RootState) => state.categoryMenu.isDisplayMenu
  );

  return (
    <GridHeader>
      <Muku>
        <Link href='/'>
          <a>muku.</a>
        </Link>
      </Muku>
      <span css={MenuStyle} onClick={onClickToggle}>
        <Button icon floated='right'>
          {isDisplayMenu ? <Icon name='close' /> : <Icon name='content' />}
        </Button>
      </span>
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
