import React from 'react';
import AdSense from 'react-adsense';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Layout } from '../../components/layout';
import { BlogDetail } from '../../components/blog';
import { BlogApi, BlogPost } from '../../api';

type BlogDetailPageProps = {
  post: BlogPost;
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = (props) => {
  const { post } = props;
  return (
    <Layout>
      <div>{post && <BlogDetail post={post} />}</div>
      <AdSense.Google
        style={{ display: "block" }}
        format="auto"
        client='ca-pub-3259446121033659'
        slot='9195810116'
        responsive="true"
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const api = new BlogApi();
  const blogPosts = await api.fetchBlogEntries();
  const slugs = blogPosts.map((post) => post.slug);
  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug;
  const api = new BlogApi();
  const post = await api.fetchBlogDetail(slug as string);
  return {
    props: {
      post,
    },
  };
};

export default BlogDetailPage;
