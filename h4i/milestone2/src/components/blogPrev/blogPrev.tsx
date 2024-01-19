import React from 'react';
import Link from 'next/link';
import { BlogPreview } from '@/app/blogData';

export default function BlogPrev(props: BlogPreview) {
  return (
    <div>
      <Link href={`blog/${props.slug}`}>
        <h3>{props.title} </h3>
      </Link>
      <p>{props.date}</p>
      <p>{props.description}</p>
    </div>
  );
}