import React from 'react';
import styled from '@emotion/styled';

import { Layout } from '../../components/layout';
import { BlogApi, BlogPost } from '../../api';
import { BlogBox } from '../../components/blog';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//css
const CategoryWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  display: inline-box;
`;
//css

type CategoryPageProps = {
  categorised: BlogPost[];
  slug: string;
};

const CategoryPage: NextPage<CategoryPageProps> = (props) => {
  const { categorised, slug } = props;
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
      <CategoryWrapper>
        <H2>{slug}.</H2>
      </CategoryWrapper>
      {categorised && renderBlogList(categorised)}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: 'engineer' } },
    { params: { slug: 'career' } },
    { params: { slug: 'mono' } },
    { params: { slug: 'book' } },
  ];
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug;
  const api = new BlogApi();
  const blogPosts = await api.fetchBlogEntries();
  const categorised = blogPosts.filter(
    (post) => post.category.fields.slug === slug
  );
  return {
    props: {
      categorised,
      slug,
    },
  };
};

export default CategoryPage;
