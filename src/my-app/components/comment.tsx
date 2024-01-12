import {IComment} from "../database/blogSchema"


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    const date = new Date(time).toLocaleString("en-US", 
        {
            weekday: "short",
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour12: true,
        }
    )
    return date
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.username}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;