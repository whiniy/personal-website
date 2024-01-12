import connectDB from "../../../../.vscode/src/helpers/db"
import Blog from "../../../../.vscode/src/database/blogSchema"
import style from "../blog.module.css"

type Props = {
    params: { slug: string }
}

async function getOneBlog(slug: string){
	await connectDB() // function from db.ts before

	try {
		
	    const blog = await Blog.findOne({slug}).orFail()
			// send a response as the blogs as the message
	    return blog
	} catch (err) {
	    return null
	}
}

export default async function Home( p : Props) {
	// now we can access slug
	const slug = p.params.slug;
    const oneBlog = await getOneBlog(slug);

    if (oneBlog) {
        return (
            <div>
            <h2> {oneBlog.title} </h2>
            <div>
                <p>{oneBlog.date}</p>
                <p>{oneBlog.description}</p>
            </div>
            <div>
                {oneBlog.comments}
            </div>
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