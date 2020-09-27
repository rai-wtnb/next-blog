import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import styled from '@emotion/styled';

import { BlogApi, BlogPost } from '../api';
import { Layout } from '../components/layout';
import { BlogBox } from '../components/blog';

// css
const H2 = styled.h2`
  text-align: center;
`;
// css

type BlogPageProps = {
  entries: Array<BlogPost>;
};

export const BlogPage: NextPage<BlogPageProps> = (props: BlogPageProps) => {
  const { entries } = props;

  const renderBlogList = (entries) =>
    entries.map((entry, i) => {
      return (
        <BlogBox
          key={i}
          id={entry.id}
          slug={entry.slug}
          image={entry.image}
          title={entry.title}
          description={entry.description}
          publishDate={entry.publishDate}
          category={entry.category}
          tags={entry.tags}
        />
      );
    });

  return (
    <Layout>
      <H2>latest.</H2>
      {renderBlogList(entries)}
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const api = new BlogApi();
  const entries = await api.fetchBlogEntries();
  return {
    props: {
      entries,
    },
  };
};

export default BlogPage;
