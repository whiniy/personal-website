import React from 'react';
import Link from 'next/link';
import { ProjectPreview } from '../../../backend/database/projectData';
import style from "../projectPrev/projectPrev.module.css"

export default function ProjectPrev(props: ProjectPreview) {
  return (
    <div className={style.container}>
      <Link className={style.a} href={`portfolio/${props.slug}`}>
        <h3 >{props.title} </h3>
      </Link>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}