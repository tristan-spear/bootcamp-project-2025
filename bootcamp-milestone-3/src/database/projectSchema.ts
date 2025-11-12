import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type Project = {
    title: string;
    //slug: string; 
    //date: Date | string;
    description: string; // for preview
    //content: string; // text content for individual blog page
    image: string; // url for string in public
    link: string;
    //imageAlt: string; // alt for image
        //comments: IComment[]; // array for comments
};


// mongoose schema 
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    //slug: { type: String, required: true },
    //date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    //imageAlt: { type: String, required: true },
    //content: { type: String, required: true },
    link: { type: String, required: true},
})

// defining the collection and model
const Project = mongoose.models.Project ||
    mongoose.model('Project', projectSchema);

export default Project;