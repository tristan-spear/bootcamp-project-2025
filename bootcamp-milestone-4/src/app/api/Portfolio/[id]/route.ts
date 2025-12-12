import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Projects from "@/database/projectSchema";

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	
    try {
        await connectDB();
        const body = await req.json();
        const { id } = await params;
        // validate body
        if (!body || !body.user || !body.text) {
            return NextResponse.json("Missing fields", {status : 400});
        }

        const newComment = {
            user : body.user,
            comment : body.text,
            time : new Date(),
        }

        const updatedProject = await Projects.findOneAndUpdate(
            { _id : id }, 
            { $push : { comments : newComment }},
            { new : true }
        );

        if (!updatedProject) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Comment added successfully", addedComment: newComment , projectUpdated: updatedProject},
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
