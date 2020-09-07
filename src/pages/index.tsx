import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import { BlogApi, BlogPost } from '../api';
import { Layout } from '../components/layout';
import { BlogBox } from '../components/blog';
import { RootState } from '../ducks/rootReducer';
import { useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

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

  return <Layout>{renderBlogList(entries)}</Layout>;
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
