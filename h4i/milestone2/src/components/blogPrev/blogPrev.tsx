import React from 'react';
import Link from 'next/link';
import { BlogPreview } from '../../../backend/database/blogData';
import style from "../blogPrev/blogPrev.module.css"

export default function BlogPrev(props: BlogPreview) {
  return (
    <div className={style.container}>
      <Link className={style.a} href={`blog/${props.slug}`}>
        <h3 >{props.title} </h3>
      </Link>
      <p className={style.date}>{props.date}</p>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}