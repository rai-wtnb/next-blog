import React, { FC } from 'react';
import Link from 'next/link';
import { Grid, Segment, Menu } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { useAppDispatch } from '../../ducks/dispatch';
import { changeIsDisplayMenu } from '../../ducks/category-menu/slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../ducks/rootReducer';

// css
const GridCategory = styled.div`
  grid-area: category;
`;
const categoryStyle = css({
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.6',
  },
});
const PcMenu = styled.span`
  @media (max-width: 835px) {
    display: none;
  } ;
`;
const ToggleMenu = styled.span`
  display: none;
  @media (max-width: 835px) {
    display: block;
    position: absolute;
    top: 62px;
    right: 5%;
    z-index: 10;
  } ;
`;
const MenuTop = styled.p`
  color: #707a7b;
  text-align: center;
  background-color: #red;
`;
//css

const CategorySelect: FC = () => {
  const dispatch = useAppDispatch();
  const onClickToggle = () => {
    dispatch(changeIsDisplayMenu());
  };
  const isDisplayMenu = useSelector(
    (state: RootState) => state.categoryMenu.isDisplayMenu
  );
  const categories = [
    { name: 'エンジニア', slug: 'engineer' },
    { name: 'キャリア', slug: 'career' },
    { name: '買ってよかったもの', slug: 'mono' },
    { name: 'おすすめの本', slug: 'book' },
  ];

  // TODO -DRY-
  return (
    <GridCategory>
      <PcMenu>
        <Grid columns='equal' stackable>
          {categories.map((category) => (
            <Grid.Column key={category.slug}>
              <Link href={'/category/[slug]'} as={`/category/${category.slug}`}>
                <Segment css={categoryStyle}>
                  <a>{category.name}</a>
                </Segment>
              </Link>
            </Grid.Column>
          ))}
        </Grid>
      </PcMenu>

      {isDisplayMenu ? (
        <ToggleMenu>
          <Menu vertical>
            <Menu.Item>
              <MenuTop>Category.</MenuTop>
            </Menu.Item>
            {categories.map((category) => (
              <Menu.Item
                css={categoryStyle}
                onClick={onClickToggle}
                key={category.slug}
              >
                <Link
                  href={'/category/[slug]'}
                  as={`/category/${category.slug}`}
                >
                  <a>{category.name}</a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </ToggleMenu>
      ) : (
        ''
      )}
    </GridCategory>
  );
};

export default CategorySelect;
