import React from 'react';

import Link from 'next/link';

const defaultProps = {
  author: '',
  description: '',
  publishedDate: '',
  readingTime: '',
  className: '',
};

type BlogBoxProps = {
  id: string;
  slug: string;
  imageUrl?: string;
  title: string;
  tags?: Array<string>;
} & typeof defaultProps;

export const BlogBox = (props: BlogBoxProps) => {
  return (
    <div>
      <article>
        <div>
          {props.tags && props.tags.length > 0 && <span>{props.tags[0]}</span>}

          <Link href='/blog/[slug]' as={`/blog/${props.slug}`} passHref>
            <a>
              <h3>{props.title}</h3>
            </a>
          </Link>
          <span>
            by <a href='#'>{props.author}</a>
          </span>
        </div>

        <div>
          <div>{props.description}</div>
        </div>
      </article>
    </div>
  );
};

BlogBox.defaultProps = defaultProps;
