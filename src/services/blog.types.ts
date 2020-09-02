export type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: any;
  slug: string;
  body: string;
  publishedDate: string;

  tags: Array<string>;
  metaTitle: string;
  metaDescription: string;
  metaImage?: any;
};
