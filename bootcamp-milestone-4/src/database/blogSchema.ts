import mongoose, { Schema } from "mongoose";


export type IComment = {
	user: string;
	comment: string;
	time: Date | string;
}

// typescript type (can also be an interface)
export type Blog = {
	title: string;
	slug: string;
	date: Date | string;
	description: string; // for preview
	content: string; // text content for individual blog page
	image: string; // url for string in public
	imageAlt: string; // alt for image
	comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>({
	user:{ type: String, required: true },
	comment:{ type: String, required: true},
	time:{ type: Date, required: true },
})
// mongoose schema 
const blogSchema = new Schema<Blog>({
	title: { type: String, required: true },
	slug: { type: String, required: true },
	date: { type: Date, required: false, default: new Date()},
	description: { type: String, required: true },
	image: { type: String, required: true },
	imageAlt: { type: String, required: true },
	content: { type: String, required: true },
	comments: { type: [commentSchema], required: true },
})

// defining the collection and model
const Blog = mongoose.models.Blog ||
    mongoose.model('Blog', blogSchema);

export default Blog;