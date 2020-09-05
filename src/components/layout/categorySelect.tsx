import React, { FC, useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

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

type CategoryProps = {};

const CategorySelect: FC = () => {
  return (
    <GridCategory>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment css={categoryStyle}>
            <a>エンジニア</a>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment css={categoryStyle}>
            <a>キャリア</a>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment css={categoryStyle}>
            <a>買ってよかったもの</a>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment css={categoryStyle}>
            <a>本</a>
          </Segment>
        </Grid.Column>
      </Grid>
    </GridCategory>
  );
};

export default CategorySelect;
