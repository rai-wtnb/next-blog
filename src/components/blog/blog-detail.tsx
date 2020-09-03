import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from 'semantic-ui-react';

import { BlogPost } from '../../services';
import { H1 } from '../../styles/globalStyle';

type BlogDetailProps = {
  post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
  const { post } = props;
  // const mainTag = post.tags.length > 0 ? post.tags[0] : '';
  return (
    <article>
      <header>
        <Image src={post.image.fields.file.url} rounded />
        <H1>{post.title}</H1>
        <div>{post.publishDate}</div>
        {/* <div>{`${post.publishedDate} / ${mainTag}`}</div> */}
      </header>
      <ReactMarkdown source={post.body} />
    </article>
  );
};
