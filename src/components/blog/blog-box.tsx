import React from 'react';
import Link from 'next/link';
import { Segment, Image, Grid, Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

// css
const PostTitle = styled.p`
  font-size: 20px;
`;
const Article = styled.article`
  padding-bottom: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
// css

type BlogBoxProps = {
  title: string;
  description: string;
  id: string;
  slug: string;
  image: any;
  publishDate: any;
  tags?: Array<string>;
};

export const BlogBox = (props: BlogBoxProps) => {
  return (
    <Article>
      <Segment>
        {/* {props.tags && props.tags.length > 0 && (
              <span>{props.tags[0]}</span>
            )} */}
        <Link href='/blog/[slug]' as={`/blog/${props.slug}`} passHref>
          <a>
            <Grid>
              <Grid.Column width={4}>
                <Image src={props.image.fields.file.url} rounded />
              </Grid.Column>
              <Grid.Column width={9}>
                <PostTitle>{props.title}</PostTitle>
                <p>{props.description}</p>
                <p>{props.publishDate}</p>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button icon>category</Button>
              </Grid.Column>
            </Grid>
          </a>
        </Link>
      </Segment>
    </Article>
  );
};
