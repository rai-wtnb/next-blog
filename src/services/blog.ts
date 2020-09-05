import { ContentfulClientApi, createClient } from 'contentful';
import { BlogPost } from './blog.types';
import moment from 'moment';

export class BlogApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  convertPost = (rawData): BlogPost => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title,
      description: rawPost.description,
      image: rawPost.image,
      slug: rawPost.slug,
      body: rawPost.body,
      publishDate: moment(rawPost.publishDate).format('DD MMM YYYY'),

      tags: rawPost.tags,
      metaTitle: rawPost.metaTitle,
      metaDescription: rawPost.metaDescription,
      metaImage: rawPost.metaImage
        ? rawPost.metaImage.fields.file.url.replace('//', 'http://')
        : '',
    };
  };

  async fetchBlogEntries(): Promise<Array<BlogPost>> {
    return await this.client
      .getEntries({
        content_type: 'blogPost',
        order: '-fields.publishDate',
      })
      .then((entries) => {
        if (entries && entries.items && entries.items.length > 0) {
          const blogPosts = entries.items.map((entry) =>
            this.convertPost(entry)
          );
          return blogPosts;
        }
        return [];
      });
  }

  async fetchBlogById(slug: string): Promise<BlogPost> {
    return await this.client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug[in]': slug,
      })
      .then((entries) => {
        if (entries && entries.items && entries.items.length > 0) {
          const post = this.convertPost(entries.items[0]);
          return post;
        }
        return null;
      });
  }
}
