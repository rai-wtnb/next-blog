import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout';
import { BlogApi, BlogPost } from '../../services';
import { BlogBox } from '../../components/blog';
import { H1 } from '../../styles/globalStyle';

const CategoryPage: FC = () => {
  const [categorisedBlogPosts, setCategorisedBlogPosts] = useState<BlogPost[]>(
    []
  );
  const router = useRouter();
  const slug = router.query.slug || [];

  useEffect(() => {
    const api = new BlogApi();
    const getBlogPosts = async () => {
      const blogPosts = await api.fetchBlogEntries();
      const categorised = blogPosts.filter(
        (post) => post.category.fields.slug === slug
      );
      setCategorisedBlogPosts(categorised);
    };
    getBlogPosts();
  }, [slug]);

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
        {categorisedBlogPosts.length > 0 &&
          renderBlogList(categorisedBlogPosts)}
        {categorisedBlogPosts.length == 0 && (
          <div>
            <H1>comming soon...</H1>
            <p>記事作成中です！</p>
          </div>
        )}
      </Layout>
    </>
  );
};

export default CategoryPage;
