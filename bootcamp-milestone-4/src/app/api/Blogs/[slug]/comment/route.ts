import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Blogs from "@/database/blogSchema";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) 
{
	
    try {
        await connectDB();
        const body = await req.json();
        const { slug } = await params;
        // validate body
        if (!body || !body.user || !body.text) {
            return NextResponse.json("Missing fields", {status : 400});
        }

        const newComment = {
            user : body.user,
            comment : body.text,
            time : new Date(),
        }

        const updatedBlog = await Blogs.findOneAndUpdate(
            { slug }, 
            { $push : { comments : newComment }},
            { new : true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Comment added successfully", addedComment: newComment },
            { status: 201 }
        );
    }

    catch (err) {
        console.log(`Error: ${err}`);
        return NextResponse.json(
        { error: "There has been and error, nothing added" },
        { status: 500 },
        );
    }
    
}
