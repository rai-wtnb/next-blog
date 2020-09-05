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
  return (
    <article>
      <header>
        {/* TODO -modify- */}
        {post.image ? (
          <Image
            src={post.image.fields.file.url}
            alt={post.image.fields.title}
            rounded
          />
        ) : (
          ''
        )}
        <H1>{post.title}</H1>
        <div>{post.publishDate}</div>
      </header>
      <ReactMarkdown source={post.body} />
    </article>
  );
};
