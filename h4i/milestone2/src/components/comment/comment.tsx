import React from 'react';
import style from "../comment/comment.module.css"
import { IComment } from '../../../backend/database/blogSchema';


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
export function parseCommentTime(time: Date){
    return new Date(time).toLocaleString('en-US', {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        }
    );
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.commentContainer}>
            <h3 >{comment.username}</h3>
            <span className={style.time}>{parseCommentTime(comment.time)}</span>
            <p className={style.comment}>{comment.comment}</p>
        </div>
    );
}

export default Comment;
