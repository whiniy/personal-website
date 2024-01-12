import connectDB from "../../helpers/db";
import Blog from "../../database/blogSchema";
import BlogPreview from "@/app/components/blogPrev";
import style from "./blog.module.css";
import blogs from "../blogData";

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

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main>
      <h1>Blogs</h1>
      <div>
        {blogPosts.map((blog =>
          <div key={blog._id}>
            <BlogPreview {...blog._doc} />
          </div>
        ))}
      </div>
    </main>
  );
  }
}