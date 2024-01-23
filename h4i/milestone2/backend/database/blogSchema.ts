import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
    username: string;
    time: Date;
    comment: string;
};

// typescript type (can also be an interface)
type IBlog = {
    slug: string;
    title: string;
    date: string;
    image: string;
    alt: string;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>({
    username: { type: String, required: true },
    time: { type: Date, required: true, default: new Date() },
    comment: { type: String, required: true },
});


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true},
    image: { type: String, required: true },
    alt: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: Schema.Types.Mixed, required: true }
})

// defining the collection and model
const BlogS = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default BlogS;