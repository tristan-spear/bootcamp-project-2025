import mongoose, { Schema } from "mongoose";


export type IComment = {
    user: string;
    comment: string;
    time: Date | string;
}

const commentSchema = new Schema<IComment>({
    user:{ type: String, required: true },
    comment:{ type: String, required: true},
    time:{ type: Date, required: true },
})

// typescript type (can also be an interface)
export type Project = {
    _id : Schema.Types.ObjectId | string;
    title: string;
    //slug: string; 
    //date: Date | string;
    description: string; // for preview
    //content: string; // text content for individual blog page
    image: string; // url for string in public
    link: string;
    //imageAlt: string; // alt for image
    comments: IComment[]; // array for comments
};


// mongoose schema 
const projectSchema = new Schema<Project>({
    _id: { type: Schema.Types.ObjectId, required: true},
    title: { type: String, required: true },
    //slug: { type: String, required: true },
    //date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    //imageAlt: { type: String, required: true },
    //content: { type: String, required: true },
    link: { type: String, required: true},
    comments: { type: [commentSchema], required: true },
})

// defining the collection and model
const Project = mongoose.models.Project ||
    mongoose.model('Project', projectSchema);

export default Project;