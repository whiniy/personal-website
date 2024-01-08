import React from 'react';
import Link from "next/link"
import style from './blogPreview.module.css'
import { BlogType } from '@/app/blogData';

export default function BlogPreview(props: BlogType) {
  return (
    <div>
      <h2> {props.title} </h2>
      <div>
            <p>{props.date}</p>
			<p>{props.description}</p>
      <Link href={props.slug}>
        <button className="blog-btn">Read More</button>
      </Link>

      </div>
	  </div>
  );
}