import BlogPreview from "../components/blogPrev";
import getBlogs from "../blogData";
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main>
      <h1>My Blogs!</h1>
      <div>
        {blogPosts.map((blog: { title: string; date: string; content: string; slug: string; }) =>(
        <div>
        <Link href={`blog/${blog.slug}`}>
          <h3>{blog.title} </h3>
        </Link>
        <p>{blog.date}</p>
        </div>
        ))}
      </div>
    </main>
  );
  }
}