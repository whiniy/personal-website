import React from 'react';
import Link from 'next/link';
import { ProjectPreview } from '../../../backend/database/projectData';
import style from "../projectPrev/projectPrev.module.css"
import Image from 'next/image';

function getDateDiff(date: string): string {
  const inputDate = new Date(date);
  const now = new Date();

  const years = now.getFullYear() - inputDate.getFullYear();
  const months = now.getMonth() - inputDate.getMonth();
  const days = now.getDate() - inputDate.getDate();

  if (years > 0) {
    return `${years}yr`;
  }

  if (months > 0) {
    return `${months}m`;
  }

  return `${days}d`;
}

export default function ProjectPrev(props: ProjectPreview) {
  const dateDiff = getDateDiff(props.date);
  return (
    <div>
      <Link className={style.linkBox} href={`portfolio/${props.slug}`}>
        <div className={style.container}>
          <div className={style.user}>

            <Image
              width={40} height={40} 
              src="/instaPFP.jpeg"
              alt="My Insta Profile Pic!"
              className={style.PFP}
            />
            <h1 className={style.username}>winniet <span style={{ color: "rgb(160, 160, 160)" }}>• {dateDiff}</span></h1>
          </div>
          <div className={style.imageWrapper}>
            <Image
              width={330} height={400} 
              src={props.image}
              alt="Image of my project!"
              className={style.projectPic}
            />
          </div>
          <p className={style.numLikes}>__ likes</p>
          <h3 className={style.caption}><b>winniet</b> {props.title}</h3>
        </div>
      </Link>
    </div>
  );
}