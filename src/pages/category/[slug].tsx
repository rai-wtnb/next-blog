import React from 'react';
import { Layout } from '../../components/layout';
import { BlogApi, BlogPost, Category } from '../../api';
import { BlogBox } from '../../components/blog';
import { H1 } from '../../styles/globalStyle';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Segment } from 'semantic-ui-react';

type CategoryPageProps = {
  slug: string;
  blogPosts: BlogPost[];
};

const CategoryPage: NextPage<CategoryPageProps> = (props) => {
  const { slug, blogPosts } = props;
  console.log(slug);
  const categorised = blogPosts.filter(
    (post) => post.category.fields.slug === slug
  );
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
      <Layout>
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
  return {
    props: {
      slug,
      blogPosts,
    },
  };
};

export default CategoryPage;
