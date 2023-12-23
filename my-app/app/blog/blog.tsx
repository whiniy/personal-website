import connectDB from "../../../.vscode/src/helpers/db"
import { BlogType } from "../blogData"
import Blog from "../../../.vscode/src/database/blogSchema"
import BlogPreview from "@/components/blogPrev"
import style from "./blog.module.css";


async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Home() {
    const b = await getBlogs()
    if (b) {
        return (
            <div>
                <main>
                    <h2 className = {style.blog_title}>Blog!</h2>
                    {b.map(blog => 
                        <BlogPreview 

                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        slug={blog.slug}
                        />
                    )}
                </main>
            </div>
        )
    }
    else {
        return (
            <div>
                <main>
                <h3 className = {style.blog_title}>No blogs found!</h3>
                </main>
            </div>

        )
    }

}

