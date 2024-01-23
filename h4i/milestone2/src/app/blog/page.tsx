import React from "react"
import connectDB from "../../../backend/helpers/db"
import BlogS from "../../../backend/database/blogSchema"
import BlogPrev from "@/components/blogPrev/blogPrev"
import style from "../blog/page.module.css"

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogS.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
    const blogs = await getBlogs()
    if (blogs == null) {
        return (
            <div>
                <h1>My Blogs!</h1>
                <br></br>
                <h2>Error finding blogs!</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className={style.title}>My Blogs!</h1>
                <div>
                    {blogs.map(blog => 
                        <div key={blog.id}>
                            <BlogPrev
                                slug={blog.slug} 
                                title={blog.title}
                                date={blog.date}
                                description={blog.description}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}