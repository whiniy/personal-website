import mongoose from "mongoose";
import { Schema } from "mongoose";

type IProject = {
    slug: string;
    title: string;
    image: string;
    alt: string;
    description: string; // for preview
    content: string; // for individual blog page
    link: string;
};

const projectSchema = new Schema<IProject>({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true},
    alt: { type: String, required: true},
    description: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: false },
})

const ProjectS = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default ProjectS;