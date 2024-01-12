import BlogPreview from "../components/blogPrev";
import getBlogs from "../blogData";

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main>
      <h1>My Blogs!</h1>
      <div>
        {blogPosts.map(((blog:any) =>
          <div key={blog._id}>
            <BlogPreview {...blog._doc} />
          </div>
        ))}
      </div>
    </main>
  );
  }
}