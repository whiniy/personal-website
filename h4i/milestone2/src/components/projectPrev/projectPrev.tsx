import React from 'react';
import Link from 'next/link';
import { ProjectPreview } from '../../../backend/database/projectData';
import style from "../projectPrev/projectPrev.module.css"

export default function ProjectPrev(props: ProjectPreview) {
  return (
    <div>
      <Link className={style.linkBox} href={`portfolio/${props.slug}`}>
        <div className={style.container}>
          <h3 >{props.title} </h3>
          <p className={style.description}>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}