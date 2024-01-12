/*import React from 'react';
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
}*/

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <Link href={`blog/${props.slug}`}>
        <h3>{props.title} </h3>
      </Link>
      <p className='style.publish-date'>{props.date}</p>
          <Image src={props.image} alt="Blog Image" width={208} height={200}/>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}