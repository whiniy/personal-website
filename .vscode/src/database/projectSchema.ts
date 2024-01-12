/*import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
type IProject = {
    title: string;
    image: string;
    description: string; // for individual blog page
    link: string;
};
//comments: IComment[]; // array for comments

// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;*/
import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export type IProject = {
    image: string;
    projName: string;
    description: string; // for preview
    slug: string; 
    comments: IComment[]; // array for comments
};


// mongoose schema 
export const portfolioSchema = new Schema<IProject>({
    image:{type: String, required: true },
    projName: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
comments: [{
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: String, required: false}
}]
})

// defining the collection and model
const Portfolio = mongoose.models['projects'] ||
mongoose.model('projects', portfolioSchema);

export default Portfolio;