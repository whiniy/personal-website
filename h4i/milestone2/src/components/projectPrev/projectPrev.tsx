import React from 'react';
import Link from 'next/link';
import { ProjectPreview } from '../../../backend/database/projectData';
import style from "../projectPrev/projectPrev.module.css"
import Image from 'next/image';


export default function ProjectPrev(props: ProjectPreview) {
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
            <h1 className={style.username}>winniet <span style={{ color: "rgb(160, 160, 160)" }}>•</span></h1>  
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