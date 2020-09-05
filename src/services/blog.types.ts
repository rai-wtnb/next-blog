export type Category = {
  fields: {
    name: string;
    slug: string;
    sort: number;
    definition: string;
  };
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: any;
  slug: string;
  body: string;
  publishDate: string;
  category: Category;
};
