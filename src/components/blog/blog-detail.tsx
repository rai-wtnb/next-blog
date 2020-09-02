import React from 'react';
import { BlogPost } from '../../services';
import ReactMarkdown from 'react-markdown';

type BlogDetailProps = {
  post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
  const { post } = props;
  const mainTag = post.tags.length > 0 ? post.tags[0] : '';
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <div>{`${post.publishedDate} / ${mainTag}`}</div>
      </header>
      <section style={{ overflowY: 'inherit', marginBottom: '2em' }}>
        <ReactMarkdown source={post.body} />
      </section>
    </article>
  );
};
