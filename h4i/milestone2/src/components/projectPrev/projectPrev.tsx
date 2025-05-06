import React from 'react';
import Link from 'next/link';
import { ProjectPreview } from '../../../backend/database/projectData';
import style from "../projectPrev/projectPrev.module.css"
import Image from 'next/image';
import HeartButton from '../heartButton/page';
import { Send } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Bookmark } from 'lucide-react';

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
          <div className={style.buttons}>
            <HeartButton />
            <Link href={`portfolio/${props.slug}`}>
              <MessageCircle style={{ transform: "scaleX(-1)" }}
              className={style.messageCircle} />
            </Link>
            <Link href={`portfolio/${props.slug}`}>
              <Send className={style.send} />
            </Link>
            <div className={style.spacer}></div>
            <Link href={`portfolio/${props.slug}`}>
              <Bookmark className={style.bookmark} />
            </Link>
          </div>
          
          <p className={style.numLikes}><b>_ likes</b></p>
          <h3 className={style.caption}><b>winniet</b> {props.title}</h3>
        </div>
    </div>
  );
}