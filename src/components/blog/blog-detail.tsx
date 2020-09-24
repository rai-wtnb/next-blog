import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { BlogPost } from '../../api';

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
    font-family: 'Sawarabi Gothic', sans-serif;
    font-size: 1.563rem;
  @media (max-width: 835px) {
    font-size: 1rem;
  }
  }
`;
const BodyStyle = css({
  p: {
    whiteSpace: 'pre-wrap',
    lineHeight: '1.8',
    padding: '16px 0',
  },
  paddingTop: '40px',
  a: {
    color: '#ef8463',
    textDecoration: 'underline #ef8463',
  },
  h2: {
    fontSize: '1.25em',
    padding: '10px 5px',
    borderRadius: '5px',
    backgroundColor: '#e8e6e2',
  },
  strong: {
    color: '#ef8463',
    fontWeight: 'normal',
  },
  img: {
    width: '80%',
    borderRadius: '5px',
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
            <h1>{post.title}</h1>
            <p>{post.publishDate}</p>
          </OnImage>
        </ImageWrapper>
      </header>
      <ReactMarkdown css={BodyStyle} source={post.body} />
    </article>
  );
};
