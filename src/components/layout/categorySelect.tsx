import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Segment, Menu } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { BlogApi, Category } from '../../api';
import { useCategoryMenuState } from '../../ducks/category-menu/selector';

// css
const GridCategory = styled.div`
  grid-area: category;
`;
const categoryStyle = css({
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.5',
  },
});
const PcMenu = css({
  '@media (max-width: 835px)': {
    display: 'none',
  },
});
const ToggleMenu = css({
  display: 'none',
  '@media (max-width: 835px)': {
    display: 'inline-block',
    position: 'absolute',
    top: '12%',
    right: '5%',
    zIndex: '10',
  },
});
//css

const CategorySelect: FC = () => {
  // TODO -using redux toolkit-
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const api = new BlogApi();
    const getCategories = async () => {
      const categories = await api.fetchCategories();
      setCategories(categories);
    };
    getCategories();
  }, []);
  //

  const categoryMenuState = useCategoryMenuState().categoryMenu;

  return (
    <GridCategory>
      <span css={PcMenu}>
        <Grid columns='equal' stackable>
          {categories.map((category) => {
            return (
              <Grid.Column key={category.slug}>
                <Link
                  href={'/category/[slug]'}
                  as={`/category/${category.slug}`}
                >
                  <Segment css={categoryStyle}>
                    <a>{category.name}</a>
                  </Segment>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid>
      </span>
      {/* max-width:835px */}
      {categoryMenuState.isDisplayMenu ? (
        <span css={ToggleMenu}>
          <Menu vertical>
            {categories.map((category) => {
              return (
                <Menu.Item key={category.slug} css={categoryStyle}>
                  <Link
                    href={'/category/[slug]'}
                    as={`/category/${category.slug}`}
                  >
                    <a>{category.name}</a>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </span>
      ) : (
        ''
      )}
    </GridCategory>
  );
};

export default CategorySelect;
