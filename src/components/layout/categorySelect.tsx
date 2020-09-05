import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Segment } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { BlogApi, Category } from '../../services';

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
//css

const CategorySelect: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const api = new BlogApi();
    const getCategories = async () => {
      const categories = await api.fetchCategories();
      setCategories(categories);
    };
    getCategories();
  }, []);
  return (
    <GridCategory>
      <Grid columns='equal'>
        {categories.map((category) => {
          return (
            <Grid.Column key={category.slug}>
              <Link href={'/category/[slug]'} as={`/category/${category.slug}`}>
                <Segment css={categoryStyle}>
                  <a>{category.name}</a>
                </Segment>
              </Link>
            </Grid.Column>
          );
        })}
      </Grid>
    </GridCategory>
  );
};

export default CategorySelect;
