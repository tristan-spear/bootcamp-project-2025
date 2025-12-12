"use client";

import Link from "next/link";
import Comment from "./comment";
import type {IComment} from '@/database/projectSchema';
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/database/projectSchema";



type commentArr = {
    comments: IComment[];
}

type formProps = {
    proj : Project;
}

export default function ProjectCommentForm({ proj } : formProps ) {

    const [user, setUser] = useState("");
    const [text, setText] = useState("");
    const [day, setDay] = useState();

    const router = useRouter();
    //const truncatedSlug = post.slug.slice(5, post.slug.length)

    async function postComment(params : React.FormEvent) {
        params.preventDefault();

        const stringId = JSON.stringify(proj._id);

        try {
            const res = await fetch(`/api/Portfolio/${proj._id}`, {
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
            }
            catch(err) {
                console.log(err);
        }

    }

    return (
        <div className='bg-primary rounded' style={{backgroundColor: "darkBlue"}}>
                <h5 style={{border: "1px solid white"}}>Comments:</h5>
                <br />
                {proj.comments.map((comment: IComment, index) => (
                        <Comment key={index} comment={comment} />
	            ))}
                <div style={{backgroundColor: "black"}}>
                    <h6 style={{border: "1px solid white"}}>Add a comment:</h6>
                    <br />
                    <form onSubmit={postComment}>
                        <label>Name:</label>
                        <input
                            type='text'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style={{ height: "30px" }}
                        />

                        <label>Comment</label>
                        <input
                            type='text'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            style={{ height: "30px" }}
                        />
                        <button 
                            type="submit" 
                            style={{color: "white", backgroundColor: "rgb(129, 225, 225)", borderRadius: "5px", padding: "5px"}}
                            >Submit</button>
                    </form>
                </div>
                </div>
    );
}