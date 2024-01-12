/*
type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "SLO Days",
        date: "August 17 - 18",
        description: "Blog 1",
        slug: "blog1.html"
    },

    {
        title: "WOW Week",
        date: "September 15 - 23",
        description: "Blog 2",
        slug: "blog2.html",
    },
];


export type { Blog as BlogType }
export default blogs;
*/

import connectDB from "../../.vscode/src/helpers/db";
import mongoose from 'mongoose'
import Blog from "../../.vscode/src/database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
export default getBlogs;