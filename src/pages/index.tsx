import React from 'react';
import { Loader } from 'semantic-ui-react';

import { BlogApi, BlogPost } from '../services';
import { Layout } from '../components/layout';
import { BlogBox } from '../components/blog';

type BlogPageProps = {
  entries: Array<BlogPost>;
};

class BlogPage extends React.Component<BlogPageProps> {
  static async getInitialProps() {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
  }

  renderBlogList = (entries) =>
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

  render() {
    const { entries } = this.props;
    return (
      <Layout>
        {entries.length > 0 && this.renderBlogList(entries)}
        {entries.length == 0 && <Loader />}
      </Layout>
    );
  }
}

export default BlogPage;
