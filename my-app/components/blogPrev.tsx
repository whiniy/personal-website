import React from 'react';
 
import style from './blogPreview.module.css'
import { BlogType } from '@/app/blogData';

export default function BlogPreview(props: BlogType) {
  return (
    <div>
      <h2> {props.title} </h2>
      <div>
            <p>{props.date}</p>
			<p>{props.description}</p>

      </div>
	  </div>
  );
}