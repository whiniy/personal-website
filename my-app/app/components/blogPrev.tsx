import React from 'react';
import Link from 'next/link';

type Blog = {
  title: string;
  date: string;
  slug: string;
}

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <Link href={`blog/${props.slug}`}>
        <h3>{props.title} </h3>
      </Link>
      <p>{props.date}</p>
    </div>
  );
}