import React from 'react';
import Head from 'next/head';

import { Layout } from '../../components/layout';
import { BlogApi, BlogPost } from '../../api';
import { BlogBox } from '../../components/blog';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Segment } from 'semantic-ui-react';
import { H1 } from '../../styles/globalStyle';
import styled from '@emotion/styled';

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
    <>
      <Head>
        <meta property="og:image" content="https://mukunoblog.com/share.png" />
      </Head>
      <Layout>
        <CategoryWrapper>
          <H2>{slug}.</H2>
        </CategoryWrapper>
        {categorised && renderBlogList(categorised)}
        <Segment>
          <H1>comming soon...</H1>
          <p>記事作成中です！</p>
        </Segment>
      </Layout>
    </>
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
