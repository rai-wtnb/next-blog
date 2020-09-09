import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { BlogPost } from '../../api';
import { H1 } from '../../styles/globalStyle';

// css
const ImageWrapper = styled.div`
  position: relative;
`;
const ImageStyle = css({
  opacity: '0.6',
});
const OnImage = styled.div`
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  h1 {
    border-bottom: solid 1px #ffffff;
  }
`;
const BodyStyle = css({
  h2: {
    fontSize: '1.25em',
  },
});
// css

type BlogDetailProps = {
  post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
  const { post } = props;
  return (
    <article>
      <header>
        {/* TODO -modify- */}
        <ImageWrapper>
          <Image
            css={ImageStyle}
            src={post.image.fields.file.url}
            alt={post.image.fields.title}
            rounded
          />
          <OnImage>
            <H1>{post.title}</H1>
            <p>{post.publishDate}</p>
          </OnImage>
        </ImageWrapper>
      </header>
      <ReactMarkdown css={BodyStyle} source={post.body} />
    </article>
  );
};
