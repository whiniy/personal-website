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
  const b = await getBlogs();
  if (b) {
    return (
      <main>
        <div>
          <h2 className={style.blog_title}>Blog!</h2>
          {b.map((blog: any) => (
            <div key={blog.id}>
              <BlogPreview
                title={blog.title}
                description={blog.description}
                date={blog.date}
                slug={blog.slug}
              />
            </div>
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h3 className={style.blog_title}>No blogs found!</h3>
        </div>
      </main>
    );
  }
}
