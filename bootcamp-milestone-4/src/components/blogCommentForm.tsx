"use client";

import Comment from "./comment";
import type { IComment } from "@/database/blogSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Blog } from "@/database/blogSchema";

type formProps = {
  post: Blog;
};

export default function CommentForm({ post }: formProps) {

    const [user, setUser] = useState("");
    const [text, setText] = useState("");

    const router = useRouter();
    const truncatedSlug = post.slug.slice(5, post.slug.length)

    async function postComment(params : React.FormEvent) {
        params.preventDefault();

        try {
            const res = await fetch(`/api/Blogs/blog%2F${truncatedSlug}/comment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                user,
                text,
                }),
            });

            if (!res.ok) {
                console.log(res.json);
                throw new Error("Something went wrong");
                return;
            }

            router.refresh();

            setUser("");
            setText("");
            }
            catch(err) {
                console.log(err);
        }

    }

    return (
        <div className="list">
            {post.comments.map((comment: IComment, index) => (
                <Comment key={index} comment={comment} />
            ))}
            <form onSubmit={postComment}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        className="input"
                        type='text'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={3}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn"
                    >Submit comment</button>
            </form>
        </div>
    );
}
