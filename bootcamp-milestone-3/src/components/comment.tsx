import type { IComment } from "@/database/blogSchema";


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}

type CommentProps = {
    comment: IComment,
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date | string) {
	/*
		Implementation up to you...
	*/
    return new Date(time).toLocaleDateString();
}


function Comment({ comment }: CommentProps) {

    console.log(comment.time);
    // function parseCommentTime(time: IComment["time"]) {
	// /*
	// 	Implementation up to you...
	// */
    // console.log(time);
    //     return time;
    // }
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
            {/* <span>{String(comment.time)}</span> */}
        </div>
    );
}


export default Comment;