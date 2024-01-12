import BlogPreview from "../components/blogPrev";
import getBlogs from "../blogData";

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main>
      <h1>My Blogs!</h1>
      <div>
        {blogPosts.map((blog: any) =>(
        <BlogPreview
            title={blog.title}
            date={blog.date}
            slug={blog.slug} 
        />
        ))}
        </div>
    </main>
  );
  }
}

/*{ title: string; date: string; content: string; slug: string; }*/