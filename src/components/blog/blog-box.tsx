import React from 'react';
import Link from 'next/link';
import { Segment, Image, Grid } from 'semantic-ui-react';
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
const Date = styled.p`
  font-size: 0.8em;
  float: right;
`;
// css

type BlogBoxProps = {
  title: string;
  description: string;
  id: string;
  slug: string;
  image: any;
  publishDate: any;
  category: any;
  tags?: Array<string>;
};

export const BlogBox = (props: BlogBoxProps) => {
  return (
    <Article>
      <Segment>
        <Link href='/blog/[slug]' as={`/blog/${props.slug}`} passHref>
          <a>
            <Grid stackable>
              <Grid.Column width={5}>
                {/* TODO -modify- */}
                {props.image ? (
                  <Image
                    src={props.image.fields.file.url}
                    alt={props.image.fields.title}
                    rounded
                  />
                ) : (
                  ''
                )}
              </Grid.Column>
              <Grid.Column width={11}>
                <PostTitle>{props.title}</PostTitle>
                <p>{props.description}</p>
                <Date>{props.publishDate}</Date>
              </Grid.Column>
            </Grid>
          </a>
        </Link>
      </Segment>
    </Article>
  );
};
