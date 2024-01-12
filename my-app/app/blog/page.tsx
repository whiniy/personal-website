import BlogPreview from "../components/blogPrev";
import getBlogs from "../blogData";

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main>
      <h1>My Blogs!</h1>
      <ul>
        {blogPosts.map((blog: { title: string; date: string; content: string; slug: string; }) =>(
        <li key={blog.slug}>
        <BlogPreview
            title={blog.title}
            date={blog.date}
            slug={blog.slug} 
        />
        </li>
        ))}
        </ul>
    </main>
  );
  }
}