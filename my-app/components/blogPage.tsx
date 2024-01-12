import React from 'react';
import Image from 'next/image';

type Comment = {
    user: string;
    comment: string;
    time: Date;
}
type Blog = {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    image: string;
    width: string;
    height: string;
    comments: Comment[];
}

  export default function blogPage(props: Blog) {
    return (
          <main>
          <h2>{props.title}</h2>
          <h3>Date: {props.date}</h3>
          <Image src={props.image} alt="blog-image" width = {208} height = {200}/>
          <p>{props.content}
          </p>
          <div>
              {props.comments.map((comment, index) => (
                      <div key = {index}> 
                          <p>{comment.user}</p>
                          <p>{comment.comment}</p>
                      </div>
                  ))}
          </div>
          </main>
    );
  }