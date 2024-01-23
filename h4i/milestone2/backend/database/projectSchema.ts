import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
    username: string;
    time: Date;
    comment: string;
};

type IProject = {
    slug: string;
    title: string;
    image: string;
    alt: string;
    description: string; // for preview
    content: string; // for individual blog page
    link: string;
    comments: IComment[]; // array for comments
};

const commentProjectSchema = new Schema<IComment>({
    username: { type: String, required: true },
    time: { type: Date, required: true, default: new Date() },
    comment: { type: String, required: true },
});

const projectSchema = new Schema<IProject>({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true},
    alt: { type: String, required: true},
    description: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: false },
    comments: { type: Schema.Types.Mixed, required: true }
})

const ProjectS = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default ProjectS;