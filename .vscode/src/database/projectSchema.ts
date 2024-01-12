import mongoose from "mongoose";
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

export default Project;