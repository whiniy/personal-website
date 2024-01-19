import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
    username: string;
    comment: string;
    time: Date;
};

// typescript type (can also be an interface)
type IBlog = {
    slug: string;
    title: string;
    date: string;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: {
        username: {type: String, required: false},
        comment: {type: String, required: false},
        time: {type: Date, required: false, default: new Date()}
    }
})

// defining the collection and model
const BlogS = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default BlogS;