import type { IComment } from "@/database/blogSchema";
import styles from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date | string) {
  return new Date(time).toLocaleDateString();
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <h4>{comment.user}</h4>
        <span className="muted">{parseCommentTime(comment.time)}</span>
      </div>
      <p className="muted">{comment.comment}</p>
    </div>
  );
}

export default Comment;
