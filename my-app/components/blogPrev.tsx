import React from 'react';
 
import style from './blogPreview.module.css'

export default function BlogPreview(props: Blog) {
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